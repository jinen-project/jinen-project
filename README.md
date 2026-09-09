# Jinen Project

Small, runnable specimens and field notes for AI-assisted workflows.

The work here focuses on a practical distinction: what can continue, what needs a check before it continues, and what should stop. These are bounded examples, not a claim that one pattern solves every AI workflow.

## Start here

- [wedge-case-0](https://github.com/jinen-project/wedge-case-0) — a four-file, dependency-free demo that separates PASS, HOLD, and STOP in an AI workflow.
- [wedge-case-1](https://github.com/jinen-project/wedge-case-1) — a small state-machine specimen showing that one held item must not silently hold an entire workflow.
- [wedge-case-2](https://github.com/jinen-project/wedge-case-2) — a zero-dependency demo that keeps handoff readiness, approval, and deployment authorization separate.
- [wedge-case-3](https://github.com/jinen-project/wedge-case-3) — a zero-dependency demo that adopts only the exact candidate set bound by authorization.
- [cms-inventory-preflight](https://github.com/jinen-project/cms-inventory-preflight) — a dependency-free CLI that classifies a local content inventory before another draft is created.

## Field notes and a free checklist

- [World Reading Note](https://worldreadingnote.hashnode.dev/) — short notes from building, observing, and revising AI-assisted work.
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

## Scope

These repositories make individual patterns inspectable. They do not establish general AI safety, compliance, production readiness, or suitability for a particular system. Each specimen states its own conditions and limits.

Maintained by Yosuke Yoshimura.
