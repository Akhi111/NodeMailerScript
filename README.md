1.Ensure the Backend is Running
Make sure your backend (Node.js server) is running locally or deployed. If it's running locally, it might be on http://localhost:3000 or another port that you've configured.
2.Open Postman
3.Create a New POST Request
Open Postman and create a new POST request.
In the URL field, enter the endpoint for sending the emails. For local development, it will be:
http://localhost:8000/email/send-email
4.Set Up the Request Body > body>raw>json
5. Now, enter the JSON body like this: 
{
  "recipients": "user1@example.com, user2@example.com, user3@example.com"
}
Make sure to replace the email addresses with actual ones that you want to test with (e.g., use your own test email addresses).

6.Send the Request
  Click the Send button in Postman.
7.Check the Response
  If everything is set up correctly, you should receive a 200 OK response with a message like:
  {
    "message": "Emails sent successfully"
  }
