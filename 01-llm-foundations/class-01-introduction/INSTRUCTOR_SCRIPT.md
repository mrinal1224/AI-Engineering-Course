# Class 01 — Introduction to AI Engineering

# 2-Hour Full Classroom Teaching Script

> **Audience:** SST students with JavaScript / Node.js fundamentals
>
> **Duration:** 120 minutes
>
> **Teaching style:** conversational, beginner-friendly, software-engineering-first
>
> **Purpose of this document:** This is a classroom manuscript, not a syllabus. An instructor should be able to teach the full 2-hour class by following this document without inventing the explanation, examples, transitions, questions, or board work on the fly.
>
> **Important:** This script intentionally contains more material than can be spoken word-for-word. The instructor should use the quoted sections as the primary spoken language, the notes as teaching guidance, and the optional branches when students ask questions.

---

# 0. Before Students Enter — Instructor Preparation

## 0.1 The room should look like an ordinary coding class

Do not fill the whiteboard with definitions before the class starts.

Write only:

```text
AI Engineering
```

Nothing else.

Have the following tabs ready:

1. The course repository.
2. A working model playground or prepared demo UI.
3. Terminal.
4. VS Code.
5. The current official provider documentation for the SDK you will use.
6. Postman, curl, or another API client.

Keep a prerecorded successful demo available as a backup.

## 0.2 Instructor mindset

This is the first class of the course. The goal is not to prove that you know AI terminology. The goal is to make students curious enough to want the next 15 classes.

The students should leave with five strong mental models:

```text
1. Model ≠ Product
2. API ≠ Model
3. Context matters
4. LLM output is probabilistic
5. AI Engineering = software engineering around the model
```

Do not try to finish the whole AI universe today.

## 0.3 What not to do

Do not spend the first 20 minutes defining 15 terms.

Do not start with neural-network mathematics.

Do not open LangChain or another orchestration framework in the first five minutes.

Do not list twenty model providers.

Do not turn the class into a prompt-writing workshop.

Do not tell students that the model “thinks exactly like a human.”

Do not tell students that the model “knows everything.”

Do not tell students that a high temperature simply means “better creativity.”

Do not tell students that a model response is equivalent to a database lookup.

The first class is about building a correct engineering mental model.

---

# 1. 00:00–00:07 — Opening: Do Not Start With Definitions

## Instructor objective

Create curiosity before giving terminology.

## Exact opening

Walk in, greet the class, and say:

> “Good morning everyone. Aaj se hum ek naya subject start kar rahe hain — AI Engineering.”

Pause.

> “Aur ek request hai: aaj first 10–15 minutes mein main aapko definitions ratwane nahi wala.”

Pause for reaction.

> “Pehle kuch build karte hain. Phir samjhenge humne actually build kya kiya.”

Open the prepared AI demo.

Say:

> “Agar main aapko sirf ek LLM API access de du, toh kya aap AI Engineer ban gaye?”

Do not answer this question yourself.

Take 2–3 student answers.

Possible answers:

- “Yes, because we are building with AI.”
- “No, because we are just consuming an API.”
- “Depends.”

Respond:

> “Good. Aaj ke end mein isi question ka much better answer aap khud de paoge.”

## Instructor cue

Smile and move immediately to the demo. Do not start a long philosophical discussion.

---

# 2. 00:07–00:17 — WOW Demo: Same Model, Different Application Behaviour

## Demo goal

Students should see that the application controls much more than “send text to model.”

Use a simple request such as:

```json
{
  "topic": "JavaScript closures"
}
```

Generate a normal explanation.

Then change only the instruction:

```text
Explain this to a beginner.
Use a real-life analogy.
Keep it under 100 words.
```

Run again.

Then add application context:

```text
Student level: beginner
Course: Web Development
Preferred style: Hinglish
```

Run again.

## What to say while the output appears

> “Notice kya change hua?”

Let students answer.

Then:

> “Model ko humne replace nahi kiya. Hamare application ne instructions aur context change kiya.”

Point at the request.

