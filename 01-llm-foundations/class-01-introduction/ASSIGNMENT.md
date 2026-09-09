# Assignment 01 — AI Utility Service

## Objective

Build a small production-minded AI backend using Node.js and Express.

The goal is not to build a fancy UI. The goal is to practice the engineering boundary between application code and an LLM.

## Required Endpoints

```text
POST /summarize
POST /rewrite
POST /classify
```

### `/summarize`

Input:

```json
{
  "text": "JavaScript is a programming language..."
}
```

Output:

```json
{
  "result": "..."
}
```

### `/rewrite`

Input:

```json
{
  "text": "Please check this once.",
  "tone": "professional"
}
```

The API should return a rewritten version matching the requested tone.

### `/classify`

Input:

```json
{
  "text": "I cannot log in to my account"
}
```

Return a structured response with at least:

```json
{
  "category": "authentication",
  "confidence": 0.0,
  "reason": "..."
}
```

## Engineering Requirements

- Use an LLM service abstraction.
- Validate all request bodies.
- Keep API credentials on the server.
- Add consistent error handling.
- Handle provider/API failures gracefully.
- Add a README explaining the architecture.
- Do not commit `.env`.

## Recommended Structure

```text
src/
├── app.js
├── routes/
├── services/
├── prompts/
└── utils/
```

## Stretch Goals

1. Add streaming to `/summarize`.
2. Add request IDs.
3. Add rate limiting.
4. Record model latency.
5. Record token usage when supported by the provider.
6. Support two model providers behind one interface.
7. Add automated tests for validation and failure behavior.

## Evaluation Rubric

| Area | Weight |
|---|---:|
| Correct functionality | 25% |
| AI integration quality | 20% |
| API architecture | 20% |
| Validation + error handling | 15% |
| Security practices | 10% |
| README + architecture explanation | 10% |

## Submission

Repository should contain:

- source code
- `.env.example`
- README
- sample API requests
- architecture diagram
- short note describing one production risk and how you would mitigate it
