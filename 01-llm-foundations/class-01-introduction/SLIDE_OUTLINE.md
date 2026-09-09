# Class 01 Slide Deck — Introduction to AI Engineering

## Slide 1 — Title

AI Engineering with JavaScript

**Class 01: Introduction to AI Engineering**

## Slide 2 — The Big Question

What does it take to turn an LLM into a real software product?

## Slide 3 — Traditional Software

```text
Input → deterministic code → output
```

## Slide 4 — AI Software

```text
Input + Context → model inference → probabilistic output
```

## Slide 5 — The AI Vocabulary Ladder

AI → ML → Deep Learning → Generative AI → LLM → AI Engineering

## Slide 6 — What AI Engineering Actually Means

Building reliable software around probabilistic models.

## Slide 7 — LLM ≠ Product

A model is one component in a larger system.

## Slide 8 — AI Application Stack

```text
UI
Application Logic
AI Orchestration
Context / Retrieval / Memory
Tools
Model
Infrastructure
```

## Slide 9 — Anatomy of a Request

Visualize browser → backend → model provider → streamed response.

## Slide 10 — Tokens

Visual examples of text broken into token-like pieces.

## Slide 11 — Why Token Count Matters

Context, cost and latency.

## Slide 12 — Context Window

What can and cannot be "seen" by the model for an inference request.

## Slide 13 — Inference

Training vs inference.

## Slide 14 — Temperature

One prompt, multiple generations. Discuss probability and variability.

## Slide 15 — The Reliability Gap

A successful API response can still be a failed product outcome.

## Slide 16 — Engineering Around the Model

Validation, retries, timeouts, guardrails, evaluation, observability, cost controls.

## Slide 17 — Live Coding Architecture

```text
Express Route
    ↓
LLM Service
    ↓
Provider SDK
    ↓
Model
```

## Slide 18 — Why the Backend Owns the Secret

React → Express → Model Provider

## Slide 19 — Live Coding

Build AI Quote Generator.

## Slide 20 — Debugging a Failure

Break the key / request and observe the failure path.

## Slide 21 — Production Questions

What if 10,000 users call this endpoint at once?

## Slide 22 — Assignment

AI Utility Service.

## Slide 23 — Exit Ticket

Five questions to verify conceptual understanding.

## Slide 24 — Where We Go Next

Transformers → embeddings → RAG → memory → agents → MCP → production AI.
