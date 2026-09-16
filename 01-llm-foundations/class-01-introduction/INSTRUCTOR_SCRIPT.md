# Class 01 — Introduction to AI Engineering

## 2-Hour Master Instructor Script

> **Audience:** SST students with JavaScript / Node.js fundamentals
>
> **Duration:** 120 minutes
>
> **Teaching mode:** instructor-led explanation + live demo + guided coding + discussion
>
> **Core goal:** Students should leave thinking like software engineers building around AI models, not like users who simply know how to call an LLM API.

---

# 0. Instructor Rules Before You Start

## What this class must accomplish

By the end, students should be able to:

1. Explain what AI Engineering means.
2. Distinguish a model, provider API, SDK, and application.
3. Explain at a conceptual level how an LLM turns text into generated text.
4. Explain tokens, context, inference, and probabilistic output.
5. Draw a basic AI application architecture.
6. Build one small Node.js AI endpoint.
7. Explain why production reliability belongs outside the model.

## What this class should NOT become

Do not turn Class 01 into:

- a history lesson on AI
- a mathematics lecture on neural networks
- a detailed Transformer derivation
- a prompt-engineering workshop
- a tour of every AI framework
- a long list of model providers
- an MLOps class

Those topics can appear briefly as context, but the class must keep moving toward **AI application engineering**.

## Language to prefer

Say:

- “model”
- “application”
- “context”
- “inference”
- “generated output”
- “probabilistic”
- “engineering around the model”

Avoid saying:

- “the AI thinks exactly like a human”
- “the model knows everything”
- “temperature makes the model smarter”
- “hallucination means the model is lying”
- “the LLM just searches the internet”
- “prompt engineering is AI Engineering”

## Board setup

Before students arrive, leave a blank whiteboard with only this:

```text
AI Engineering
```

Do not fill the board before the opening demo.

---

# 1. 00:00–00:05 — Enter, Set the Hook

## Instructor action

Walk in, connect your screen, but do **not** start with definitions.

Open a simple AI chat/API demo already prepared.

Say:

> “Aaj hum AI ke baare mein sirf baat nahi karenge. Aaj hum ek AI application banayenge.”

Pause.

Then say:

> “Lekin ek interesting question hai — agar main sirf model ko API call kar raha hoon, toh main AI Engineer hoon ya sirf API user?”

Wait for answers.

Accept several answers without correcting them immediately.

Then say:

> “Aaj ka pura class isi question ka answer hai.”

## Cue

Do not define AI Engineering yet.

The uncertainty is intentional.

---

# 2. 00:05–00:15 — WOW Demo: Build Before Explain

## Demo

Use a prepared endpoint or live playground that accepts:

```json
{
  "topic": "JavaScript closures"
}
```

and generates:

```json
{
  "explanation": "..."
}
```

Show the request and response.

Then change the instruction to:

> “Explain this to a beginner using a real-life analogy.”

Run it again.

Then add context:

```text
Student level: beginner
Preferred language: Hinglish
Course: Web Development
```

Run again.

## Say exactly

> “Notice karo — model same model ho sakta hai, but application ka behaviour change ho raha hai because hum context aur instructions change kar rahe hain.”

Then ask:

> “Toh intelligence sirf model mein hai?”

Expected student response:

> “No.”

Say:

> “Exactly. Product-level AI mein model ek component hai.”

Write on board:

```text
MODEL ≠ PRODUCT
```

Circle it.

## Do not say

Do not say “the prompt controls the model completely.”

The point is that application behaviour is jointly shaped by model, instructions, context, tools, application logic, and other constraints.

---

# 3. 00:15–00:25 — What Is AI Engineering?

## Board

Write:

```text
Traditional Software
Input → Rules → Output
```

Ask:

> “Agar login request aayi aur password wrong hai, system kya karega?”

Students: deterministic answer.

Then write:

```text
AI Software
Input + Context → Model → Generated Output
```

Say:

> “Traditional software mein hum bahut baar exact rules define karte hain. AI systems mein ek learned model output generate karta hai. Isliye hamara engineering problem badal jaata hai.”

Now write:

```text
AI Engineering
= reliable software around probabilistic models
```

Say:

