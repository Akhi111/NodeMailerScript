import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./route/emailRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/email", route);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
