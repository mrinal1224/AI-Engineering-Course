# Class 01 — Introduction to AI Engineering

## Class Thesis

AI Engineering is not "calling an LLM API". It is the engineering discipline of turning probabilistic models into reliable software systems.

By the end of this class, students should be able to explain the AI application stack, reason about an LLM request from user input to streamed output, identify the responsibilities of an AI Engineer, and build a small Node.js AI API without a framework abstraction hiding the important steps.

## Duration

4 hours

## Learning Outcomes

Students will be able to:

1. Differentiate AI, ML, Deep Learning, Generative AI, LLMs and AI Engineering.
2. Describe the high-level lifecycle of an LLM request.
3. Explain tokens, context windows, inference and model parameters.
4. Identify why LLM output is probabilistic and why reliability must be engineered around it.
5. Build a Node.js/Express endpoint that sends a prompt to a model.
6. Stream model output to a client.
7. Separate application code from model-provider code.
8. Identify immediate production concerns: secrets, latency, cost, retries and logging.

---

## 1. Instructor Narrative

### Opening: What changed?

Start with a familiar software-engineering question:

> "For the last few years, when we built software, most logic was deterministic. If input X came in, our code decided what output to produce. What happens when part of our software is a model that can produce different valid outputs for the same input?"

Use this to introduce the core shift:

- Traditional software: rules are explicitly programmed.
- AI systems: part of the behavior is learned from data and inferred at runtime.
- AI Engineering: the surrounding software has to make that probabilistic behavior useful, safe, observable and cost-effective.

### A useful analogy

Think of an LLM as a highly capable junior engineer:

- It can generate ideas quickly.
- It has broad knowledge.
- It can misunderstand instructions.
- It can confidently produce an incorrect answer.
- It needs context and constraints.
- It cannot be the only reliability layer in a production system.

The surrounding application is the engineering system that gives the model tools, context, validation and guardrails.

---

## 2. AI Vocabulary Ladder

### Artificial Intelligence

The broad field of creating systems that perform tasks associated with intelligence.

### Machine Learning

A subset of AI where systems learn patterns from data rather than relying entirely on hand-written rules.

### Deep Learning

Machine learning using multi-layer neural networks.

### Generative AI

Models that generate new content such as text, images, audio or code.

### Large Language Model

A language model trained at large scale that predicts tokens and can be used for generation, transformation, reasoning-like tasks and tool interaction.

### AI Engineering

The software engineering discipline of building applications around AI models, including orchestration, retrieval, tools, evaluation, security, UX, cost and deployment.

### Teaching point

Do not let students equate AI Engineering with prompt engineering. Prompting is one tool inside the larger engineering discipline.

---

## 3. The AI Application Stack

Use this layered mental model throughout the course:

```text
User / Product Experience
        ↓
Application Logic
        ↓
AI Orchestration
        ↓
Context / Memory / Retrieval
        ↓
Tools / External Systems
        ↓
Model Provider / Local Model
        ↓
Infrastructure
```

Examples:

- React = user experience
- Express = application/API layer
- RAG = context layer
- Tool calling = external system integration
- OpenAI/Gemini/Ollama = model layer
- logs, metrics, queues, caches = infrastructure

The model is one component, not the entire product.

---

## 4. What Happens During an LLM Request?

Walk through this request:

```text
POST /chat
{
  "message": "Explain closures in JavaScript"
}
```

High-level flow:

```text
Browser
  │
  ▼
Express API
  │
  ├── authentication
  ├── validation
  ├── prompt construction
  │
  ▼
Model Provider
  │
  ├── tokenize input
  ├── run inference
  └── generate token sequence
  │
  ▼
Express
  │
  └── stream / return response
  │
  ▼
Browser
```

Emphasize that the model is not executing JavaScript rules. It is generating tokens based on learned statistical structure and the current context.

---

## 5. Tokens

Students should understand tokens before they learn pricing or context windows.

A token is a unit used by the model's tokenizer. It may correspond to a word, part of a word, punctuation or another piece of text depending on the tokenizer.

Important consequences:

- Costs are usually tied to token usage.
- Context windows are measured in tokens.
- Long prompts reduce the remaining space available for output and additional context.
- Token boundaries are not the same as words or characters.

### Mini activity

Give students these examples and ask which is likely to require more tokens:

