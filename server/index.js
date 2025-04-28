import express from 'express';
import connectionDb from "./db.js";
 import cors from "cors";
 import authRouter from "./routes/auth.js";
 import noteRouter from "./routes/note.js";
 import dotenv from "dotenv"; 
const app = express();
app.use(cors());
app.use(express.json());
connectionDb();
dotenv.config();

app.use("/api/auth",authRouter);
app.use("/api/note",noteRouter);
app.listen(2000,()=>{
    console.log("Server is running on port 2000");
})