# Full Stack Project

This project consists of two parts:
- **Frontend**: Built with [Vite + React]
- **Backend**: Built with [Node.js + Express]

---

## 📁 Project Structure
```
project-root/ 
│ 
├── backend/ # Node.js server
│
└── 
│ 
├── frontend/ # Vite + React app 
│ 
└── ... 
│ 
└── README.md
```
---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AmadIrfan/amad-innovaxel-irfan.git

cd amad-innovaxel-irfan
```
## 🛠️ Backend Setup

```
cd backend
npm install

# In development mode (with nodemon, if set up)
npm run serve

# Or normal start
npm start
```

## 💻 Frontend Setup
```
cd frontend
npm install

# In development mode (with nodemon, if set up)
npm run dev
```

## ⚙️ Environment Variables

Create .env files in both backend and frontend directories as needed.

Example for backend/.env:
```
PORT = 5000
MONGODB_URL="your monogo db url"
```

Example for Frontend/.env:
```
VITE_APP_BACKEND_API=http://localhost:3000
VITE_APP_FRONTEND_API=http://localhost:5173
```
