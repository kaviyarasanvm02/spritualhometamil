import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { comparePassword, signToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const isValid = await comparePassword(password, user.password);

        if (!isValid) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const token = signToken({ id: user.id, email: user.email, role: user.role });
        const cookieStore = await cookies();
        cookieStore.set("token", token, { httpOnly: true, path: "/" });

        return NextResponse.json({ user: { id: user.id, email: user.email, name: user.name, role: user.role } });
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
