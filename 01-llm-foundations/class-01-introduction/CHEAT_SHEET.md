# Class 01 — AI Engineering Cheat Sheet

## Core Definition

> **AI Engineering = building reliable software around probabilistic models.**

## Never Confuse These

```text
Model ≠ Product
Model ≠ API
API ≠ SDK
LLM ≠ AI Engineering
HTTP 200 ≠ Correct Answer
Token ≠ Word
```

## Model Access Stack

```text
Model
  ↓
Provider API
  ↓
SDK
  ↓
Your Server
  ↓
Your Application
```

## LLM Mental Model

```text
Text
 ↓
Tokens
 ↓
Transformer
 ↓
Next-token probabilities
 ↓
Generated token
 ↓
Repeat
```

## Context Mental Model

```text
Instructions
+ Conversation
+ Retrieved data
+ Tool results
+ User input
        ↓
   Model context
```

The model does not automatically know application state.

## AI Application Stack

```text
UI
 ↓
Application Logic
 ↓
Orchestration
 ↓
Context / Retrieval / Memory
 ↓
Tools
 ↓
Model
 ↓
Infrastructure
```

## Production Mindset

A model response can fail even when the API request succeeds.

Use engineering around the model:

```text
Validation
Retries
Timeouts
Guardrails
Evaluation
Monitoring
Cost control
Security
```

## Backend Security

```text
GOOD
React → Express → Model Provider

BAD
React → Model Provider
       + secret API key
```

## Class 01 Questions

- What is AI Engineering?
- What is a model?
- What is an API?
- What is an SDK?
- What is a token?
- What is context?
- What is inference?
- Why is output probabilistic?
- Why do we need evaluation?
- Why do provider calls belong behind application code?
