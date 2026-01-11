import { NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";
import { getSession } from "@/lib/auth";

export async function POST(req: Request) {
    const session = await getSession();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { amount, videoId } = await req.json();

        const options = {
            amount: amount * 100, // Razorpay works in paise
            currency: "INR",
            receipt: `receipt_${videoId}_${session.id}`,
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json(order);
    } catch (error) {
        console.error("Razorpay Order Error:", error);
        return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
    }
}
