#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const allowedEvidence = new Set([
  'ESTABLISHED_IN_LOCAL_TEST',
  'ESTABLISHED_ONCE',
  'ESTABLISHED_REPEATEDLY',
  'SUSTAINED',
  'UNKNOWN'
]);

function usage() {
  return 'Usage: node claim-scope-review.mjs path/to/review.json';
}

function hasText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export function review(input) {
  const findings = [];
  const required = ['claim', 'observation', 'evidence_state', 'nonclaims', 'next_discriminator'];

  for (const key of required) {
    if (!(key in input)) findings.push({ level: 'HOLD', field: key, message: `Missing required field: ${key}.` });
  }
  if (hasText(input.claim) === false) findings.push({ level: 'HOLD', field: 'claim', message: 'Write the exact claim being reviewed.' });
  if (hasText(input.observation) === false) findings.push({ level: 'HOLD', field: 'observation', message: 'State the directly observed event and conditions.' });
  if (!allowedEvidence.has(input.evidence_state)) {
    findings.push({ level: 'HOLD', field: 'evidence_state', message: 'Use a supported evidence-state label.' });
  }
  if (!Array.isArray(input.nonclaims) || input.nonclaims.length === 0 || !input.nonclaims.every(hasText)) {
    findings.push({ level: 'HOLD', field: 'nonclaims', message: 'List at least one conclusion that is not established.' });
  }
  if (hasText(input.next_discriminator) === false) {
    findings.push({ level: 'HOLD', field: 'next_discriminator', message: 'Name one concrete next observation that would change the conclusion.' });
  }
  if (input.evidence_state === 'UNKNOWN' && hasText(input.claim)) {
    findings.push({ level: 'CHECK', field: 'claim', message: 'Evidence is UNKNOWN. Keep the claim framed as an open question or hold it.' });
  }
  return {
    status: findings.some((finding) => finding.level === 'HOLD') ? 'HOLD' : findings.some((finding) => finding.level === 'CHECK') ? 'REVIEW' : 'READY_FOR_HUMAN_DECISION',
    findings,
    boundary: 'This tool checks whether the review record is complete. It does not verify that a claim is true, decide whether a result is sufficient for its intended use, assess legal compliance, or replace human judgment.'
  };
}

function main(argv) {
  const file = argv[2];
  if (!file) throw new Error(usage());
  const input = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
  console.log(JSON.stringify(review(input), null, 2));
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  try { main(process.argv); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
