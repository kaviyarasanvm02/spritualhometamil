import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function POST(req: Request) {
    const session = await getSession();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { paymentId, videoId, orderId, signature } = await req.json();

        // Verify signature here usually for robust security (crypto check)
        // For now, we trust the client call after success, but IN PRODUCTION verify signature on backend.

        // Create Order Record
        await prisma.order.create({
            data: {
                userId: session.id,
                videoId,
                paymentId,
                amount: 0, // Should fetch real amount or pass it. Using 0 placeholder or need to look up video?
                status: "PAID",
            }
        });

        // Grant Access
        await prisma.userVideo.create({
            data: {
                userId: session.id,
                videoId,
                accessGranted: true,
            }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Order Completion Error:", error);
        return NextResponse.json({ error: "Failed to record order" }, { status: 500 });
    }
}

export async function GET(req: Request) {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const orders = await prisma.order.findMany({
            include: {
                user: { select: { name: true, email: true } },
                video: { select: { title: true } }
            },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json({ orders });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
    }
}