```text
hello
hello hello hello
internationalization
const calculateTotal = (items) => ...
```

Do not make students memorize exact token counts; the goal is to develop intuition.

---

## 6. Context Window

Define context as the information the model receives for the current inference.

A useful mental model:

```text
┌──────────────────────────────────────┐
│ System instructions                  │
│ Conversation history                 │
│ Retrieved documents                  │
│ Tool results                         │
│ User request                         │
│                                      │
│            CONTEXT WINDOW            │
│                                      │
│ Generated output                     │
└──────────────────────────────────────┘
```

Key lesson:

> An LLM does not automatically know the state of your application.

If the application needs the model to use a user's profile, database record or PDF, the application must provide that information through context or tools.

This observation becomes the foundation for RAG, memory and agents later in the course.

---

## 7. Inference and Temperature

### Inference

Inference is the process of using a trained model to produce an output for a given input.

### Temperature intuition

Temperature affects how strongly the model favors high-probability next tokens versus exploring lower-probability alternatives.

Teaching experiment:

Ask the same model 5 times at different settings and compare outputs.

Do not teach temperature as a quality dial. It is a behavior control, not a guarantee of better answers.

---

## 8. Why LLM Output Is Probabilistic

Students often ask:

> "Why doesn't the model just give the correct answer?"

Explain that language generation is not a deterministic database lookup. The model generates a sequence of tokens conditioned on the context.

This creates engineering problems:

- hallucinations
- inconsistent formatting
- sensitivity to prompt changes
- variable latency
- provider failures
- cost variation

Therefore AI applications need traditional engineering around the model:

```text
Model
 + validation
 + retries
 + fallbacks
 + evaluation
 + guardrails
 + monitoring
 = production AI system
```

---

# 9. Live Coding Lab

## Goal

Build a minimal AI backend using Node.js + Express + a model provider SDK.

### Project

**AI Quote Generator API**

Endpoint:

```text
POST /api/quotes
```

Input:

```json
{
  "topic": "discipline"
}
```

Output:

```json
{
  "quote": "..."
}
```

### Suggested project structure

```text
class-01-ai-api/
├── src/
│   ├── app.js
│   ├── routes/
│   │   └── quote.routes.js
│   ├── services/
│   │   └── llm.service.js
│   └── prompts/
│       └── quote.prompt.js
├── .env.example
├── package.json
└── README.md
```

### Step 1 — Initialize

```bash
mkdir class-01-ai-api
cd class-01-ai-api
npm init -y
npm install express dotenv
npm install openai
```

### Step 2 — Environment

`.env`

```env
OPENAI_API_KEY=your_key_here
PORT=3000
```

`.env.example`

```env
OPENAI_API_KEY=
PORT=3000
```

### Step 3 — Model service

`src/services/llm.service.js`

```js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateQuote(topic) {
  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-5-mini",
    input: [
      {
        role: "system",
        content: "You write short, original motivational quotes.",
      },
      {
        role: "user",
        content: `Write one concise quote about: ${topic}`,
      },
    ],
  });

  return response.output_text;
}
```

Keep the exact model name configurable because model availability and pricing can change.

### Step 4 — Express route

`src/app.js`

```js
import "dotenv/config";
import express from "express";
import { generateQuote } from "./services/llm.service.js";

const app = express();
app.use(express.json());

app.post("/api/quotes", async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic || typeof topic !== "string") {
      return res.status(400).json({
        message: "topic is required and must be a string",
      });
    }

    const quote = await generateQuote(topic);

    return res.json({ quote });
  } catch (error) {
    console.error("LLM request failed", error);

    return res.status(500).json({
      message: "Unable to generate quote",
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
```

### Step 5 — Discuss the architecture

Pause after the working request and ask:

- Why is the provider call inside a service?
- Why should we not put the API key in React?
- Why do we validate input before calling the model?
- What happens if the provider is down?
- What happens if 10,000 users hit this endpoint?
- How would we measure token usage?
- How would we test whether the output is good?

Do not answer all questions immediately. Record them as the roadmap for later classes.

---

# 10. Streaming Extension

Explain that a generated response can be sent incrementally instead of waiting for the whole response.

Target UX:

```text
Model: "JavaScript closures are..."
              ↓
Browser receives chunks
              ↓
Text appears progressively
```

Teaching objective is architectural understanding first: streaming reduces perceived latency and enables better AI UX, but introduces more complex connection handling, cancellation and error behavior.

