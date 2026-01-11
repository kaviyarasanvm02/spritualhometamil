"use client";

import { Check, Sparkles, CreditCard, ShieldCheck } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function PricingCard() {
    const { t } = useLanguage();

    return (
        <section id="pricing" className="relative py-24 sm:py-32 bg-gray-900 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-6 animate-fade-in">
                        <Sparkles className="w-4 h-4" />
                        <span className="uppercase tracking-wider">Premium Access</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-4">{t.pricing.title}</h2>
                    <p className="text-lg leading-8 text-gray-300">
                        {t.pricing.subtitle}
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-white/10 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none bg-gray-800/50 backdrop-blur-xl shadow-2xl overflow-hidden">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-white">{t.pricing.lifetimeTitle}</h3>
                        <p className="mt-6 text-base leading-7 text-gray-300">
                            {t.pricing.lifetimeDesc}
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-amber-400 uppercase tracking-wider">{t.pricing.whatsIncluded}</h4>
                            <div className="h-px flex-auto bg-gray-700" />
                        </div>
                        <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6">
                            {t.pricing.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3 items-start">
                                    <Check className="h-6 w-5 flex-none text-amber-500" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="h-full rounded-2xl bg-gradient-to-br from-gray-900 to-black py-10 text-center ring-1 ring-inset ring-white/10 lg:flex lg:flex-col lg:justify-center lg:py-16 relative overflow-hidden group">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors duration-500"></div>

                            <div className="mx-auto max-w-xs px-8 relative z-10">
                                <p className="text-base font-semibold text-gray-400 uppercase tracking-widest">{t.pricing.payOnce}</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-white">₹499</span>
                                    <span className="text-sm font-semibold leading-6 text-gray-400">{t.pricing.startingFrom}</span>
                                </p>
                                <a
                                    href="#courses"
                                    className="mt-10 flex items-center justify-center w-full gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-4 text-center text-sm font-bold text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300"
                                >
                                    <CreditCard className="w-4 h-4" />
                                    {t.pricing.browse}
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-500 flex items-center justify-center gap-1.5">
                                    <ShieldCheck className="w-3 h-3" />
                                    {t.pricing.invoice}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
