# Class 01 Student Notes — Introduction to AI Engineering

## 1. The Core Idea

An **LLM is a model**.

An **AI application is a software system built around one or more models**.

**AI Engineering** is the engineering discipline of turning model capabilities into useful, reliable software systems.

A useful mental model:

```text
Model capability
      +
Application engineering
      =
AI product
```

---

## 2. AI Landscape

```text
Artificial Intelligence
        │
        ├── Predictive / Decision Systems
        │
        └── Generative AI
                ├── Text
                ├── Images
                ├── Audio
                └── Video
```

LLMs are language-focused generative models.

Do not use **AI**, **LLM**, **model**, and **AI application** as interchangeable terms.

---

## 3. Model vs Provider vs API vs SDK

```text
MODEL
  ↓
PROVIDER API
  ↓
SDK
  ↓
YOUR SERVER
  ↓
YOUR APPLICATION
```

- **Model:** the trained model that performs inference.
- **Provider:** a company/service hosting or exposing models.
- **API:** the interface your software uses to communicate with the provider.
- **SDK:** a developer library that makes API usage easier from a programming language.
- **Application:** your own software, business logic, UI, data, tools, and reliability layer.

---

## 4. AI Application Stack

```text
User / UI
   ↓
Application Logic
   ↓
AI Orchestration
   ↓
Context / Memory / Retrieval
   ↓
Tools / External Systems
   ↓
Model Provider
   ↓
Model
   ↓
Infrastructure
```

Examples from web development:

```text
React            → UI
Express          → application/API layer
RAG              → context / retrieval layer
Tool calling     → external system integration
Model provider   → model access
Logs / queues    → infrastructure
```

**Remember: the model is one component, not the entire product.**

---

## 5. How an LLM Generates Text

A useful conceptual model:

```text
Text
 ↓
Tokens
 ↓
Token representations
 ↓
Transformer layers
 ↓
Next-token probabilities
 ↓
Select / sample token
 ↓
Append token
 ↓
Repeat
```

You do not need the Transformer mathematics yet.

### Example

```text
The cat is sitting on the ___

mat       0.42
floor     0.26
chair     0.11
table     0.07
...
```

The model generates a sequence token by token based on learned patterns and the current context.

---

## 6. Tokens

A **token** is a unit processed by a model tokenizer.

A token can be:

- a complete word
- part of a word
- punctuation
- another tokenizer-defined text fragment

```text
Token ≠ Word
```

Tokens matter because they affect:

- input/output limits
- context usage
- usage-based cost
- latency

Do not memorize exact token counts. Build intuition first.

---

## 7. Context Window

The context window contains the information available to the model for the current inference request.

```text
System instructions
Conversation history
Retrieved documents
Tool results
User request
        ↓
   CONTEXT WINDOW
```

Important:

> The model does not automatically know your database, React state, private files, or internal APIs.

The application must provide relevant information through context, retrieval, or tools.

This later becomes the foundation for:

```text
Context
├── RAG / Retrieval
├── Memory
└── Tool results
```

---

## 8. Inference

**Inference** = using a trained model to generate output for a given input/context.

Training changes learned model parameters.

Inference uses those learned parameters to generate an output.

---

## 9. Why LLM Output Is Probabilistic

LLM generation is not equivalent to looking up one fixed answer in a database.

Outputs can be:

- useful
- incomplete
- inconsistent
- confidently wrong

This creates an engineering responsibility outside the model.

```text
Model
 + validation
 + retries
 + timeouts
 + guardrails
 + evaluation
 + monitoring
 + cost controls
 = production AI system
```

---

## 10. HTTP 200 ≠ Correct Answer

An API request can succeed technically while the application outcome is poor.

```text
HTTP 200
   ≠
Correct / useful answer
```

Later in the course, this becomes the motivation for **evaluation**.

---

## 11. Temperature

Temperature influences generation behaviour by changing how strongly sampling favours high-probability versus lower-probability alternatives.

Do not think of temperature as:

```text
higher = smarter
lower  = smarter
```

It is a generation control, not a universal quality slider.

---

## 12. LLM Request Lifecycle

```text
Client
  ↓
Backend
  ↓
Validation
  ↓
Prompt + Context construction
  ↓
Provider API
  ↓
Model inference
  ↓
Generated tokens
  ↓
Response / Stream
  ↓
Client
```

---

## 13. Minimal Node.js AI Backend

Target architecture:

```text
Express Route
     ↓
LLM Service
     ↓
Provider SDK
     ↓
Model
```

Why use a service layer?

- isolate provider-specific code
- keep routes readable
- make testing easier
- reduce vendor coupling
- make provider replacement easier later

---

## 14. Security Rule

Never put a provider API key in browser JavaScript.

Good:

```text
React → Express → Model Provider
```

Bad:

```text
React → Model Provider
        + secret API key in browser
```

---

## 15. What Comes Later in the Course?

```text
Foundations
    ↓
Token representations
    ↓
Embeddings / Similarity
    ↓
RAG
    ↓
Memory / Context engineering
    ↓
Tool calling
    ↓
Agents
    ↓
MCP
    ↓
Evaluation
    ↓
Production AI systems
```

Class 01 is about the mental model that connects all of these topics.

---

## 16. Quick Revision Questions

1. What is the difference between a model and an AI application?
2. What is the difference between a model, API, and SDK?
3. What is a token?
4. Why does the context window matter?
5. What is inference?
6. Why is LLM output probabilistic?
7. Why does HTTP 200 not guarantee a good answer?
8. Why should provider calls live behind a backend/service layer?
