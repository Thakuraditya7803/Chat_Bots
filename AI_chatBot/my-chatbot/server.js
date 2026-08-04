const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Allow the server to receive JSON request bodies
app.use(express.json());

// Serve files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Chatbot REST API
app.post("/api/chat", (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage || userMessage.trim() === "") {
        return res.status(400).json({
            error: "Message is required"
        });
    }

    const botReply = generateReply(userMessage);

    res.json({
        reply: botReply
    });
});

function generateReply(message) {
    const normalizedMessage = message.toLowerCase().trim();

    if (
        normalizedMessage.includes("hello") ||
        normalizedMessage.includes("hi")
    ) {
        return "Hello! How can I help you?";
    }

    if (normalizedMessage.includes("your name")) {
        return "My name is Aditya's Chatbot.";
    }

    if (normalizedMessage.includes("databricks")) {
        return "Databricks is a platform for data engineering, analytics and AI workloads.";
    }

    if (normalizedMessage.includes("lakebase")) {
        return "Lakebase is a transactional database capability in the Databricks ecosystem.";
    }

    if (
        normalizedMessage.includes("bye") ||
        normalizedMessage.includes("goodbye")
    ) {
        return "Goodbye! Have a great day.";
    }

    return "I do not understand that question yet. Please try asking it differently.";
}

app.listen(PORT, () => {
    console.log(`Chatbot running at http://localhost:${PORT}`);
});