> “Yeh important hai. Production AI systems mein model ke around bahut saara engineering layer hota hai.”

Write on board:

```text
MODEL ≠ PRODUCT
```

Underline both words.

Then say:

> “Aaj ka first mental model: model product nahi hota.”

## Ask the room

> “Agar mere paas world ka best model ho aur application badly designed ho, kya product automatically achha ho jayega?”

Expected answer: No.

Respond:

> “Exactly.”

## Tiny analogy

> “Jaise database powerful hone se automatically Flipkart nahi ban jaata. Database ek component hai. Waise hi LLM bhi ek component hai.”

## Do not over-explain

Do not begin talking about RAG, agents, MCP, fine-tuning, embeddings, or vector databases here. Tell students those are later pieces of the application architecture.

---

# 3. 00:17–00:28 — So What Exactly Is AI Engineering?

## Board setup

Write slowly:

```text
Traditional Software
Input → Rules → Output
```

Ask:

> “Suppose login API ko request aayi. Password wrong hai. System kya karega?”

Students will say something like:

> “Invalid credentials.”

Ask:

> “Kyun?”

Expected:

> “Because we wrote the rule.”

Now write:

```text
AI Software
Input + Context → Model → Output
```

Say:

> “AI application mein ek important difference hai. Hum output ka exact text har situation ke liye hand-code nahi kar rahe. Model learned patterns ke basis par output generate karta hai.”

Pause.

Now point to the board and say slowly:

> “Aur yahin se engineering problem interesting ho jaati hai.”

Write:

```text
AI Engineering
= reliable software around probabilistic models
```

Say:

> “Ye line yaad karne ke liye nahi hai. Iska meaning samjho.”

Then unpack it one word at a time.

### “Software”

> “Hum product bana rahe hain. API banayenge. Authentication hoga. Database hoga. UI hoga. Deployment hoga.”

### “Around”

> “Model akela product nahi hai. Uske around context, tools, validation, security, evaluation, observability sab aata hai.”

### “Probabilistic model”

> “Same input par output behaviour traditional if-else function jaisa fixed nahi hota.”

Then finish:

> “So AI Engineer ka kaam sirf API call karna nahi hai. AI Engineer ka kaam model ko real software system ka reliable component banana hai.”

## Student check

Ask:

> “Prompt engineering AI Engineering ka pura subject hai?”

Expected: No.

Respond:

> “Prompting ek tool hai. AI Engineering much bigger discipline hai.”

---

# 4. 00:28–00:40 — AI → ML → Deep Learning → Generative AI → LLM

## Instructor goal

Give students enough vocabulary to understand the course without turning this into a history lecture.

## Draw this hierarchy

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
```

Then separately add:

```text
Machine Learning
     ↓
Deep Learning
```

Explain the relationship verbally rather than forcing everything into one perfect tree.

## Exact explanation

> “AI sabse broad term hai.”

> “Machine Learning AI ka ek subset hai jahan systems data se patterns learn karte hain.”

> “Deep Learning machine learning ka ek family of approaches hai based on multi-layer neural networks.”

> “Generative AI systems new content generate karte hain — text, image, audio, video, code.”

> “LLMs large-scale language models hain jo language tokens ke saath work karte hain.”

Then write:

```text
AI Engineering
        ↓
Software systems built using these models
```

Say:

> “Important distinction: LLM ek model hai. ChatGPT-type product ek application experience hai. AI Engineering us application ke software system ko build karne ka discipline hai.”

## Rapid-fire check

Ask:

> “RAG ek model hai?”

Students: No.

> “RAG kya hai?”

Accept “architecture/pattern/technique.”

> “Tool calling model hai?”

No.

> “Vector database model hai?”

No.

This establishes vocabulary boundaries without deep-diving.

---

# 5. 00:40–00:52 — Model vs Provider vs API vs SDK

This is one of the most important parts of the first class.

## Draw

```text
                 MODEL
                   ↓
             PROVIDER
                   ↓
             PROVIDER API
                   ↓
                SDK
                   ↓
          YOUR BACKEND CODE
                   ↓
          YOUR AI APPLICATION
