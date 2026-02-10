"use client";

import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactContent() {
    const { t } = useLanguage();
    const { contactPage } = t;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="bg-white border-b border-gray-100 py-4 px-6 fixed top-0 w-full z-10">
                <div className="max-w-6xl mx-auto flex items-center gap-4">
                    <Link href="/" className="p-2 text-gray-500 hover:text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <span className="font-bold text-lg text-gray-900">{contactPage.info.returnHome}</span>
                </div>
            </div>

            <div className="flex-1 pt-24 pb-20 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Contact Info */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-center">
                        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">{contactPage.info.title}</h1>
                        <p className="text-gray-500 mb-12 text-lg">
                            {contactPage.info.subtitle}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{contactPage.info.emailTitle}</h3>
                                    <p className="text-gray-500">spiritualhome949@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{contactPage.info.callTitle}</h3>
                                    <p className="text-gray-500">+91 81489 26969</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{contactPage.info.visitTitle}</h3>
                                    <p className="text-gray-500 max-w-xs whitespace-pre-line">
                                        {contactPage.info.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
