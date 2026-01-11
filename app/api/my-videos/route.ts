import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET() {
    const session = await getSession();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const userVideos = await prisma.userVideo.findMany({
            where: { userId: session.id, accessGranted: true },
            include: { video: true }
        });

        const videos = userVideos.map((uv: any) => uv.video);

        return NextResponse.json({ videos });
    } catch (error) {
        console.error("My Videos Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
