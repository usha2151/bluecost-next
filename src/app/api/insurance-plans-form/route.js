import pool from "../../../../lib/mysql";
import { sendEmail } from "../../../../lib/nodemailer"; // Corrected import path

export async function POST(req) {
  try {
    // Parse the incoming JSON data from the request body
    const {
      member_first_name, middle_initial, last_name, address, city, state, zip_code, 
      contact_phone_number, alternate_phone_number, email_address, date_of_birth, gender, 
      organ_failure_or_transplant, genetic_condition, cancer_treatment, kidney_failure, 
      high_risk_pregnancy, hemophilia, cancer_treatment_past_5_years, heart_disease_or_stroke_past_5_years, 
      home_bound_past_5_years, autoimmune_blood_disease, organ_support_past_5_years, 
      organ_failure_or_transplant_past_5_years, currently_pregnant, hospitalized_for_conditions, 
      respiratory_disorders, musculoskeletal_disorders, substance_abuse, type_1_diabetic, 
      major_surgery_or_upcoming_surgery, willing_to_share_data
    } = await req.json();

    // Insert the data into the "insurance_applicants" table
    const [result] = await pool.query(
      'INSERT INTO insurance_applicants (member_first_name, middle_initial, last_name, address, city, state, zip_code, contact_phone_number, alternate_phone_number, email_address, date_of_birth, gender, organ_failure_or_transplant, genetic_condition, cancer_treatment, kidney_failure, high_risk_pregnancy, hemophilia, cancer_treatment_past_5_years, heart_disease_or_stroke_past_5_years, home_bound_past_5_years, autoimmune_blood_disease, organ_support_past_5_years, organ_failure_or_transplant_past_5_years, currently_pregnant, hospitalized_for_conditions, respiratory_disorders, musculoskeletal_disorders, substance_abuse, type_1_diabetic, major_surgery_or_upcoming_surgery, willing_to_share_data) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        member_first_name, middle_initial, last_name, address, city, state, zip_code, 
        contact_phone_number, alternate_phone_number, email_address, date_of_birth, gender, 
        organ_failure_or_transplant, genetic_condition, cancer_treatment, kidney_failure, 
        high_risk_pregnancy, hemophilia, cancer_treatment_past_5_years, heart_disease_or_stroke_past_5_years, 
        home_bound_past_5_years, autoimmune_blood_disease, organ_support_past_5_years, 
        organ_failure_or_transplant_past_5_years, currently_pregnant, hospitalized_for_conditions, 
        respiratory_disorders, musculoskeletal_disorders, substance_abuse, type_1_diabetic, 
        major_surgery_or_upcoming_surgery, willing_to_share_data
      ]
    );

    // After inserting the data, send a confirmation email to the user
    const headerContent = `<div class="email-header"><h1>Your Insurance Application</h1></div>`;
    const subject = 'Insurance Application Received';
    const html = `
      <div class="email-body">
        <h3>Thank you for submitting your insurance application, ${member_first_name}!</h3>
        <p>We have received your application and our team will review it soon. Here are the details you provided:</p>
        <ul>
          <li><strong>First Name:</strong> ${member_first_name}</li>
          <li><strong>Middle Initial:</strong> ${middle_initial}</li>
          <li><strong>Last Name:</strong> ${last_name}</li>
          <li><strong>Address:</strong> ${address}</li>
          <li><strong>City:</strong> ${city}</li>
          <li><strong>State:</strong> ${state}</li>
          <li><strong>ZIP Code:</strong> ${zip_code}</li>
          <li><strong>Contact Phone Number:</strong> ${contact_phone_number}</li>
          <li><strong>Alternate Phone Number:</strong> ${alternate_phone_number}</li>
          <li><strong>Email Address:</strong> ${email_address}</li>
          <li><strong>Date of Birth:</strong> ${date_of_birth}</li>
          <li><strong>Gender:</strong> ${gender}</li>
          <li><strong>Organ Failure or Transplant:</strong> ${organ_failure_or_transplant}</li>
          <li><strong>Genetic Condition:</strong> ${genetic_condition}</li>
          <li><strong>Cancer Treatment:</strong> ${cancer_treatment}</li>
          <li><strong>Kidney Failure:</strong> ${kidney_failure}</li>
          <li><strong>High Risk Pregnancy:</strong> ${high_risk_pregnancy}</li>
          <li><strong>Hemophilia:</strong> ${hemophilia}</li>
          <li><strong>Cancer Treatment in the Past 5 Years:</strong> ${cancer_treatment_past_5_years}</li>
          <li><strong>Heart Disease or Stroke in the Past 5 Years:</strong> ${heart_disease_or_stroke_past_5_years}</li>
          <li><strong>Home Bound in the Past 5 Years:</strong> ${home_bound_past_5_years}</li>
          <li><strong>Autoimmune Blood Disease:</strong> ${autoimmune_blood_disease}</li>
          <li><strong>Organ Support in the Past 5 Years:</strong> ${organ_support_past_5_years}</li>
          <li><strong>Organ Failure or Transplant in the Past 5 Years:</strong> ${organ_failure_or_transplant_past_5_years}</li>
          <li><strong>Currently Pregnant:</strong> ${currently_pregnant}</li>
          <li><strong>Hospitalized for Conditions:</strong> ${hospitalized_for_conditions}</li>
          <li><strong>Respiratory Disorders:</strong> ${respiratory_disorders}</li>
          <li><strong>Musculoskeletal Disorders:</strong> ${musculoskeletal_disorders}</li>
          <li><strong>Substance Abuse:</strong> ${substance_abuse}</li>
          <li><strong>Type 1 Diabetic:</strong> ${type_1_diabetic}</li>
          <li><strong>Major Surgery or Upcoming Surgery:</strong> ${major_surgery_or_upcoming_surgery}</li>
          <li><strong>Willing to Share Data:</strong> ${willing_to_share_data}</li>
        </ul>
        <p>Our team will contact you if any additional information is needed. Thank you for choosing our services!</p>
      </div>
    `;

    // Call sendEmail to send the confirmation email
    await sendEmail(email_address, subject, html, headerContent);

    // Respond with a success message
    return new Response(
      JSON.stringify({ message: 'Insurance application submitted successfully', id: result.insertId }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    // If there's an error, send the error message back
    return new Response(
      JSON.stringify({ error: 'Database query failed', details: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
