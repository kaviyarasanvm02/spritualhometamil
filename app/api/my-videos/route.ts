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
            select: {
                video: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        videoUrl: true,
                        thumbnail: true,
                        price: true
                    }
                },
                expiresAt: true,
                accessGranted: true
            }
        }) as any;

        const videos = userVideos.map((uv: any) => ({
            ...uv.video,
            expiresAt: uv.expiresAt,
            accessGranted: uv.accessGranted
        }));

        return NextResponse.json({ videos });
    } catch (error) {
        console.error("My Videos Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
