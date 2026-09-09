# Claim Scope Review CLI

An AI response can sound ready to share before you have checked what actually happened. This small, dependency-free local helper makes the missing parts of that check visible.

For example, if an AI says, “The fix is safe and ready for production,” do not paste that sentence into an update yet. Start with `example.review.json`, replace it with the test you actually ran, and run the command below. The tool will tell you if the review record is missing the observation, evidence label, nonclaims, or the next check that would matter.

It checks that you have supplied:

- the exact claim;
- a directly observed event and its conditions;
- an evidence-state label;
- at least one explicit nonclaim; and
- one next discriminator.

If the result is `READY_FOR_HUMAN_DECISION`, the record is complete enough for a person to judge. It does **not** mean the claim is true. This tool does not contact a provider, upload text, assess legal compliance, or replace human review.

## Smallest useful first step

1. Copy `example.review.json` to a new file.
2. Replace the sample sentences with one AI-assisted claim you are about to share.
3. Run the command. If it returns `HOLD`, fill in the named missing field before sharing.

```sh
node claim-scope-review.mjs example.review.json
```

## Input

```json
{
  "claim": "Exact statement to be shared.",
  "observation": "What directly happened, including the relevant conditions.",
  "evidence_state": "ESTABLISHED_ONCE",
  "nonclaims": ["What the available evidence does not establish."],
  "next_discriminator": "The one next observation most likely to change the conclusion."
}
```

Supported evidence states are `ESTABLISHED_IN_LOCAL_TEST`, `ESTABLISHED_ONCE`, `ESTABLISHED_REPEATEDLY`, `SUSTAINED`, and `UNKNOWN`.

## Relationship to the free checklist

This is a local companion to the [Claim-Scope Review Checklist](https://worldreader6.gumroad.com/l/mkebln). The checklist helps people reason through a claim; this script only verifies that a minimal review record has all of its fields.

日本語での使い方は [README.ja.md](README.ja.md) にあります。
