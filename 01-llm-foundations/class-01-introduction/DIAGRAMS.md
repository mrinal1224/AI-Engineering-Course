# Class 01 — Teaching Diagrams

Use these as whiteboard diagrams, slide visuals, or Mermaid references.

## 1. AI Landscape

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
                        │
                        └── LLMs (language)
```

## 2. Model vs Application

```text
                AI APPLICATION
┌─────────────────────────────────────────┐
│ UI                                      │
│ Application Logic                       │
│ Context / Memory / Retrieval            │
│ Tools / External Systems                │
│ Validation / Guardrails                 │
│ Evaluation / Observability              │
│             ↓                           │
│          MODEL ACCESS                   │
└─────────────────────────────────────────┘
                   ↓
                 MODEL
```

## 3. Model → API → SDK → Application

```text
MODEL
  ↓
PROVIDER API
  ↓
JAVASCRIPT SDK
  ↓
NODE.JS SERVICE
  ↓
YOUR APPLICATION
```

## 4. LLM Generation Mental Model

```text
Input text
   ↓
Tokenizer
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
Append token to context
   ↓
Repeat until stop
```

## 5. Context Window

```text
┌──────────────────────────────────────┐
│ System instructions                  │
│ Conversation history                 │
│ Retrieved documents                  │
│ Tool results                         │
│ User request                         │
│                                      │
│          CONTEXT WINDOW              │
│                                      │
│ Generated output                     │
└──────────────────────────────────────┘
```

## 6. AI Application Stack

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

## 7. Request Lifecycle

```text
Browser
   ↓
Express API
   ├── authentication
   ├── validation
   ├── prompt/context construction
   ↓
Model Provider API
   ↓
Model inference
   ↓
Generated tokens
   ↓
Express
   ↓
Response / Stream
   ↓
Browser
```

## 8. Production Reliability Loop

```text
Model output
   ↓
Validation
   ↓
Evaluation
   ↓
Monitoring
   ↓
Feedback / improvement
   ↺
```

## 9. Final Blackboard Summary

```text
AI Engineering
= reliable software around probabilistic models

MODEL ≠ PRODUCT

Model → API → SDK → Application

Context + Instructions + User Input
                  ↓
                Model
                  ↓
             Output

HTTP 200 ≠ Correct Answer
```
