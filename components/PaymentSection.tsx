"use client";

import { ShieldCheck, Lock, CreditCard } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function PaymentSection() {
    const { t } = useLanguage();

    return (
        <section className="relative bg-gray-900 py-16 sm:py-24 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
                <h2 className="text-3xl font-bold text-white mb-12 sm:text-4xl">{t.payment.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Lock,
                            title: t.payment.secure.title,
                            desc: t.payment.secure.desc,
                        },
                        {
                            icon: CreditCard,
                            title: t.payment.options.title,
                            desc: t.payment.options.desc,
                        },
                        {
                            icon: ShieldCheck,
                            title: t.payment.razorpay.title,
                            desc: t.payment.razorpay.desc,
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="group flex flex-col items-center p-8 bg-gray-800/50 backdrop-blur-md rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:bg-gray-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/10 group-hover:ring-amber-500/40 transition-all">
                                <item.icon className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
