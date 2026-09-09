# Live Coding — AI Quote Generator API

## Prerequisites

- Node.js 20+
- An API key for the model provider used in class
- Basic JavaScript and Express knowledge

## Setup

```bash
npm install
cp .env.example .env
```

Add your key to `.env`.

## Run

```bash
npm run dev
```

## Test

```bash
curl -X POST http://localhost:3000/api/quotes \
  -H "Content-Type: application/json" \
  -d '{"topic":"discipline"}'
```

## Learning checkpoints

### Checkpoint 1 — Plain model call

Students should be able to trace:

```text
route → service → provider SDK → model → response
```

### Checkpoint 2 — Validation

Send an empty body and inspect the 400 response.

### Checkpoint 3 — Failure handling

Temporarily invalidate the API key and observe how the server handles provider failure.

### Checkpoint 4 — Prompt change

Change the system instruction and compare model behavior.

### Checkpoint 5 — Streaming

As an extension, replace a buffered response with a streamed response and discuss connection lifecycle, cancellation and partial output.

## Architecture exercise

Ask students to evolve the code for:

- 100 users
- 10,000 users
- 1,000,000 requests/month

They must identify bottlenecks and propose changes without changing the product requirement.
