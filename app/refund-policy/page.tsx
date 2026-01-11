import type { Metadata } from "next";
import RefundContent from "./RefundContent";

export const metadata: Metadata = {
    title: 'Cancellation & Refund Policy',
    description: 'Our policy regarding cancellations, refunds, and digital product purchases.',
};

export default function RefundPolicy() {
    return <RefundContent />;
}
