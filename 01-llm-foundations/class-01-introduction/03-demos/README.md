# Class 01 Demos

## Demo 01 — The AI App Is More Than the Model

Show a simple flow:

```text
React UI
  ↓
Express API
  ↓
Validation + Prompt Construction
  ↓
LLM Provider
  ↓
Post-processing / Validation
  ↓
Response / Stream
```

Stop before the API call and ask students what can go wrong at every boundary.

## Demo 02 — Prompt vs Application Logic

Implement a simple requirement twice:

**Prompt-heavy:** ask the model to determine whether a request is allowed.

**Application-controlled:** validate hard constraints in JavaScript first, then ask the model only for the fuzzy language task.

Lesson: deterministic business rules should remain in deterministic code where practical.

## Demo 03 — Model Failure

Force an upstream failure and show that the application still needs:
- error mapping
- user-safe messages
- logs
- request IDs
- timeout/retry policy

## Demo 04 — Streaming UX

Compare:

```text
Request → wait → full answer
```

with:

```text
Request → chunk → chunk → chunk → complete
```

Discuss perceived latency, cancellation, partial failure, and connection lifecycle.
