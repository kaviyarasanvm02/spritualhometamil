import { NextResponse } from "next/server";
import { razorpay } from "@/lib/razorpay";
import { getSession } from "@/lib/auth";

export async function POST(req: Request) {
    const session = await getSession();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const body = await req.json();
        console.log("Request Body:", body);
        const { amount, videoId } = body;

        console.log(`Processing Order: Amount=${amount}, VideoId=${videoId}`);

        if (!amount || !videoId) {
            throw new Error("Missing amount or videoId");
        }

        // Initialize locally to verify env vars are used correctly at runtime
        const Razorpay = require("razorpay");
        const instance = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = {
            amount: Math.round(Number(amount) * 100), // Ensure integer
            currency: "INR",
            receipt: `receipt_${videoId.substring(0, 10)}_${session.id.substring(0, 5)}`, // Ensure receipt length is safe
        };

        console.log("Creating Razorpay Order with options:", options);

        const order = await instance.orders.create(options);
        console.log("Order Created Successfully:", order);

        return NextResponse.json(order);
    } catch (error: any) {
        console.error("Razorpay Order Error Full Object:", JSON.stringify(error, null, 2));

        return NextResponse.json({
            error: "Failed to create order",
            message: error.message || "Unknown error",
            fullError: JSON.parse(JSON.stringify(error)), // Ensure serializable
            debug: {
                envKeyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Temporary log to verify Match
                hasSecret: !!process.env.RAZORPAY_KEY_SECRET
            }
        }, { status: 500 });
    }
}
