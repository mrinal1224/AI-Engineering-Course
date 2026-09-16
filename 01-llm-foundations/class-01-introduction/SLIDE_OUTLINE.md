# Class 01 Slide Deck — Introduction to AI Engineering

## Teaching target

**120-minute delivery** for JavaScript-first students.

The slide deck should support the instructor script. Slides are visual anchors, not a transcript.

---

## Slide 1 — AI Engineering with JavaScript

**Class 01: Introduction to AI Engineering**

Subtitle: **From model calls to real software systems**

---

## Slide 2 — Today's Challenge

> What does it take to turn an LLM into a reliable software product?

Do not answer yet.

---

## Slide 3 — 5-Minute Demo

Show a tiny AI API.

```text
Request → AI Application → Response
```

Goal: create curiosity before definitions.

---

## Slide 4 — Same Model, Different Application Behaviour

```text
Same model
+
Different instructions
+
Different context
=
Different application behaviour
```

---

## Slide 5 — MODEL ≠ PRODUCT

The model is one component inside an application.

---

## Slide 6 — Traditional Software

```text
Input → deterministic code → output
```

---

## Slide 7 — AI Software

```text
Input + Context → model inference → probabilistic output
```

---

## Slide 8 — What Is AI Engineering?

> **AI Engineering = building reliable software around probabilistic models.**

Supporting concerns:

- context
- tools
- validation
- evaluation
- cost
- latency
- security
- observability

---

## Slide 9 — AI Landscape

```text
AI
├── Predictive / Decision Systems
└── Generative AI
    ├── Text
    ├── Image
    ├── Audio
    └── Video
```

---

## Slide 10 — LLMs Are One Category

```text
Generative AI
      ↓
Language generation
      ↓
LLMs
```

Important: LLM ≠ AI Engineering.

---

## Slide 11 — Model vs Provider vs API vs SDK

```text
MODEL
  ↓
PROVIDER API
  ↓
JS SDK
  ↓
YOUR SERVER
  ↓
YOUR APPLICATION
```

---

## Slide 12 — Why This Separation Matters

Provider-specific code should not own the whole application.

```text
Application
    ↓
LLM Service
    ↓
Provider SDK
```

---

## Slide 13 — Anatomy of an LLM Request

```text
Browser
  ↓
Backend
  ↓
Prompt + Context
  ↓
Provider API
  ↓
Model
  ↓
Generated tokens
  ↓
Response / Stream
```

---

## Slide 14 — How Does an LLM Generate Text?

```text
Text
 ↓
Tokens
 ↓
Transformer layers
 ↓
Next-token probabilities
 ↓
Select token
 ↓
Repeat
```

Conceptual only. No maths today.

---

## Slide 15 — Next Token Example

```text
The cat is sitting on the ___

mat       0.42
floor     0.26
chair     0.11
table     0.07
...
```

The model generates token by token.

---

## Slide 16 — Attention: First Intuition

Attention helps the Transformer use relationships between parts of the current context.

Do not teach equations in Class 01.

---

## Slide 17 — Token ≠ Word

A token can be:

- part of a word
- a word
- punctuation
- another tokenizer-defined unit

---

## Slide 18 — Why Tokens Matter

```text
Tokens
 ↓
Context limits
Cost
Latency
```

---

## Slide 19 — Context Window

```text
System instructions
Conversation history
Retrieved documents
Tool results
User request
        ↓
   CONTEXT WINDOW
```

---

## Slide 20 — Context Is Application State

> The model does not automatically know your database, React state, PDFs, or internal APIs.

The application must provide relevant information through context or tools.

---

## Slide 21 — Where Later Topics Come From

```text
Need external knowledge → Retrieval / RAG
Need persistent state   → Memory
Need external actions   → Tools
Need reliable behaviour → Evaluation / Guardrails
```

---

## Slide 22 — Why Output Is Probabilistic

Possible outputs can vary.

A model can produce output that is:

- useful
- incomplete
- inconsistent
- confidently wrong

---

## Slide 23 — Reliability Gap

```text
HTTP 200
   ≠
Correct Answer
```

A successful API request is not the same as a successful product outcome.

---

## Slide 24 — Temperature

Temperature affects generation behaviour.

Do not frame it as:

> “higher = smarter”

or

> “lower = smarter.”

---

## Slide 25 — AI Application Stack

```text
UI
Application Logic
AI Orchestration
Context / Memory / Retrieval
Tools
Model Provider
Model
Infrastructure
```

---

## Slide 26 — Where Existing Web Skills Fit

```text
React           → UI
Express         → API / application layer
RAG             → context layer
Tool calling    → external systems
Model provider  → model access
Logs / queues   → infrastructure
```

---

## Slide 27 — Production AI Mindset

```text
Model
 + validation
 + retries
 + timeouts
 + evaluation
 + guardrails
 + monitoring
 = production AI system
```

---

## Slide 28 — Live Coding Architecture

```text
Express Route
      ↓
LLM Service
      ↓
Provider SDK
      ↓
Model
```

---

## Slide 29 — API Key Security

```text
React → Express → Model Provider
```

Never put provider secrets in the browser.

---

## Slide 30 — Build: AI Utility API

```text
POST /api/generate

{
  "topic": "closures"
}
```

---

## Slide 31 — Validate Before Calling the Model

```text
request
  ↓
validate
  ↓
model call
```

Why?

- correctness
- cost control
- predictable failures

---

## Slide 32 — Service Layer

Why isolate provider calls?

- easier testing
- easier provider replacement
- cleaner application logic
- less vendor coupling

---

## Slide 33 — Failure Is Part of the Design

What happens when:

- the key is invalid?
- provider is unavailable?
- request times out?
- output is wrong?
- traffic spikes?

---

## Slide 34 — Class Takeaways

1. Model ≠ Product.
2. Context matters.
3. LLM output is probabilistic.
4. API success ≠ product success.
5. AI Engineering is the system around the model.

---

## Slide 35 — Exit Ticket

1. Define AI Engineering.
2. Model vs application?
3. What is a token?
4. Why does context matter?
5. Why does HTTP 200 not mean the answer is correct?

---

## Slide 36 — Roadmap

```text
Class 01
AI Engineering foundations
        ↓
Tokens / Representations
        ↓
Embeddings / Similarity
        ↓
RAG
        ↓
Memory / Tool Calling
        ↓
Agents
        ↓
MCP
        ↓
Evaluation
        ↓
Production AI Systems
```
