# 🤖 GEN-AI-Resume-Screener

An AI-powered resume screening web application built with the MERN stack that analyzes resumes and matches them against job descriptions using Generative AI.

## 🚀 Features

- Upload and parse resumes (PDF)
- Match resume against job description using AI
- Get a relevance score and feedback
- JWT-based authentication
- Clean and responsive UI

## 🛠️ Tech Stack

**Frontend:** React.js, Axios, CSS3  
**Backend:** Node.js, Express.js, REST APIs  
**Database:** MongoDB, Mongoose  
**AI Integration:** Generative AI (Claude / OpenAI API)  
**Auth:** JWT, Role-Based Access Control  
**Tools:** Git, GitHub, Postman, Jira

## 📁 Project Structure
GEN-AI-Resume-Screener/
├── client/          # React Frontend
├── server/          # Node/Express Backend
├── models/          # Mongoose Schemas
├── routes/          # API Routes
└── services/        # AI & Auth Services

## ⚙️ Getting Started

```bash
# Clone the repo
git clone https://github.com/arpn-Goyal/GEN-AI-Resume-Screener.git

# Install backend dependencies
cd server && npm install

# Install frontend dependencies
cd client && npm install

# Run both
npm run dev
```

## 🔐 Environment Variables

Create a `.env` file in `/server`:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
AI_API_KEY=your_ai_api_key
PORT=5000

## 👨‍💻 Author

**Arpan Goyal**  
B.E. Computer Science | Chitkara University  
[GitHub](https://github.com/arpn-Goyal) • [LinkedIn](https://linkedin.com/in/your-profile)

## 📄 License

MIT License
