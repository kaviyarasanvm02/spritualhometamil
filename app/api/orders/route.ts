import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { sendOrderConfirmationEmail } from "@/lib/mail";

export async function POST(req: Request) {
    const session = await getSession();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { paymentId, videoId, orderId, signature, amount, planPeriod } = await req.json();

        // Calculate Expiration
        let expiresAt: Date | null = null;
        const now = new Date();

        if (planPeriod === 'monthly') {
            expiresAt = new Date(now.setDate(now.getDate() + 30));
        } else if (planPeriod === '6_months') {
            expiresAt = new Date(now.setDate(now.getDate() + 180));
        } else if (planPeriod === '1_year') {
            expiresAt = new Date(now.setDate(now.getDate() + 365));
        } else if (planPeriod === 'lifetime') {
            expiresAt = null;
        }

        // Verify signature here usually for robust security (crypto check)
        // For now, we trust the client call after success, but IN PRODUCTION verify signature on backend.

        // Create Order Record
        await prisma.order.create({
            data: {
                userId: session.id,
                videoId,
                paymentId,
                amount: Number(amount) || 0,
                status: "PAID",
            }
        });

        const orderAmount = Number(amount) || 0;

        // Grant Access
        await prisma.userVideo.create({
            data: {
                userId: session.id,
                videoId,
                accessGranted: true,
                expiresAt: expiresAt
            } as any
        });

        // Send confirmation email
        await sendOrderConfirmationEmail(session.email, "ORDER-" + Date.now(), orderAmount);

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
                video: { select: { title: true, price: true } }
            },
            orderBy: { createdAt: 'desc' }
        });

        const ordersWithPrice = orders.map(order => ({
            ...order,
            amount: order.amount > 0 ? order.amount : order.video.price
        }));

        return NextResponse.json({ orders: ordersWithPrice });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
    }
}
