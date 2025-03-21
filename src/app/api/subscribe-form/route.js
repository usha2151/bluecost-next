import pool from "../../../../lib/mysql";
import { sendEmail } from "../../../../lib/nodemailer"; // Corrected import path

export async function POST(req) {
  try {
    // Parse the incoming JSON data from the request body
    const { email } = await req.json();

    // First, check if the email exists with status = 1
    const [checkResult] = await pool.query(
      "SELECT * FROM subscribe WHERE email = ? AND status = 1",
      [email]
    );

    // If the email already exists with status 1, send a response
    if (checkResult.length > 0) {
      return new Response(
        JSON.stringify({ message: "This email already exists" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // If the email doesn't exist or status is not 1, proceed to insert it
    const [result] = await pool.query(
      "INSERT INTO subscribe (email, status) VALUES (?, 1)",
      [email]
    );

    // After inserting the data, send a confirmation email to the user
    const headerContent = `<div class="email-header"><h1>New Subscription Data</h1></div>`;
    const subject = "New Subscription";
    const html = `
      <div class="email-body">
        <h3>Thank you for subscribing!</h3>
        <p>We have successfully received your subscription. You will start receiving updates from us soon.</p>
        <p><strong>Your Email:</strong> ${email}</p>
      </div>
    `;

    // Call sendEmail to send the confirmation email
    await sendEmail(email, subject, html, headerContent);

    // Respond with a success message
    return new Response(
      JSON.stringify({ message: "Your data was saved successfully", id: result.insertId }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // If there's an error, send the error message back
    return new Response(
      JSON.stringify({ error: "Database query failed", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
