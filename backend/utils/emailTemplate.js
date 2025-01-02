// utils/emailTemplate.js

export const EmailMessageTemplate = () => {
  // Fixed subject and message
  const subject = "Title of the mail";
  const message = `Thank you for signing up! We're excited to have you on board and look forward to serving you.
     My resume: www.facebook.com`;

  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${subject}</title>
        <style>
      body {
        font-family: Arial, sans-serif;
        background-color: white;
        margin: 0;
        padding: 0;
      }
      .container {
        height: auto;
        background-color: rgb(221, 229, 255);
        border-radius: 10px;
        width: auto;
        padding: 10px;
        margin: 20px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
          rgba(0, 0, 0, 0.23) 0px 6px 6px;
      }

      .para {
        margin: 12px;
      }

      .text {
        font-size: 20px;
        color: black;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="para">
        <p class="text">${message}</p>
      </div>
    </div>
  </body>
      </html>
    `;
};