```

Say:

> “In four words ko mix mat karna: model, provider, API, SDK.”

### Model

> “Model is the trained model that generates outputs.”

### Provider

> “Provider is the company or platform giving you access to models.”

### API

> “API is the interface through which our software communicates with the provider.”

### SDK

> “SDK is a developer library that makes working with that API easier from our programming language.”

## Concrete example

Write:

```text
Model
↓
OpenAI / Gemini / Anthropic etc.
↓
HTTPS API
↓
JavaScript SDK
↓
Node.js
```

Then say:

> “Humare liye important thing yeh hai ki application ka business logic provider SDK ke andar disappear nahi hona chahiye.”

## Ask

> “Agar kal provider change karna ho toh sabse zyada problem kahan aani chahiye?”

Correct engineering answer:

> “Provider integration boundary ke paas.”

Say:

> “Exactly. Isi liye hum live coding mein service layer use karenge.”

---

# 6. 00:52–01:08 — How Does an LLM Actually Work?

## Instructor warning

Students may know the word “transformer” but not have a useful mental model.

The objective is not mathematical completeness. The objective is conceptual correctness.

## Start with a sentence

Write:

```text
The cat is sitting on the ___
```

Ask:

> “Next token kya ho sakta hai?”

Take answers: mat, floor, chair, table.

Say:

> “Model possible continuations ke likelihoods represent karta hai.”

Write an intentionally illustrative distribution:

```text
mat       0.42
floor     0.26
chair     0.11
table     0.07
other     0.14
```

Immediately say:

> “These numbers are only for intuition. Hum exact probabilities calculate nahi kar rahe.”

Now draw:

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
Choose / sample token
 ↓
Append token
 ↓
Repeat
```

## Explain tokens

> “Model ko raw paragraph directly ‘as words’ nahi milta. Text tokenizer ke through token units mein represent hota hai.”

## Explain representations

> “Har token ko numerical representation mein map kiya jaata hai. Hum isse abhi embeddings ke deep mathematical topic ke roop mein nahi padhenge. Bas understand karo ki model numerical representations par operate karta hai.”

## Explain Transformer

> “Transformer architecture context ke different parts ke relationships ko process karta hai. Attention is architecture ka key mechanism hai.”

## Explain generation loop

> “Ek token generate hota hai. Phir updated context ke basis par next token generate hota hai. Ye process repeatedly continue karta hai.”

Then pause and ask:

> “Toh model paragraph ko ek hi shot mein likhta hai?”

Students: No.

> “Correct. Generation token sequence ke through hoti hai.”

## Crucial correction

Say:

> “Class mein ek phrase avoid karna: ‘LLM predicts the next word.’ Better language hai: ‘LLM predicts the next token.’ Token word ke equal nahi hota.”

## Attention connection

Say:

> “Attention ko aaj detail mein nahi padhenge. Later hum dekhenge ki context ke different parts ke beech useful relationships kaise capture hote hain.”

Then write in a corner:

```text
Today: intuition
Later: attention + transformers
```

Move on.

---

# 7. 01:08–01:16 — Tokens: The First Engineering Constraint

Write:

```text
TOKEN ≠ WORD
```

Say:

> “Token ek processing unit hai. Kabhi word ke equal hota hai, kabhi word ka part, kabhi punctuation, kabhi another fragment.”

Show examples:

```text
hello
internationalization
const total = items.reduce(...)
```

Say:

> “Exact tokenization tokenizer aur model family par depend karti hai. Hume class mein exact counts memorize nahi karne.”

Now connect to engineering:

```text
Tokens
  ↓
Context limits
  ↓
Cost
  ↓
Latency
```

Explain:

> “Agar prompt unnecessarily huge hai, cost badh sakti hai, latency badh sakti hai, aur context budget consume ho sakta hai.”

Ask:

> “1000 words = 1000 tokens?”

Students: No.

Say:

> “Correct. That's enough for today.”

