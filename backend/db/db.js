const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// mongoose.set('debug', true)
const url = process.env.MONGODB_URL;

// @ts-ignore
mongoose.connect(url);

const db = mongoose.connection;

db.on("error", (err) => {
    console.log("ERROR --> ", err.message);
});
db.once("open", () => {
    console.log("connected with MONGO DB");
});  

  