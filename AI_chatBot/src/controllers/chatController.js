const { generateAIReply } = require("../services/aiService");

async function chatWithAI(req, res) {
    try {
        const { message, history = [] } = req.body;

        if (
            typeof message !== "string" ||
            message.trim().length === 0
        ) {
            return res.status(400).json({
                success: false,
                error: "A valid message is required."
            });
        }

        if (message.length > 4000) {
            return res.status(400).json({
                success: false,
                error: "The message is too long."
            });
        }

        if (!Array.isArray(history)) {
            return res.status(400).json({
                success: false,
                error: "History must be an array."
            });
        }

        const safeHistory = history
            .filter((item) => {
                return (
                    item &&
                    ["user", "assistant"].includes(item.role) &&
                    typeof item.content === "string"
                );
            })
            .slice(-10);

        const reply = await generateAIReply(
            message.trim(),
            safeHistory
        );

        return res.status(200).json({
            success: true,
            reply: reply
        });
    } catch (error) {
        console.error("AI chatbot error:", error);

        return res.status(500).json({
            success: false,
            error: "The AI assistant could not generate a response."
        });
    }
}

module.exports = {
    chatWithAI
};