Do not spend five minutes opening a tokenizer calculator unless you have extra time.

---

# 8. 01:16–01:27 — Context: The Most Important Word After Model

Write:

```text
MODEL
+
INSTRUCTIONS
+
CONTEXT
+
USER INPUT
```

Say:

> “Students usually imagine ki model ke paas automatically hamari application ki saari information hoti hai. Aisa nahi hai.”

Give concrete example:

> “Suppose main ek student support assistant bana raha hoon.”

Write:

```text
Student name: Rahul
Level: Beginner
Course: React
Current topic: useEffect
```

Ask:

> “Model ko ye information automatically kaise pata chalegi?”

Wait.

Expected answer:

> “Application ko context mein bhejni padegi.”

Say:

> “Exactly.”

Now draw:

```text
Application State / Data
          ↓
     Context Builder
          ↓
        Model
```

Then say:

> “Aur yahin se future classes ka foundation start hota hai.”

Write:

```text
Context
 ├── conversation history
 ├── retrieved documents
 ├── tool results
 └── application data
```

Then say:

> “RAG, memory aur tool calling later isi problem ko different ways se solve karte hain.”

## Important clarification

> “Context window ko RAM ya database mat samajhna. Ye information available for a given model invocation ka conceptual boundary hai.”

Do not go into exact provider token limits today because they change and are not the main concept.

---

# 9. 01:27–01:36 — Why LLM Output Is Probabilistic

Ask:

> “Same prompt ko multiple times run karne par exact same answer guaranteed hai?”

Listen.

Say:

> “LLM generation probabilistic behaviour show kar sakti hai. Isi wajah se AI engineering traditional software engineering se interestingly different hoti hai.”

Write:

```text
Model output may be:

useful
incomplete
inconsistent
wrong
```

Then say:

> “Sabse dangerous answer woh nahi hai jo error throw kar de. Sabse dangerous answer woh ho sakta hai jo confidently plausible ho, lekin wrong ho.”

Pause.

Now write in large letters:

```text
HTTP 200 ≠ Correct Answer
```

Explain:

> “API call technically successful ho sakta hai. Model ne response return kar diya. Server ne 200 bhej diya. Fir bhi product fail ho sakta hai.”

Ask:

> “Toh AI application ko sirf API status code se evaluate kar sakte hain?”

No.

Say:

> “Exactly. Later in this course we will need evaluation.”

Do not dive into eval frameworks yet.

---

# 10. 01:36–01:39 — Temperature: Only the Intuition

Say:

> “Ek chhota concept aur — temperature.”

Explain:

> “Temperature generation distribution ke behaviour ko influence karne wala parameter hai. It is not a simple intelligence knob.”

If demonstrating:

Run one prompt with two settings.

Say:

> “Hum yahan exact numerical mechanics nahi karenge. Later we can study sampling in more detail.”

Avoid the oversimplification:

> “Low = smart, high = creative.”

Replace it with:

> “Different settings can produce different levels of variation depending on the model and task.”

Move immediately to architecture.

---

# 11. 01:39–01:50 — Full AI Application Architecture

Tell students:

> “Ab tak hum model ke around individual concepts dekh rahe the. Ab unhe ek software architecture mein rakho.”

Draw slowly:

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

Now map their existing knowledge:

```text
React
  ↓
UI

Express / Node.js
  ↓
Application/API layer

RAG
  ↓
Context / Retrieval

Tool Calling
  ↓
External systems

Model provider
  ↓
Model access

Logs / Metrics / Cache / Queue
  ↓
Infrastructure
```

Say:

> “Course ke next classes mein hum is diagram ko repeatedly fill karenge.”

Then ask:

> “Agar AI app ko PDF ke andar se answer dena hai, PDF ka data architecture mein kahan enter karega?”

Guide toward:

> “Context / retrieval layer.”

Ask:

> “Agar AI ko weather API call karni hai?”

Answer:

> “Tools / external systems.”

Ask:

> “Agar response quality measure karni hai?”

Answer:

> “Evaluation / observability around the system.”

Conclude:

