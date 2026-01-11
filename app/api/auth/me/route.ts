import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function GET() {
    const session = await getSession();

    if (!session) {
        return NextResponse.json({ user: null }, { status: 401 });
    }

    // Ideally fetch fresh data from DB, but token payload is enough for now
    return NextResponse.json({ user: session });
}