> “Meri Class 01 definition yahi hai. Isko yaad mat karo; samjho.”

Then expand:

> “Hum model ko useful banaate hain. Hum context dete hain. Hum tools connect karte hain. Hum validation karte hain. Hum failures handle karte hain. Hum quality measure karte hain. Hum cost aur latency control karte hain.”

Pause.

> “Ye sab milkar AI Engineering banta hai.”

---

# 4. 00:25–00:35 — AI, ML, Deep Learning, GenAI, LLM

## Draw this instead of a long definition list

```text
Artificial Intelligence
        │
        ├── Predictive / Decision Systems
        │
        └── Generative AI
                │
                ├── Text
                ├── Images
                ├── Audio
                └── Video
                        │
                        └── LLMs (for language)
```

Then separately write:

```text
AI Engineering
        ↓
Software systems built around these models
```

## Say

> “Important: LLM aur AI Engineering same cheez nahi hain.”

> “LLM ek model hai. AI Engineering us model ko production software ka part banane ka kaam hai.”

### Quick check

Ask three rapid questions:

1. “ChatGPT ek LLM hai?”
2. “GPT model aur ChatGPT product same thing hai?”
3. “RAG model hai?”

Expected answers:

1. Be careful: ChatGPT is a product/application, not simply the model itself.
2. No.
3. No, RAG is an application architecture/pattern.

When a student gives an oversimplified answer, gently correct it:

> “Terminology important hai. Product, model, API aur architecture ko mix mat karo.”

---

# 5. 00:35–00:45 — Model vs Provider vs API vs SDK

This is a mandatory Class 01 concept.

## Draw

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

Use a concrete example:

```text
GPT-family model
       ↓
OpenAI API
       ↓
OpenAI JavaScript SDK
       ↓
Node.js / Express
       ↓
Your AI feature
```

Then say:

> “Model is the intelligence component.”

> “API is how software communicates with the provider.”

> “SDK is a developer-friendly library around that API.”

> “Your application is still your code. The model does not magically become your backend.”

## Ask

> “Agar kal hum provider change karke Gemini use karein, kya hamara pura application conceptually destroy ho jaayega?”

Expected:

> “No, provider-specific integration changes, but application architecture can remain.”

Say:

> “Exactly. Isi reason se hum provider calls ko service layer ke peeche rakhenge.”

This foreshadows the live coding structure.

---

# 6. 00:45–01:00 — How Does an LLM Actually Work?

## Important instructor note

This is conceptual. Do not derive equations.

## Draw slowly

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
Select / sample a token
 ↓
Append token
 ↓
Repeat
```

Say:

> “Main abhi Transformer ka maths nahi padha raha. Mujhe bas tumhe ek correct mental model dena hai.”

Give example:

```text
The cat is sitting on the ___
```

Say:

> “Model different possible next tokens ke probabilities assign kar sakta hai.”

Illustrate loosely:

```text
mat        0.42
floor      0.26
chair      0.11
table      0.07
...
```

Say:

> “Then one token is selected, and generation continues.”

Important clarification:

> “Ye database se ek sentence lookup nahi kar raha. It is generating a sequence token by token based on learned patterns and current context.”

## Attention cue

Say:

> “Later hum attention detail mein padhenge. Abhi sirf itna yaad rakho: Transformer architecture mein attention mechanism context ke different parts ke relationships ko use karne ka important mechanism hai.”

Do not spend more than 3 minutes here.

## Don't say

Avoid:

> “The model predicts the next word.”

Say:

> “The model predicts the next token.”

Then immediately clarify that a token is not necessarily a word.

---

# 7. 01:00–01:08 — Tokens

Write:

```text
Token ≠ Word
```

Give examples:

```text
hello
hello hello hello
internationalization
const calculateTotal = (...) => ...
```

Say:

> “Tokenizer text ko units mein break karta hai. Unit word ho sakta hai, word ka part ho sakta hai, punctuation ho sakta hai, ya kuch aur.”

Then connect to engineering:

```text
Tokens → context limits
Tokens → cost
Tokens → latency
```

## Mini interaction

Ask:

> “1000 words ka prompt aur 1000 tokens ka prompt same cheez hai?”

Expected: no.

Say:

> “Correct. Words, characters aur tokens ko interchangeably mat use karna.”

Do not turn this into a tokenizer implementation class.

---

# 8. 01:08–01:16 — Context Is the Key Idea

Write:

```text
Model
+
Instructions
+
Context
+
User Input
```

Then show:

```text
System instructions
Conversation history
Retrieved documents
Tool results
User request
```

Say:

> “Model ko automatically aapke database, React state, MongoDB document ya PDF ka pata nahi hota.”

Then ask:

> “Agar mujhe AI ko student ka profile batana hai, toh woh information kahaan se aayegi?”

Expected:

> “Application context se.”

Say:

> “Exactly. Aur isi observation se later RAG, memory aur tools emerge hote hain.”

Board connection:

```text
Context
  ↓
