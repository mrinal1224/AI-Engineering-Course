import "dotenv/config";
import express from "express";
import OpenAI from "openai";

const app = express();
const port = process.env.PORT || 3000;

if (!process.env.OPENAI_API_KEY) {
  console.warn("OPENAI_API_KEY is not set. Add it to .env before making model requests.");
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/quotes", async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic || typeof topic !== "string" || topic.trim().length < 2) {
      return res.status(400).json({
        message: "topic is required and must be a string of at least 2 characters",
      });
    }

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5-mini",
      input: [
        {
          role: "system",
          content: "You write short, original motivational quotes. Return only the quote.",
        },
        {
          role: "user",
          content: `Write one concise quote about: ${topic.trim()}`,
        },
      ],
    });

    return res.json({
      quote: response.output_text,
    });
  } catch (error) {
    console.error("LLM request failed", error);

    return res.status(502).json({
      message: "The AI provider request failed",
    });
  }
});

app.listen(port, () => {
  console.log(`AI Engineering Class 01 server running on http://localhost:${port}`);
});
