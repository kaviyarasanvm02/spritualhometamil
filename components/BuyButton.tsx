"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

interface BuyButtonProps {
    videoId: string;
    price: number;
}

export default function BuyButton({ videoId, price }: BuyButtonProps) {
    const { user } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleBuy = async () => {
        if (!user) {
            router.push("/login");
            return;
        }

        setLoading(true);

        try {
            // 1. Create Order
            const res = await fetch("/api/razorpay/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: price, videoId }),
            });

            const order = await res.json();

            if (!res.ok) throw new Error(order.error || "Order failed");

            // 2. Open Razorpay
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
                amount: order.amount,
                currency: order.currency,
                name: "Spiritual Home",
                description: "Video Access",
                order_id: order.id,
                handler: async function (response: any) {
                    // 3. Verify Payment
                    const verifyRes = await fetch("/api/orders", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            paymentId: response.razorpay_payment_id,
                            orderId: response.razorpay_order_id,
                            signature: response.razorpay_signature,
                            videoId: videoId,
                            amount: price,
                        }),
                    });

                    if (verifyRes.ok) {
                        alert("Payment Successful! Access Granted.");
                        router.push("/my-videos");
                        router.refresh();
                    } else {
                        alert("Payment Verification Failed");
                    }
                },
                prefill: {
                    name: user.name,
                    email: user.email,
                },
                theme: {
                    color: "#F59E0B", // Amber-500
                },
            };

            const razorpay = new (window as any).Razorpay(options);
            razorpay.open();

        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleBuy}
            disabled={loading}
            className="w-full bg-amber-500 text-white py-3 px-4 rounded-md hover:bg-amber-600 font-semibold shadow-lg transition-transform transform hover:scale-105 disabled:opacity-75"
        >
            {loading ? "Processing..." : `Buy Now for ₹${price}`}
        </button>
    );
}
