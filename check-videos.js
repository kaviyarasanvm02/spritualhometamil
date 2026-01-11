const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' }); // Load from .env.local

async function checkVideos() {
    console.log("Checking Video table in:", process.env.DATABASE_URL);
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });

    try {
        const client = await pool.connect();

        // List tables to ensure Video exists and check case sensitivity
        // Prisma usually creates "Video" or "video" depending on config
        const tablesRes = await client.query("SELECT key_column_usage.table_name FROM information_schema.key_column_usage WHERE table_schema='public' GROUP BY table_name");
        console.log("Tables found:", tablesRes.rows.map(r => r.table_name));

        // Try selecting from Video (PascalCase as per Prisma model)
        // PostgreSQL unquoted identifiers are lowercase. Prisma quotes them. 
        // We'll try quoted first since Prisma likely created it as "Video"
        try {
            const res = await client.query('SELECT * FROM "Video"');
            console.log("Row count in \"Video\":", res.rowCount);
            console.log("Rows:", res.rows);
        } catch (e) {
            console.log("Query 'Video' failed, trying 'video'...");
            const res2 = await client.query('SELECT * FROM video');
            console.log("Row count in video:", res2.rowCount);
            console.log("Rows:", res2.rows);
        }

        client.release();
    } catch (err) {
        console.error("❌ Error:", err);
    } finally {
        await pool.end();
    }
}

checkVideos();
