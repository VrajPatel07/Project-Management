import express from "express";

import { validate } from "../middlewares/validator.middleware.js";
import { userRegistrationValidator, userLoginValidator } from "../validators/index.js";

import { registerUser } from "../controllers/auth.controller.js";


const authRouter = express.Router();

authRouter.post("/register", userRegistrationValidator(), validate, registerUser);


export default authRouter;