
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



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// === FRONTEND remains the same ===
// File: frontend/src/App.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// function App() {
//   const [url, setUrl] = useState('');
//   const [shortData, setShortData] = useState(null);

//   const handleShorten = async () => {
//     try {
//       const res = await axios.post('http://localhost:5000/shorten', { url });
//       setShortData(res.data);
//     } catch (err) {
//       alert(err.response?.data?.error || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-4">
//       <Card className="w-full max-w-md p-6">
//         <CardContent className="flex flex-col gap-4">
//           <h1 className="text-xl font-bold">URL Shortener</h1>
//           <Input
//             placeholder="Enter long URL"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//           />
//           <Button onClick={handleShorten}>Shorten</Button>
//           {shortData && (
//             <div className="mt-4">
//               <p className="text-sm">Short URL:</p>
//               <a href={`http://localhost:5000/shorten/${shortData.shortCode}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//                 {`http://localhost:5000/shorten/${shortData.shortCode}`}
//               </a>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default App;
