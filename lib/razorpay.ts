import Razorpay from "razorpay";

export const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY || "rzp_test_placeholder", // Use public key for client logic if needed, but here we need secret for server
    key_secret: process.env.RAZORPAY_KEY_SECRET || "placeholder_secret",
});
