import pool from "../../../../lib/mysql";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const [result] = await pool.query(
      'INSERT INTO appointment (name, email, phone, message) VALUES (?, ?, ?, ?)',
      [name, email, phone, message] 
    );

    return new Response(
      JSON.stringify({ message: 'Appointment form submitted successfully', id: result.insertId }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Database query failed', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}