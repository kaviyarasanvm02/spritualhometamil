// scripts/seed-admin.ts
const { PrismaClient } = require("@prisma/client");
const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");
const bcrypt = require("bcryptjs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

console.log("Loaded DATABASE_URL:", process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 25) + "..." : "UNDEFINED");


// Re-implement the client creation here to avoid import issues with custom server logic
let connectionString = process.env.DATABASE_URL;
if (connectionString && connectionString.startsWith("prisma+postgres://")) {
    connectionString = connectionString.replace("prisma+postgres://", "postgres://");
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log("Checking for existing users...");
    const users = await prisma.user.findMany();

    if (users.length > 0) {
        console.log("Users found in database:");
        users.forEach((u) => {
            console.log(`- ${u.email} (Role: ${u.role})`);
        });

        const admin = users.find(u => u.role === "ADMIN");
        if (admin) {
            console.log("\n✅ Admin account already exists:", admin.email);
            console.log("If you forgot the password, please delete this user or update the password manually in DB.");
        } else {
            console.log("\n⚠️ No ADMIN found. Promoting the first user to ADMIN...");
            await prisma.user.update({
                where: { id: users[0].id },
                data: { role: "ADMIN" }
            });
            console.log(`✅ Promoted ${users[0].email} to ADMIN.`);
        }

    } else {
        console.log("No users found. Creating default admin...");
        const hashedPassword = await bcrypt.hash("admin123", 10);

        const newAdmin = await prisma.user.create({
            data: {
                email: "admin@spiritualhome.com",
                password: hashedPassword,
                name: "Admin User",
                role: "ADMIN",
            },
        });

        console.log("\n✅ Admin user created!");
        console.log("Email: admin@spiritualhome.com");
        console.log("Password: admin123");
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
