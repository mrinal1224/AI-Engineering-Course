# Class 01 Interview Bank — Introduction to AI Engineering

## Fundamentals

1. What is AI Engineering and how is it different from ML Engineering?
2. What is an LLM?
3. What is inference?
4. What is a token?
5. Why are tokens important for AI application design?
6. What is a context window?
7. Does an LLM automatically know the state of your database? Why or why not?
8. What is temperature and what does changing it do?
9. Why can the same prompt produce different outputs?
10. What is the difference between a model and an AI application?

## Backend Engineering

11. Why should the model provider call usually happen on the backend?
12. How would you protect an API key?
13. What happens if the model provider times out?
14. What would you retry and what would you never retry blindly?
15. How would you reduce LLM latency?
16. How would you control the cost of an endpoint exposed publicly?
17. What would you log for an LLM request?
18. Which logs might contain sensitive data?

## System Design

19. Design an AI chat API for 10,000 concurrent users.
20. Where would caching help?
21. Where would rate limiting help?
22. How would you introduce a second model provider without rewriting the application?
23. What metrics would you monitor in production?
24. How would you detect that model quality has degraded even though HTTP responses remain successful?

## Discussion Prompts

- "The API returned 200. Why might the product still be broken?"
- "Is a larger model always better engineering?"
- "Why should we keep provider-specific code behind an abstraction?"
- "What belongs in the prompt and what belongs in application code?"
