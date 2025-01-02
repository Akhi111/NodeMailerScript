import express from "express";
import { sendEmailController } from "../controller/emailController.js";

const route = express.Router();

route.post("/send-email", sendEmailController);

export default route;
