import pool from "../../../../lib/mysql";
import { sendEmail } from "../../../../lib/nodemailer"; // Corrected import path

export async function POST(req) {
  try {
    // Parse the incoming JSON data from the request body
    const { full_name, email_address, phone_number, state, city } = await req.json();

    // Insert the data into the "contact" table
    const [result] = await pool.query(
      'INSERT INTO brokers (full_name, email_address, phone_number, state, city) VALUES (?, ?, ?, ?, ?)',
      [full_name, email_address, phone_number, state, city]
    );

    // After inserting the data, send a confirmation email to the user
    const headerContent = `<div class="email-header"><h1>New Broker Registration Data</h1></div>`;
    const subject = 'Broker Registration Submission';
    const html = `
     <div class="email-body">
      <h3>Thank you for registering, ${full_name}!</h3>
      <p>We have successfully received your registration details. A member of our team will reach out to you soon.</p>
      <p><strong>Your Details:</strong></p>
      <ul>
        <li><strong>Name:</strong> ${full_name}</li>
        <li><strong>Phone:</strong> ${phone_number}</li>
        <li><strong>Email:</strong> ${email_address}</li>
        <li><strong>State:</strong> ${state}</li>
        <li><strong>City:</strong> ${city}</li>
      </ul>
      <p>Thank you for joining our network of brokers. We look forward to working with you!</p>
     </div>
    `;

    // Call sendEmail to send the confirmation email
    await sendEmail(email_address, subject, html, headerContent);

    // Respond with a success message
    return new Response(
        JSON.stringify({ message: 'Broker registration submitted successfully', id: result.insertId }),
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
