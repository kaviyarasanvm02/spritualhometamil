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

        console.log("Checking for 'Video' table...");
        try {
            const res = await client.query('SELECT * FROM "Video" ORDER BY "createdAt" DESC');
            console.log(`Found ${res.rowCount} videos:`);
            console.log(JSON.stringify(res.rows, null, 2));
        } catch (e) {
            console.error("Query failed:", e.message);
        }

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
