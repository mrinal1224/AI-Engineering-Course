# Class 01 Student Notes — Introduction to AI Engineering

## 1. The Big Idea

An AI application is not the same thing as an LLM.

An **LLM is a model**. An **AI product is a software system built around a model**.

AI Engineering is the engineering work required to make that model useful, reliable and deployable inside a real application.

## 2. Vocabulary

| Term | Meaning |
|---|---|
| AI | Broad field of building systems that perform tasks associated with intelligence |
| Machine Learning | Learning patterns from data instead of programming every rule explicitly |
| Deep Learning | ML based on multi-layer neural networks |
| Generative AI | Models that generate new content |
| LLM | Large-scale language model used to predict/generate tokens |
| AI Engineering | Building production software around AI models |

## 3. AI Application Stack

```text
Product / UI
    ↓
Application Logic
    ↓
AI Orchestration
    ↓
Context / Memory / Retrieval
    ↓
Tools / External Systems
    ↓
Model
    ↓
Infrastructure
```

Remember: **the model is one component of the system.**

## 4. LLM Request Lifecycle

```text
Client
  ↓
Backend
  ↓
Validation
  ↓
Prompt / Context construction
  ↓
Model Provider
  ↓
Inference
  ↓
Generated tokens
  ↓
Backend
  ↓
Client
```

## 5. Tokens

A token is a unit processed by the model tokenizer. A token can be a whole word, part of a word, punctuation or another text fragment.

Why tokens matter:

- usage and cost
- context limits
- prompt size
- output limits

## 6. Context Window

The context window is the amount of information available to the model for a single inference process.

It can contain:

- system instructions
- previous conversation
- retrieved documents
- tool results
- user message

The model does not automatically see your database, files or application state.

## 7. Inference

**Inference** = using a trained model to generate an output from an input/context.

Training changes model parameters. Inference uses those learned parameters.

## 8. Temperature

Temperature changes how strongly generation favors high-probability choices versus more varied choices.

It should not be treated as a simple "accuracy" slider.

## 9. Why Production AI Needs Engineering

A model call can succeed technically and still produce a bad application result.

Typical engineering concerns:

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

## 10. Minimal Node.js AI Backend

Example architecture:

```text
Express Route
     ↓
LLM Service
     ↓
Provider SDK
     ↓
Model
```

Keep provider-specific code in a service module so the rest of the application is not coupled to a single API.

## 11. Security Rule

Never expose a provider API key in browser-side JavaScript.

Good:

```text
React → Express → Model Provider
```

Bad:

```text
React → Model Provider
       with secret API key in browser
```

## 12. Questions to Think About

1. Why is an AI model only one layer of an AI application?
2. What information must be placed into context for the model to use it?
3. Why can a successful HTTP response still be a failed AI request?
4. How would you design an AI API for a large number of users?
5. What would you measure in production?
