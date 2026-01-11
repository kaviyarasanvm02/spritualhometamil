import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms and conditions for using Spiritual Home Tamil services and website.',
};

export default function TermsOfService() {
    return <TermsContent />;
}