RAG
Memory
Tools
```

Do not explain all three deeply now.

---

# 9. 01:16–01:24 — Why Output Is Probabilistic

Ask:

> “Same prompt ko 5 baar run karoge toh har baar exact same answer milega?”

Let students answer.

Then say:

> “Generation has probabilistic behaviour. That means software architecture cannot assume the model will always behave like a deterministic function.”

Write:

```text
Model output can be:
- useful
- incomplete
- inconsistent
- confidently wrong
```

Then say:

> “HTTP 200 aaya means API call successful. It does NOT mean product outcome successful.”

This line should be emphasized.

Write:

```text
HTTP 200 ≠ Correct Answer
```

This becomes the bridge to evaluation later in the course.

---

# 10. 01:24–01:30 — Temperature: Keep It Tiny

Say:

> “Temperature ek generation setting hai jo output distribution ke behaviour ko influence karti hai.”

Run one short comparison if available.

Do NOT say:

> “High temperature = creative, low temperature = smart.”

Instead say:

> “Temperature quality knob nahi hai. It changes how probability mass is distributed during generation; the effect depends on the task and model.”

Then move on.

---

# 11. 01:30–01:40 — AI Application Architecture

Draw the full stack:

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

Say:

> “Aaj se course ke har class mein hum baar-baar isi stack par wapas aayenge.”

Map known technologies:

```text
React        → UI
Express      → Application API
RAG          → Context layer
Tool calling → External systems
OpenAI/Gemini/Ollama → model access
Logs/Metrics/Queues/Cache → infrastructure
```

Then say:

> “The model is one box in the diagram. AI Engineering is the engineering of the whole system.”

## Student check

Ask:

> “If the answer is hallucinated, which box is responsible?”

Do not accept:

> “Only the model.”

Respond:

> “We investigate the whole pipeline: instructions, context, retrieval, model, validation, evaluation, and product constraints.”

---

# 12. 01:40–01:43 — Transition to Coding

Say:

> “Ab tak humne architecture samjha. Ab 20 minutes mein hum is architecture ka smallest useful version build karte hain.”

Show:

```text
Express Route
      ↓
LLM Service
      ↓
Provider SDK
      ↓
Model
```

Say:

> “Main framework abstraction hide nahi karunga. Hum ek direct provider SDK call dekhenge taaki request ka important path visible rahe.”

---

# 13. 01:43–01:58 — Guided Live Coding

## Goal

Build:

```text
POST /api/generate
```

Input:

```json
{
  "topic": "closures"
}
```

Output:

```json
{
  "text": "..."
}
```

## Step 1 — Initialize

Type live:

```bash
mkdir class-01-ai-api
cd class-01-ai-api
npm init -y
npm install express dotenv openai
```

Say while typing:

> “Express is still just our backend. The AI part enters when our service makes a model request.”

## Step 2 — Environment

```env
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=your-current-supported-model
PORT=3000
```

Say:

> “Secret browser mein nahi jaana chahiye. Frontend ko provider key dena production mistake hai.”

Do not expose a real key on screen.

## Step 3 — Service

Create:

```text
src/services/llm.service.js
```

Use the current official SDK syntax for the provider/model selected for the class.

Explain only the important concepts while coding:

```text
route
 ↓
service
 ↓