> “This is why AI Engineering is a software engineering discipline, not just a prompt-writing skill.”

---

# 12. 01:50–01:53 — Transition Into Coding

Say:

> “Theory ka ek kaam tha: aapko architecture samjhana. Ab us architecture ka smallest version banate hain.”

Point to:

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

> “Main deliberately framework abstraction hide nahi karunga. First class mein hum direct SDK boundary dekhna chahte hain.”

Tell students:

> “Aap har line type karne ki koshish mat karo. First goal is to understand the request path.”

---

# 13. 01:53–02:08 — Live Coding: Minimal AI Backend

> **Note:** This segment may slightly exceed two hours if students are coding along. For a strict 120-minute class, instructor should live-code while students observe and give them the starter repo for hands-on practice.

## 13.1 Project setup

Type:

```bash
mkdir class-01-ai-api
cd class-01-ai-api
npm init -y
npm install express dotenv openai
```

Say while typing:

> “Notice karo, AI ke liye koi magical Node.js technology nahi aa rahi. Hum normal backend bana rahe hain. AI is entering as one external service boundary.”

## 13.2 Environment variables

Create:

```env
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=your-current-supported-model
PORT=3000
```

Say:

> “Secret code mein hard-code nahi karna.”

> “Aur especially browser bundle mein provider key kabhi expose nahi karni.”

Draw:

```text
React → Express → Provider
```

Then:

```text
React → Provider
        + secret API key
```

Say:

> “Second architecture production mein unacceptable boundary create kar sakta hai.”

## 13.3 Model service

Create:

```text
src/services/llm.service.js
```

Explain before writing code:

> “Service layer ka kaam provider-specific interaction ko isolate karna hai.”

> “Kal hum provider switch karein toh hopefully route aur product logic rewrite na karna pade.”

Use the current official SDK syntax for the chosen provider and model.

Do not teach every SDK option.

Explain only:

1. client creation
2. model selection
3. input/instructions
4. response extraction

## 13.4 Express route

Create:

```text
POST /api/generate
```

Request:

```json
{
  "topic": "closures"
}
```

Explain:

> “Request validation hum pehle kar rahe hain because AI call expensive and external dependency hai. Bad request ko model tak bhejne ka koi reason nahi.”

Then code validation.

After the first successful request, stop coding.

Ask:

> “Ab architecture mein model call kaunse layer mein tha?”

Students should say:

> “LLM service.”

Ask:

> “Route ka responsibility kya tha?”

Expected:

> “HTTP request/response, validation, calling service.”

Say:

> “Good. This separation gets more important as AI systems become larger.”

---

# 14. If the Live Demo Breaks — Exact Recovery Script

Do not panic or silently debug for ten minutes.

Say:

> “Perfect. Ye actually useful hai. Production AI engineer ko happy-path ke saath failure-path bhi samajhna padta hai.”

Check in this order:

```text
1. Is server running?
2. Is environment variable loaded?
3. Is model name valid for the selected provider/account?
4. Is request body correct?
5. Is provider responding?
```

Say:

> “Notice karo, model problem assume karne se pehle normal software debugging kar rahe hain.”

That sentence reinforces the course philosophy.

If provider access is unavailable, switch to the prepared recorded demo and explain the architecture rather than wasting classroom time.

---

# 15. Optional 2-Minute Closing Discussion

Ask:

> “Aaj agar koi aapse pooche ‘AI Engineer kya karta hai?’, one line mein kya bolenge?”

Take answers.

Then say:

> “Mera version: AI Engineer model ko real software system ka reliable component banata hai.”

Write the final board:

```text
MODEL
  ↓
APPLICATION
  ↓
CONTEXT + TOOLS + VALIDATION
  ↓
EVALUATION + OBSERVABILITY
  ↓
PRODUCTION
```

Circle **APPLICATION**.

Say:

> “Model important hai. Lekin course mein hum model ke around engineering seekhenge.”

---

# 16. Final 3-Minute Exit Ticket

Give students exactly five questions.

They should answer without opening notes.

