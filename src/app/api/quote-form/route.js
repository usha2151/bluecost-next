import pool from "../../../../lib/mysql";

// Named export for POST method (Insert data)
export async function POST(req) {
  try {
    // Parse the incoming JSON data from the request body
    const { name, address, dob, income, householdSize, phoneNumber, email, medicalConcern, medicalIssues } = await req.json();

    // Insert the data into the "getquote" table
    const query = `
      INSERT INTO getquote (name, address, dob, income, households, phone, email, medical_concern, medical_issues)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const [result] = await pool.query(query, [
      name,
      address,
      dob,
      income,
      householdSize,
      phoneNumber,
      email,
      medicalConcern,
      medicalIssues || '', // Use empty string if no medical issues
    ]);
    
    // Respond with success and the inserted row ID
    return new Response(
      JSON.stringify({
        message: 'Quote submitted successfully!',
        id: result.insertId,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    // If there's an error, send the error message back
    console.error('Error inserting quote:', error);
    return new Response(
      JSON.stringify({
        error: 'There was an error submitting your quote.',
        details: error.message,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}