provider SDK
```

Say:

> “Service layer ka reason sirf cleanliness nahi hai. It gives us a seam where provider-specific details can be isolated.”

## Step 4 — Route

Add:

```js
app.post("/api/generate", async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic || typeof topic !== "string") {
      return res.status(400).json({
        message: "topic is required",
      });
    }

    const text = await generateText(topic);

    return res.json({ text });
  } catch (error) {
    console.error("LLM request failed", error);
    return res.status(500).json({
      message: "Unable to generate response",
    });
  }
});
```

## Pause and ask

> “Validation model se pehle kyun?”

Expected:

> “Invalid input pe unnecessary paid model call avoid karne ke liye.”

Excellent answer. Reinforce:

> “Exactly — validation is both correctness and cost control.”

## Run

```bash
node src/app.js
```

Then make a request.

When output appears, say:

> “This is our smallest AI application. Abhi product nahi hai. Ye a starting point hai.”

---

# 14. 01:58–02:00 — Close the Class

Show this final slide:

```text
MODEL
  ↓
context + instructions
  ↓
application code
  ↓
validation
  ↓
evaluation
  ↓
monitoring
  ↓
production AI system
```

Say:

> “Aaj ka most important idea: AI Engineering is not about calling a model. It is about engineering the system around a model.”

Then ask the final three questions:

1. “Model aur product mein difference?”
2. “Context kyun important hai?”
3. “HTTP 200 ka matlab correct answer kyun nahi hai?”

Do not start another topic after this.

End with:

> “Next class mein hum dekhenge ki model ke andar information represent kaise hoti hai — aur wahan se embeddings aur similarity ki taraf jayenge.”

---

# Instructor Rescue Guide

## If students ask: “Is an LLM sentient?”

Say:

> “That is not the engineering question we need for this course. Our engineering model is that the system generates outputs from learned parameters and current context. Let's focus on observable behaviour and system design.”

## If students ask: “Does the model search Google?”

Say:

> “Not automatically. Search or external data access is an application capability that we explicitly integrate through tools, retrieval, browsing systems, or APIs.”

## If students ask: “Why not just put everything in the prompt?”

Say:

> “Because context has limits, cost, latency, freshness, privacy, and relevance concerns. That is exactly why retrieval and tools exist.”

## If students ask: “Why use Node.js instead of Python?”

Say:

> “This course is intentionally JavaScript-first because you already know web engineering. The engineering ideas are language-independent. Later we can compare ecosystems without changing the core mental model.”

## If students ask: “Should we use LangChain?”

Say:

> “Later. First you should understand the raw request path. Abstraction tabhi useful hoti hai jab tumhe pata ho abstraction kya hide kar rahi hai.”

## If students say: “AI will replace developers.”

Do not debate emotionally.

Say:

> “The relevant engineering question is: which parts of software development become cheaper, faster, or different? Our course is about understanding and building those systems.”

---

# Instructor Don't-Do List

Do not spend more than 5 minutes on:

- AI history
- famous AI products
- provider comparisons
- model leaderboards
- Transformer mathematics
- temperature tuning
- prompt tricks

Do not use ten different libraries in the first class.

Do not begin by asking students to create accounts on five AI platforms.

Do not make students memorize token counts.

Do not call a model a “brain” repeatedly. One analogy is fine; keep technical language precise.

Do not let the demo become a debugging session longer than 5 minutes. Have a backup working demo.

---

# Blackboard End State

At the end of class, the board should contain roughly:

```text
AI Engineering
= reliable software around probabilistic models

MODEL ≠ PRODUCT

Model → API → SDK → Application

Text → Tokens → Transformer → Next-token probabilities

Model + Instructions + Context + User Input

UI → App → Orchestration → Context → Tools → Model → Infra

HTTP 200 ≠ Correct Answer

AI Engineering:
Validation
Evaluation
Reliability
Cost
Latency
Observability
```

Students should be able to reproduce this diagram without looking at their notes.

---

# 5-Minute Exit Ticket (Use Immediately After Class)

1. In one sentence, define AI Engineering.
2. Explain the difference between a model and an AI application.
3. What is a token?
4. Why does context matter?
5. Why can a successful API request still produce a failed product outcome?

### Instructor interpretation

If students can answer 4/5 clearly, the class has landed.

If many students miss #2, re-teach model vs API vs application before Class 02.

If many students miss #4, reinforce context before introducing embeddings/RAG.
