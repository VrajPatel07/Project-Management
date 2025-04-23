import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./utils/db.js";

import authRouter from "./routes/auth.route.js";
import healthcheckRouter from "./routes/healthcheck.route.js";
import noteRouter from "./routes/note.route.js";
import projectRouter from "./routes/project.route.js";
import taskRouter from "./routes/task.route.js";


dotenv.config({path : "./.env"});


const app = express();


app.use(express.json());
app.use(cookieParser());

app.use(cors());


app.listen(process.env.PORT, () => {
    console.log(`Server running at PORT ${process.env.PORT}`);
})


connectDB();


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/health-check", healthcheckRouter);
app.use("/api/v1/note", noteRouter);
app.use("/api/v1/project", projectRouter);
app.use("/api/v1/task", taskRouter);