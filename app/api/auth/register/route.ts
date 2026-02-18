import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hashPassword, signToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { sendWelcomeEmail } from "@/lib/mail";
import { registerSchema } from "@/lib/validations";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validation = registerSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ error: validation.error.issues[0].message }, { status: 400 });
        }

        const { name, email, password } = validation.data;

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await hashPassword(password);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                // First user can be admin, or manual DB update. Default is USER.
            },
        });

        await sendWelcomeEmail(user.email, user.name || "User");

        const token = signToken({ id: user.id, email: user.email, role: user.role });
        const cookieStore = await cookies();
        cookieStore.set("token", token, { httpOnly: true, path: "/" });

        return NextResponse.json({ user: { id: user.id, email: user.email, name: user.name, role: user.role } });
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
