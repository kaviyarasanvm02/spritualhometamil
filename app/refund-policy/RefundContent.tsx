"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";

export default function RefundContent() {
    const { t } = useLanguage();
    const { refund, updated, returnHome } = t.legalContent;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-white border-b border-gray-100 py-4 px-6 fixed top-0 w-full z-10 transition-all shadow-sm">
                <div className="max-w-4xl mx-auto flex items-center gap-4">
                    <Link href="/" className="p-2 text-gray-500 hover:text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <span className="font-bold text-lg text-gray-900">{returnHome}</span>
                </div>
            </div>

            <div className="flex-1 pt-24 pb-20 px-6">
                <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{refund.title}</h1>
                    <p className="text-gray-500 mb-8">{updated}</p>

                    <div className="prose prose-amber max-w-none text-gray-600 space-y-8">
                        {/* Digital Products */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">{refund.digital.title}</h2>
                            <p>{refund.digital.content}</p>
                        </section>

                        {/* Eligibility */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">{refund.eligibility.title}</h2>
                            <p>{refund.eligibility.content}</p>
                            <ul className="list-disc pl-5 space-y-2 mt-3 block">
                                {refund.eligibility.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <p className="mt-3 font-medium text-amber-700">{refund.eligibility.note}</p>
                        </section>

                        {/* Request */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">{refund.request.title}</h2>
                            <p>
                                {refund.request.content} <br />
                                <a href="mailto:support@spiritualhometamil.com" className="text-amber-600 font-semibold hover:underline">support@spiritualhometamil.com</a>
                            </p>
                        </section>

                        {/* Cancellation */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">{refund.cancellation.title}</h2>
                            <p>{refund.cancellation.content}</p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
