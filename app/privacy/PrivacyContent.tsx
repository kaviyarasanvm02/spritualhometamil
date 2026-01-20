"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";

export default function PrivacyContent() {
    const { t } = useLanguage();
    const { privacy, updated, returnHome } = t.legalContent;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Simple Header */}
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
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{privacy.title}</h1>
                    <p className="text-gray-500 mb-8">{updated}</p>

                    <div className="prose prose-amber max-w-none text-gray-600 space-y-8">
                        {/* Intro */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">{privacy.intro.title}</h2>
                            <p>{privacy.intro.content}</p>
                        </section>

                        {/* Data Collect */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">{privacy.dataCollect.title}</h2>
                            <p>{privacy.dataCollect.content}</p>
                            <ul className="list-disc pl-5 space-y-2 mt-3 block">
                                {privacy.dataCollect.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Usage */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">{privacy.usage.title}</h2>
                            <p>{privacy.usage.content}</p>
                            <ul className="list-disc pl-5 space-y-2 mt-3 block">
                                {privacy.usage.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Security */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">{privacy.security.title}</h2>
                            <p>{privacy.security.content}</p>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">{privacy.contact.title}</h2>
                            <p>
                                {privacy.contact.content} <br />
                                <a href={`mailto:${privacy.contact.email}`} className="text-amber-600 font-semibold hover:underline">
                                    {privacy.contact.email}
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            {/* <Footer /> removed */}
        </div>
    );
}
