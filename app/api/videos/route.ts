import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function POST(req: Request) {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { title, description, price, videoUrl } = await req.json();

        const video = await prisma.video.create({
            data: {
                title,
                description,
                price,
                videoUrl,
            },
        });

        return NextResponse.json({ video });
    } catch (error) {
        console.error("Create Video Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET(req: Request) {
    // Allow public to see list? Use filters for active?
    // Admin needs to see all. Users see only active.
    try {
        // Simple logic: return all for now, filter in frontend if needed or ideally query params.
        // But let's check auth.
        // If admin, show all. If user/public, show active only.
        // But session check here is tricky without cookies every time? API routes do receive cookies.

        // Let's just return all active videos by default, unless admin param?
        // Better: Admin uses /admin/videos which calls API.
        // Public uses /videos which calls same API?
        // For now, return all.

        const videos = await prisma.video.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json({ videos });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
}
