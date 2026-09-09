# Class 01 Experiments

These experiments are intentionally small and hypothesis-driven. Students should run them, observe outputs, and write conclusions before the instructor explains the theory.

## Experiment 01 — Same Prompt, Multiple Runs

Hypothesis: LLM output can vary because generation is probabilistic.

Task:
- Run the same prompt 5 times.
- Record each response.
- Compare wording, structure, and factual consistency.
- Repeat with a more constrained prompt.

Discussion:
- What changed?
- What stayed stable?
- Why can HTTP 200 still mean a bad answer?

## Experiment 02 — Context Changes Behaviour

Run the same user request with three contexts:
1. No additional context.
2. A short developer profile.
3. A contradictory developer profile.

Goal: establish that application-provided context changes model behaviour.

## Experiment 03 — Prompt Length as an Engineering Variable

Create short, medium, and long prompts for the same task.

Record:
- Input token estimate from the provider/tooling.
- Latency.
- Output quality.
- Approximate cost where available.

Do not claim causation from one run. Repeat enough times to identify a pattern.

## Experiment 04 — Failure Is Part of the System

Simulate:
- Missing API key.
- Invalid request body.
- Provider error.
- Slow provider response.

Students must identify which failure should be handled by:
- client validation
- API layer
- model service
- infrastructure

## Experiment 05 — Provider Abstraction

Create a minimal interface:

```js
export async function generateText(input) {
  // provider-specific implementation lives behind this boundary
}
```

Discuss why an application should not spread provider-specific SDK calls throughout the codebase.
