import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { comparePassword, signToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { loginSchema } from "@/lib/validations";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validation = loginSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ error: validation.error.issues[0].message }, { status: 400 });
        }

        const { email, password } = validation.data;

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