### Question 1

> “Model aur AI application mein difference kya hai?”

Expected idea: model is one component; application is the complete software system around it.

### Question 2

> “Token aur word same hain?”

Expected: no.

### Question 3

> “Context kahan se aata hai?”

Expected: application-provided information such as instructions, history, retrieval results, tool results, user input.

### Question 4

> “HTTP 200 aaya. Kya AI feature successful hai?”

Expected: not necessarily; response quality still needs validation/evaluation.

### Question 5

> “AI Engineering ko one sentence mein explain karo.”

Expected concept: reliable software around probabilistic models.

Collect 2–3 answers verbally.

---

# 17. Exact Questions to Ask Throughout the Class

Use these naturally rather than reading them all at once.

### Concept checks

> “What exactly is the model doing here?”

> “Where is this information coming from?”

> “Is this model capability or application capability?”

> “What happens if this dependency fails?”

> “Why do we need the backend?”

> “What does the application know that the model does not automatically know?”

> “Can a successful API call still be a failed product outcome?”

### Architecture checks

> “Which layer should own this?”

> “Would you put this logic inside the route or the provider service?”

> “If we change providers tomorrow, what should remain untouched?”

These questions train students to reason about ownership rather than memorize APIs.

---

# 18. Common Student Questions and Suggested Answers

## Q1. “Does an LLM actually understand?”

Say:

> “Understanding is a loaded philosophical and cognitive term. For this course, focus on the engineering behaviour: the model processes tokenized context and generates outputs using learned parameters. Don't rely on the assumption that the model has human-like understanding.”

## Q2. “Is ChatGPT the model?”

Say:

> “ChatGPT is a product experience. It can use models underneath, but product and model are not identical concepts.”

## Q3. “Is RAG inside the model?”

Say:

> “RAG is an application architecture/pattern that retrieves relevant information and supplies it to the model as context.”

## Q4. “Will the model remember my previous request?”

Say:

> “Only if the application supplies the relevant history/state to the current request or uses another memory mechanism. Don't assume the model automatically sees your application's entire history.”

## Q5. “Why not call the model directly from React?”

Say:

> “Because secrets, authorization, validation, rate limits, cost controls, provider abstraction and business logic should not be pushed into an untrusted client boundary.”

## Q6. “Why do we need RAG if the model already knows things?”

Say:

> “Because application data can be private, current, domain-specific or too large to rely on model pretraining for. RAG lets the application retrieve relevant information at request time.”

Do not turn this into a full RAG lesson.

## Q7. “Why does the model hallucinate?”

Say:

> “Because generation is not the same as guaranteed factual retrieval. The system can produce plausible-looking content that is unsupported or incorrect. That is why we engineer validation and evaluation around it.”

## Q8. “Can we train our own model?”

Say:

> “Yes, but training a foundation model is a different engineering problem from building applications around an existing model. This course is focused primarily on AI application engineering.”

## Q9. “Is prompting the most important skill?”

Say:

> “Prompting matters, but production AI also needs architecture, retrieval, tools, evaluation, security, cost, latency and observability.”

## Q10. “Can we use LangChain from day one?”

Say:

> “We can, but first you should understand the primitive request path. Frameworks are useful when you know what abstraction they are hiding.”

---

# 19. Instructor Corrections: Phrases to Replace

| Avoid | Prefer |
|---|---|
| “The model thinks like a human.” | “The model generates outputs from learned patterns and context.” |
| “The model knows everything.” | “The model has learned patterns and knowledge from training, but application context matters.” |
| “LLM predicts words.” | “LLM predicts tokens.” |
| “Temperature makes it smarter.” | “Temperature influences generation variability/distribution.” |
| “Hallucination means the model is lying.” | “The model can generate confident but unsupported or incorrect content.” |
| “ChatGPT is the model.” | “ChatGPT is a product experience built using models and surrounding systems.” |
| “RAG gives the model memory.” | “RAG retrieves external information and supplies it as context.” |
| “AI Engineering is prompt engineering.” | “Prompting is one technique inside a broader engineering discipline.” |
| “The API returned 200, so it worked.” | “The infrastructure call succeeded; we still need to evaluate the product outcome.” |

