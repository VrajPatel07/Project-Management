import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./utils/db.js";

dotenv.config({path : "./.env"});

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors());


app.listen(process.env.PORT, () => {
    console.log(`Server running at PORT ${process.env.PORT}`);
})

connectDB();