The exact provider streaming API can vary. Use the current official SDK documentation when implementing the lab.

---

# 11. Production Checklist Introduced in Class 1

Students should leave with this checklist:

### Secrets

- API keys belong in environment variables or a secret manager.
- Never ship provider credentials to the browser.

### Reliability

- Validate input.
- Handle provider failures.
- Use bounded retries for transient failures.
- Add timeouts.

### Cost

- Track token usage.
- Set sensible limits.
- Prefer the smallest model that satisfies the task.

### Latency

- Measure model latency.
- Consider streaming.
- Avoid unnecessarily large prompts.

### Observability

Log enough to debug production requests without leaking sensitive user data.

---

# 12. In-Class Exercises

### Exercise A — Prompt variation

Change only the system instruction and observe output changes.

### Exercise B — Context injection

Add a developer profile to the prompt and ask the model to personalize the quote.

### Exercise C — Failure simulation

Replace the API key temporarily and inspect the application behavior.

### Exercise D — Cost thinking

Ask students how they would prevent a single user from generating unlimited expensive requests.

---

# 13. Assignment

## Assignment 01 — AI Utility Service

Build an Express API with three endpoints:

```text
POST /summarize
POST /rewrite
POST /classify
```

Requirements:

- Use a service layer for model calls.
- Validate request bodies.
- Keep secrets out of source code.
- Return consistent JSON responses.
- Add error handling.
- Include a README with architecture diagram.

### Stretch goals

- Add streaming to one endpoint.
- Add request IDs.
- Add a simple rate limiter.
- Record latency for every model call.
- Support two model providers behind one service interface.

---

# 14. Interview Bank

### Fundamentals

1. What is the difference between an LLM and an AI application?
2. What is a token?
3. Why does an LLM need a context window?
4. What is inference?
5. Why are LLM outputs probabilistic?

### Engineering

6. Why should the model provider call live on the backend?
7. How would you handle model-provider downtime?
8. How would you reduce LLM latency?
9. How would you control AI costs?
10. How would you log LLM requests without leaking user data?

### Architecture

11. Where would RAG sit in the AI application stack?
12. Why do we need memory if an LLM already has a context window?
13. What problem does tool calling solve?
14. What is the difference between model capability and application capability?
15. Why is evaluation necessary even when the API returns HTTP 200?

---

# 15. Instructor Questions to Ask Students

Use these throughout the lecture:

- "Who is actually making the decision here: our code or the model?"
- "Where does the model get this information from?"
- "If I delete the conversation history, what can the model still know?"
- "What happens when the answer is wrong but syntactically valid?"
- "Which layer should own this responsibility?"

These questions train students to think like engineers instead of API users.

---

# 16. Class Exit Ticket

Students answer in 5 minutes:

1. Explain AI Engineering in your own words.
2. Explain tokens without using the word "word" as the definition.
3. Draw the lifecycle of an LLM request.
4. Name three problems that exist after an API call succeeds.
5. Explain why the model should not own application reliability.

---

# 17. Instructor Prep Checklist

Before teaching:

- Verify current provider SDK syntax and available model names.
- Verify API pricing and quotas from the official provider docs.
- Have a working backup provider or prerecorded successful run.
- Prepare one deliberately broken API key example for debugging.
- Prepare a live diagram of the request lifecycle.
- Run the starter project from a clean machine/environment.

---

# 18. Suggested Slides

1. Course title — AI Engineering with JavaScript
2. Why AI Engineering exists
3. Traditional software vs AI systems
4. AI vocabulary ladder
5. The AI application stack
6. Anatomy of an LLM request
7. What is a token?
8. Context windows
9. Inference
10. Temperature intuition
11. Why models hallucinate
12. The reliability gap
13. Production AI checklist
14. Live coding architecture
15. Assignment
16. Course roadmap

---

# 19. Further Reading / Official References

Use official documentation for implementation details because SDKs, model names, limits and APIs change.

- OpenAI API documentation: https://platform.openai.com/docs
- Google Gemini API documentation: https://ai.google.dev/gemini-api/docs
- Node.js documentation: https://nodejs.org/docs/latest/api/
- Express documentation: https://expressjs.com/

For conceptual depth, later classes should connect this material to the Transformer paper, tokenization research, retrieval, tool use and agent architectures.
