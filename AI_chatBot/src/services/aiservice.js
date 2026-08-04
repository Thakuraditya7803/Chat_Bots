const { AzureOpenAI } = require("openai");

const client = new AzureOpenAI({
    endpoint: process.env.AZURE_OPENAI_ENDPOINT,
    apiKey: process.env.AZURE_OPENAI_API_KEY,
    apiVersion: process.env.AZURE_OPENAI_API_VERSION
});

async function generateAIReply(message, conversationHistory = []) {
    const messages = [
        {
            role: "system",
            content: `
You are a helpful AI assistant.

Your responsibilities:
- Explain answers clearly.
- Use beginner-friendly language.
- Provide examples when useful.
- Focus primarily on Node.js, REST APIs, Databricks,
  Spark, SQL and data engineering.
- Do not claim that you performed an action unless
  you actually performed it.
            `.trim()
        },
        ...conversationHistory,
        {
            role: "user",
            content: message
        }
    ];

    const response = await client.chat.completions.create({
        model: process.env.AZURE_OPENAI_DEPLOYMENT,
        messages: messages,
        temperature: 0.3,
        max_tokens: 800
    });

    return response.choices[0].message.content;
}

module.exports = {
    generateAIReply
};