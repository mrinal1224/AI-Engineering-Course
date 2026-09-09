# AI Engineering with JavaScript

A first-principles, production-oriented AI Engineering curriculum for JavaScript developers.

> **Goal:** teach students to engineer AI systems—not merely call AI APIs.

## What Makes This Curriculum Different

This course follows a simple rule:

> **Understand the abstraction before using the abstraction.**

Students first build simplified versions of important AI capabilities in JavaScript. Only then do we introduce managed services and frameworks such as vector databases, LangGraph and MCP.

The curriculum combines:

- AI/LLM fundamentals
- hands-on experiments
- first-principles implementations
- production software engineering
- assignments and rubrics
- interview preparation
- one evolving capstone product

## Core Stack

- JavaScript / Node.js
- TypeScript where useful
- Express
- React
- OpenAI / Gemini APIs
- MongoDB
- Chroma / vector databases
- LangGraph
- MCP
- Ollama
- WebSockets / realtime AI

## 16-Class Roadmap

### Module 1 — LLM Foundations

1. **Introduction to AI Engineering**
2. **Inside the Transformer**
3. **Prompt Engineering Masterclass**
4. **Structured AI Outputs**

### Module 2 — Memory & Retrieval

5. **Embeddings & Semantic Search**
6. **Vector Databases**
7. **RAG from Scratch**
8. **Memory Systems**

### Module 3 — Agent Engineering

9. **Tool Calling & Agent Patterns**
10. **Multi-Agent Systems & A2A**
11. **Model Context Protocol (MCP)**
12. **LangGraph & Workflow Orchestration**

### Module 4 — Production AI

13. **Local LLMs & Fine-Tuning**
14. **AI Testing, Security & Guardrails**
15. **Voice Agents & Realtime AI**
16. **Deployment, Observability & Future of AI Engineering**

## Class Repository Pattern

Every class is designed to eventually contain the same learning layers:

```text
class-XX-topic/
├── 01-theory/
│   ├── instructor-guide.md
│   ├── student-notes.md
│   └── diagrams/
├── 02-demos/
├── 03-live-coding/
├── 04-experiments/
├── 05-assignment/
│   ├── assignment.md
│   ├── rubric.md
│   └── starter/
├── 06-interview/
└── 07-resources/
```

This structure is intentionally inspired by strong hands-on course repositories: every concept should have something students can **read, observe, run, break, rebuild and submit**.

## Current Status

### Class 01 — Introduction to AI Engineering

Available now under:

`01-llm-foundations/class-01-introduction/`

It currently includes:

- instructor teaching guide
- student notes
- live Node.js + Express AI API
- hands-on experiments
- demonstration guide
- assignment
- interview bank
- slide outline
- official/reference resources

## Teaching Philosophy

A production AI system is more than a model:

```text
Model
 + Context
 + Retrieval
 + Tools
 + Validation
 + Evaluation
 + Security
 + Observability
 + Product UX
 = AI Application
```

The course therefore keeps returning to the question:

> **What does the model do, and what must the software around the model do?**

## Capstone

The capstone evolves throughout the course instead of appearing only at the end.

Students progressively build **Ghost Interviewer** with:

1. LLM conversation
2. RAG over interview material
3. persistent conversation memory
4. tool calling
5. multi-agent evaluation
6. MCP integration
7. voice interaction
8. deployment, monitoring and cost analytics

## Quality Bar

A class is considered ready only when it has:

- clear first-principles explanations
- visual architecture / diagrams
- runnable JavaScript code
- experiments that generate observations
- a meaningful assignment
- interview questions
- production concerns
- instructor preparation notes

## Important

AI APIs, SDKs, model names, pricing and limits change quickly. Implementation examples should be verified against the current official provider documentation before teaching.
