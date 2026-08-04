# AI Chatbot Application

## Overview

This project is an AI-powered chatbot built using Node.js and Express.js. The chatbot interacts with users through a frontend application and generates intelligent responses using a Large Language Model (LLM) such as Azure OpenAI or OpenAI GPT.

The application follows a REST API architecture where the frontend communicates with the backend API, and the backend communicates with the AI model.

---

## Features

- AI-powered conversations
- REST API architecture
- Node.js and Express backend
- Frontend integration support
- Secure API key handling
- Context-aware responses
- Scalable architecture
- JSON-based request and response handling
- Error handling and logging

---

## Project Architecture

```text
Frontend (React/Angular/Web App)
            │
            ▼
      REST API Layer
       (Express.js)
            │
            ▼
   AI Service Layer
(OpenAI / Azure OpenAI)
            │
            ▼
      Response Engine
            │
            ▼
        Frontend
```

---

## Technology Stack

### Backend

- Node.js
- Express.js
- JavaScript
- REST API

### AI Model

- Azure OpenAI
- OpenAI GPT Models

### Frontend

- React.js
- Angular
- HTML/CSS/JavaScript

### Database (Optional)

- PostgreSQL
- Databricks Lakebase
- MongoDB

---

## Folder Structure

```text
project-root/
│
├── src/
│   ├── controllers/
│   │   └── chatbotController.js
│   │
│   ├── routes/
│   │   └── chatbotRoutes.js
│   │
│   ├── services/
│   │   └── aiService.js
│   │
│   ├── config/
│   │   └── openaiConfig.js
│   │
│   └── app.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-repository/chatbot.git
```

### Navigate to Project Directory

```bash
cd chatbot
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000

OPENAI_API_KEY=your_api_key

OPENAI_MODEL=gpt-4o-mini
```

For Azure OpenAI:

```env
AZURE_OPENAI_ENDPOINT=https://xxxx.openai.azure.com

AZURE_OPENAI_API_KEY=your_api_key

AZURE_OPENAI_DEPLOYMENT=gpt-deployment
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

---

## REST API Endpoints

### Chat Endpoint

**POST**

```http
/api/chat
```

### Request

```json
{
  "message": "Hello AI"
}
```

### Response

```json
{
  "response": "Hello! How can I assist you today?"
}
```

---

## Backend Flow

### Step 1

User enters a message in the frontend.

### Step 2

Frontend sends a POST request to the chatbot API.

### Step 3

Express route receives the request.

### Step 4

Controller validates user input.

### Step 5

AI Service sends the prompt to OpenAI/Azure OpenAI.

### Step 6

AI generates a response.

### Step 7

Backend returns the response to frontend.

### Step 8

Frontend displays the message to the user.

---

## Security Best Practices

- Store API keys in `.env`
- Never expose API keys to frontend
- Use HTTPS in production
- Validate incoming requests
- Implement rate limiting
- Add authentication and authorization
- Enable request logging

---

## Future Enhancements

- Chat history storage
- User authentication
- Multi-session support
- Vector database integration
- RAG (Retrieval Augmented Generation)
- Voice chatbot support
- Document upload and chat
- Databricks integration
- AI Agent support

---

## Sample Use Cases

### Customer Support

Answer customer queries automatically.

### Internal Enterprise Assistant

Help employees access company information.

### Data Assistant

Query databases and generate insights.

### Educational Chatbot

Assist students with learning.

### Manufacturing Dashboard Assistant

Provide MES and operational insights.

---

## Author

Aditya Singh Thakur

Data Engineering Intern

---

## License

This project is licensed under the MIT License.
