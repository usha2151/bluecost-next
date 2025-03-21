import pool from "../../../../lib/mysql";
import { sendEmail } from "../../../../lib/nodemailer"; // Corrected import path

export async function POST(req) {
  try {
    // Parse the incoming JSON data from the request body
    const { name, agency, email, phone } = await req.json();

    // Insert the data into the "inquiry_form" table
    const [result] = await pool.query(
      'INSERT INTO inquiry_form (name, agency, email, phone) VALUES (?, ?, ?, ?)',
      [name, agency, email, phone]
    );

    // After inserting the data, send a confirmation email to the user
    const headerContent = `<div class="email-header"><h1>Inquiry Form Submission</h1></div>`;
    const subject = 'Inquiry Form Submission Received';
    const html = `
     <div class="email-body">
      <h3>Thank you for your inquiry, ${name}!</h3>
      <p>We have successfully received your inquiry and will get back to you shortly. Here are the details you submitted:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Agency:</strong> ${agency}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
      <p>Our team will review your inquiry and reach out to you as soon as possible. Thank you for your interest!</p>
     </div>
    `;

    // Call sendEmail to send the confirmation email
    await sendEmail(email, subject, html, headerContent);

    // Respond with a success message
    return new Response(
      JSON.stringify({ message: 'Inquiry form submitted successfully', id: result.insertId }),
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
