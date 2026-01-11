const { Pool } = require('pg');
require('dotenv').config();

async function checkConnection() {
    console.log("Checking database connection...");
    console.log("URL:", process.env.DATABASE_URL);

    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });

    try {
        const client = await pool.connect();
        console.log("✅ Successfully connected to PostgreSQL!");
        const res = await client.query('SELECT NOW()');
        console.log("Time from DB:", res.rows[0]);
        client.release();
    } catch (err) {
        console.error("❌ Connection failed:", err.message);
        if (err.code === 'ECONNREFUSED') {
            console.error("Hint: Is your PostgreSQL database running on localhost:5432?");
        }
    } finally {
        await pool.end();
    }
}

checkConnection();
