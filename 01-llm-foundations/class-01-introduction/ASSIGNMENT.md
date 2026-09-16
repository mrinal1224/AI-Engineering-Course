# Assignment 01 — Build Your First AI Utility API

## Objective

Build one small production-minded AI backend using Node.js and Express.

The goal is **not** to build a large feature set.

The goal is to demonstrate that you understand the boundary between:

```text
Application Code
      ↓
LLM Service
      ↓
Provider API
      ↓
Model
```

---

# Part A — Mandatory

## Endpoint

Create:

```text
POST /api/generate
```

Input:

```json
{
  "topic": "JavaScript closures"
}
```

Output:

```json
{
  "text": "..."
}
```

The exact generated text is not graded for wording. The implementation and engineering structure are the focus.

---

## Mandatory requirements

### 1. Node.js + Express

Use the web-development stack used in class.

### 2. Environment variables

Keep provider credentials outside source code.

Include:

```text
.env.example
```

but never commit a real `.env` file.

### 3. Service layer

Provider calls must live outside the route handler.

Recommended:

```text
src/
├── app.js
├── routes/
│   └── generate.routes.js
└── services/
    └── llm.service.js
```

### 4. Validation

Reject requests where:

- `topic` is missing
- `topic` is not a string
- `topic` is empty/whitespace-only

Return a suitable `4xx` response.

### 5. Error handling

Handle provider/API failures gracefully.

Do not return raw provider errors or secrets to the client.

### 6. README

Your README must explain:

- request flow
- architecture
- where the API key lives
- what happens when the provider fails

Include one small architecture diagram.

---

# Part B — Engineering Reflection

Answer these questions in your README:

1. Why should the model provider call not be written directly inside every route?
2. Why should the API key not be placed in React/browser code?
3. Why validate input before making the model request?
4. What happens to your application if the model provider is unavailable?
5. Why can an HTTP 200 response still represent a bad AI product outcome?

Keep each answer to 2–5 sentences.

---

# Part C — Stretch Goals

Choose any 2.

### Stretch 1 — Streaming

Stream generated output to a client.

### Stretch 2 — Latency

Measure the time taken by the model request.

Example:

```text
LLM latency: 1240 ms
```

### Stretch 3 — Request ID

Generate a unique request ID and include it in logs.

### Stretch 4 — Rate Limiting

Prevent a user from making unlimited model requests.

### Stretch 5 — Provider Abstraction

Create a second provider implementation behind the same service interface.

### Stretch 6 — Automated Tests

Test:

- validation failures
- provider failure handling
- successful response shape

---

# Submission Checklist

```text
[ ] POST /api/generate works
[ ] Input validation works
[ ] Provider call is inside a service
[ ] API key is not committed
[ ] .env.example exists
[ ] Provider errors are handled
[ ] README explains architecture
[ ] Architecture diagram included
[ ] Reflection questions answered
```

---

# Rubric

| Area | Weight |
|---|---:|
| Working AI endpoint | 25% |
| Service-layer architecture | 20% |
| Validation + error handling | 20% |
| Security / environment handling | 15% |
| README + architecture explanation | 10% |
| Engineering reflection | 10% |

---

# Submission Format

Repository should contain:

```text
src/
.env.example
README.md
package.json
```

Do not submit secrets.

## Important

The assignment is intentionally small.

**Do not build authentication, a frontend, a database, RAG, agents, or a multi-provider platform for this assignment.** Those topics belong later in the course.
