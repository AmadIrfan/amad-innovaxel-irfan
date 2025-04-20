// === BACKEND: Node.js + Express + MongoDB ===
// File: backend/server.js
const express = require('express');
const cors = require('cors');
require("dotenv").config();
const { nanoid } = require('nanoid');
const { Url } = require('./models/urlModels');
const db = require('./db/db')
const urlShortenRoute = require('./routes/urlRoute');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/shorten', urlShortenRoute)
app.get('/', (req, res) => {
    res.send("welcome to my backend application")
})

// Handle not found routes
app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


