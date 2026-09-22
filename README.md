# Jinen Project


Small, runnable specimens and field notes for people who use AI-assisted workflows.


The work here explores small, inspectable ways to help people keep AI agents from moving past an important check. The practical distinction is: what can continue, what needs a check before it continues, and what should stop. These are bounded examples, not a claim that one pattern solves every AI workflow.


## Start here


- [wedge-case-0](https://github.com/jinen-project/wedge-case-0) — a four-file, dependency-free demo that separates PASS, HOLD, and STOP in an AI workflow.
- [wedge-case-1](https://github.com/jinen-project/wedge-case-1) — a small state-machine specimen showing that one held item must not silently hold an entire workflow.
- [wedge-case-2](https://github.com/jinen-project/wedge-case-2) — a zero-dependency demo that keeps handoff readiness, approval, and deployment authorization separate.
- [wedge-case-3](https://github.com/jinen-project/wedge-case-3) — a zero-dependency demo that adopts only the exact candidate set bound by authorization.
- [cms-inventory-preflight](https://github.com/jinen-project/cms-inventory-preflight) — a dependency-free CLI that classifies a local content inventory before another draft is created.
- [claim-scope-review-cli](claim-scope-review-cli/) — a small local helper for checking whether an AI-assisted claim has a recorded observation, evidence label, nonclaims, and next check before it is shared.
- [Share Preflight](https://github.com/jinen-project/share-preflight) — local-first, configurable checks for the moment before you share technical material with an external AI tool or service. It produces a content-minimised policy receipt for the configured scope; it does not decide that a share is safe.

## Bounded public extracts

These are small, independently usable releases made from existing work. They do not release complete internal projects, raw records, or production systems. Each repository states its own scope and non-claims.

- [Open-Ended Workflow Kit / 開かれたワークフロー・キット](https://github.com/jinen-project/open-ended-workflow-kit) — a runnable authorization-boundary specimen with synthetic fixtures and tests.
- [Reversibility Review Kit / 可逆性レビュー・キット](https://github.com/jinen-project/reversibility-review-kit) — a review-engine extract for examining closure, reversibility, recovery, and accumulated concentration; not a future predictor or safety proof.
- [Decision Trace Casebook / 意思決定トレース事例集](https://github.com/jinen-project/decision-trace-casebook) — a reusable decision-trace template and one clearly fictional minimal case.
- [Evidence Reading Ledger / 根拠読解台帳](https://github.com/jinen-project/evidence-reading-ledger) — schemas and fully synthetic linked examples for keeping claims, evidence, questions, and reading records distinct.
- [Notes on Open Worlds / 開かれた世界のノート](https://github.com/jinen-project/notes-on-open-worlds) — a Japanese theory/design note; not an empirical research paper or an implementation claim.


## Before sharing with an external AI service

Share Preflight provides local, configurable checks for the moment before technical material is sent to an external AI tool or service. A passing result is a receipt for the configured checks, not a claim that sharing is safe. If a boundary check is missing, open a public-safe issue using the link below; the `placement:portfolio-hub-readme-v01` tag lets the observation be linked back without treating the issue as validation.

[Report a public-safe boundary observation](https://github.com/jinen-project/jinen-project/issues/new?title=%5Bplacement%3Aportfolio-hub-readme-v01%5D%20Share%20Preflight%20boundary%20observation&body=placement%3Aportfolio-hub-readme-v01%0A%0AWhat%20I%20checked%3A%0AWhat%20I%20observed%3A%0AWhat%20I%20expected%3A)

## Field notes and a free checklist


- [World Reading Note](https://world-reading.pages.dev) — public reading notes.
- [Before You Create Another Draft, Check What Already Exists](https://worldreadingnote.hashnode.dev/before-you-create-another-draft-check-what-already-exists) — a bounded five-step CMS preflight, based on one observed duplicate-draft correction.
- [Claim Scope Review Checklist](https://worldreader6.gumroad.com/l/mkebln) — a free checklist for separating what was observed, what is supported, and what remains unproven.


## How to respond


The most useful response is a concrete one:


- an observation from using a specimen;
- a counterexample or edge case;
- a question about a stated boundary; or
- a suggestion that makes a demo easier to run or inspect.


Please [open an issue](https://github.com/jinen-project/jinen-project/issues/new/choose) with only material that is safe to make public. Include the conditions you observed and the result you expected or received. We do not treat an issue as a commitment to provide support, ship a feature, or accept a contribution.


See [CONTRIBUTING.md](CONTRIBUTING.md) for the short reporting format.


## One small check before you forward an AI answer


When an AI answer sounds certain, the useful first move is not to make it less useful. It is to make the evidence boundary visible. The [Claim Scope Review CLI](claim-scope-review-cli/) gives you a small local record to fill in before you share a result. It does not decide whether the result is true; it tells you when the record is missing what was observed, what remains unproven, or what to check next.
