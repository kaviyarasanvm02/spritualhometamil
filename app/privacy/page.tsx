import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Read our Privacy Policy to understand how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicy() {
    return <PrivacyContent />;
}

