import { PrismaClient } from "@prisma/client"
import { Pool } from "pg"
import { PrismaPg } from "@prisma/adapter-pg"

const prismaClientSingleton = () => {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        console.error("DATABASE_URL is not set.");
    }

    const pool = new Pool({ connectionString: connectionString || "" });
    const adapter = new PrismaPg(pool);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new PrismaClient({ adapter: adapter as any });
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma
