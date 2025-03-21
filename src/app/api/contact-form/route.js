import pool from "../../../../lib/mysql";
import { sendEmail } from "../../../../lib/nodemailer"; // Corrected import path

export async function POST(req) {
  try {
    // Parse the incoming JSON data from the request body
    const { name, email, phone, message } = await req.json();

    // Insert the data into the "contact" table
    const [result] = await pool.query(
      'INSERT INTO contact (name, email, phone, message) VALUES (?, ?, ?, ?)',
      [name, email, phone, message]
    );

    // After inserting the data, send a confirmation email to the user
    const headerContent = `<div class="email-header"><h1>New Contact Us Data</h1></div>`;
    const subject = 'New Contact Form Submission';
    const html = `
     <div class="email-body">
      <h3>Thank you for reaching out, ${name}!</h3>
      <p>We have received your message and will get back to you soon.</p>
      <p><strong>Your Message:</strong> ${message}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      </div>
    `;

    // Call sendEmail to send the confirmation email
    await sendEmail(email, subject, html, headerContent);

    // Respond with a success message
    return new Response(
      JSON.stringify({ message: 'Contact form submitted successfully', id: result.insertId }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    // If there's an error, send the error message back
    return new Response(
      JSON.stringify({ error: 'Database query failed', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