---

# 20. Teaching Pace Rules

## If students are confused

Slow down and use a concrete example before introducing another term.

Example:

Instead of explaining context abstractly, say:

> “Imagine your React app has the logged-in user's profile. The model does not automatically have access to that JavaScript object. Your backend has to decide what information to provide.”

## If students are already comfortable

Ask architecture questions instead of adding more terminology.

Example:

> “If we support two model providers, where would you isolate the provider-specific code?”

## If the room is quiet

Do not immediately answer your own question.

Count silently to five.

Then ask a smaller version of the same question.

Example:

> “Is RAG a model?”

If silent:

> “Can I download RAG as a model file?”

That normally unlocks the answer.

## If one student dominates

Say:

> “Good. Let me hear one answer from someone who hasn't answered yet.”

## If a student asks a future-class question

Do not derail the class.

Say:

> “Excellent question. Uska complete answer hum later RAG/Agents wali class mein karenge. Abhi uska mental model bas itna rakho...”

Then give one sentence and continue.

---

# 21. What Students Should NOT Need to Memorize Today

Do not require students to memorize:

- model names
- pricing numbers
- exact context-window limits
- SDK method names
- tokenizer implementation details
- Transformer equations
- attention matrices
- provider-specific streaming syntax
- framework APIs

Those details change or become useful later.

Today they should remember the architecture and concepts.

---

# 22. What Students MUST Leave Knowing

Before leaving, every student should be able to draw this from memory:

```text
User
 ↓
Application
 ↓
Context / Instructions
 ↓
Model Provider
 ↓
Model
 ↓
Generated Output
```

And explain:

1. What a token is.
2. What inference means.
3. What context means.
4. Why output is probabilistic.
5. Why a model is not the whole application.
6. Why secrets belong on the backend.
7. Why evaluation is required beyond HTTP success.

---

# 23. Suggested Homework Framing — What to Say, Not Just What to Assign

When introducing the assignment, say:

> “Aaj ka assignment intentionally fancy UI nahi maang raha.”

> “I want you to practice the engineering boundary.”

> “Build one or more small AI utilities. Keep the model call isolated. Validate input. Handle failures. Protect the key.”

> “Agar tumhara output ugly hai but architecture clean hai, that is more useful for this class than a beautiful frontend calling a provider directly.”

Tell them to focus on the boundary:

```text
HTTP
 ↓
Validation
 ↓
Application logic
 ↓
LLM service
 ↓
Model provider
```

---

# 24. Closing Script

End the class conversationally.

Say:

> “Today we did not learn every AI technology. That was never the goal.”

> “We learned what the model is, what the application is, how an LLM request works at a high level, why context matters, why outputs are probabilistic, and where traditional software engineering comes back into the picture.”

Pause.

> “From the next classes onward, we are going to keep adding pieces to this system.”

Point mentally to the course roadmap:

```text
LLM foundations
      ↓
Prompting
      ↓
Embeddings
      ↓
RAG
      ↓
Memory
      ↓
Tools
      ↓
Agents
      ↓
MCP
      ↓
Evaluation
      ↓
Production AI systems
```

Finish with:

> “So don't think of this course as ‘how to use ChatGPT APIs’. Think of it as ‘how to engineer software when one of the most important components is a probabilistic model’.”

That is the mindset we want from Class 01 onward.

---

# 25. Instructor Post-Class Checklist

After the class, quickly check:

- Did students see a working AI application before theory?
- Did they clearly distinguish model / provider / API / SDK?
- Did they understand that context is application-supplied information?
- Did they understand token ≠ word?
- Did they understand the next-token generation intuition?
- Did they hear the phrase “HTTP 200 ≠ correct answer”?
- Did they see a service boundary around the provider call?
- Did the class avoid getting stuck in framework details?
- Did students leave knowing what AI Engineering means?

If most answers are yes, Class 01 has done its job.
