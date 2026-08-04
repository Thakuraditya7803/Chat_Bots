require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const chatRoutes = require("./src/routes/chatRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json({
    limit: "20kb"
}));

app.use(express.static(
    path.join(__dirname, "public")
));

const chatLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        error: "Too many requests. Please wait before trying again."
    }
});

app.use(
    "/api/chat",
    chatLimiter,
    chatRoutes
);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: "Route not found."
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});