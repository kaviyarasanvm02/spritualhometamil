import Link from "next/link";
import Footer from "@/components/Footer";
import ContactContent from "./ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Spiritual Home Tamil. We act on your feedback and support requests promptly.',
    alternates: {
        canonical: 'https://spiritualhometamil.com/contact',
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <ContactContent />
            <Footer />
        </div>
    );
}
