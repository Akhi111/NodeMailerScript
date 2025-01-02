import { sendEmail } from "../utils/sendEmail.js";

export const sendEmailController = async (req, res) => {
  const { recipients } = req.body;

  if (!recipients) {
    return res.status(400).json({ error: "Please provide recipients" });
  }

  const recipientsList = recipients.split(",").map((email) => email.trim());

  try {
    for (const recipient of recipientsList) {
      await sendEmail(recipient);
    }
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
};
