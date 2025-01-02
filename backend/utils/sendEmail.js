import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { EmailMessageTemplate } from "./emailTemplate.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (sendTo) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: sendTo,
      subject: "Welcome to Our Service!",
      html: EmailMessageTemplate(),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
