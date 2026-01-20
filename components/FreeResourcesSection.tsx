"use client";

import { useLanguage } from "./LanguageProvider";
import { Download, BookOpen, Sparkles, Star } from "lucide-react";

export default function FreeResourcesSection() {
    const { t } = useLanguage();

    return (
        <div className="relative bg-gray-50 dark:bg-gray-900 py-24 sm:py-32 overflow-hidden transition-colors duration-300">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-6 animate-fade-in">
                            <Sparkles className="w-4 h-4" />
                            <span>{t.freeResources.title}</span>
                        </div>

                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6 leading-tight drop-shadow-xl">
                            {t.freeResources.subtitle}
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Start your journey with our exclusive guidance material. Designed to help you unlock the power of your mind and soul.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="/FREE E BOOK ENGLISH TAMIL.pdf" download className="group flex items-center justify-center gap-3 bg-brand-gradient text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-[#D4Af37]/20 hover:shadow-[#D4Af37]/40 hover:scale-[1.02] transition-all duration-300">
                                <Download className="h-5 w-5 group-hover:animate-bounce" />
                                <span>{t.freeResources.downloadTamil}</span>
                            </a>
                            <a href="/FREE E BOOK ENGLISH OK.pdf" download className="group flex items-center justify-center gap-3 bg-white dark:bg-white/10 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/20 hover:border-[#D4Af37] dark:hover:border-white/30 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md">
                                <Download className="h-5 w-5 text-[#D4Af37] dark:text-white" />
                                <span>{t.freeResources.downloadEnglish}</span>
                            </a>
                        </div>

                        <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400">
                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                            <span>10,000+ Downloads</span>
                        </div>
                    </div>

                    {/* Right Visual (Glass Card) */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                        <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-square max-h-[500px] w-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-950 rounded-3xl border border-white/10 dark:border-gray-800 shadow-2xl overflow-hidden group hover:border-amber-500/50 transition-colors duration-500">
                            {/* Decorative inner elements */}
                            <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-20 mix-blend-overlay"></div>
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/20 rounded-full blur-[60px] group-hover:bg-amber-500/30 transition-colors duration-500"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                <div className="w-24 h-24 bg-gradient-to-tr from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                    <BookOpen className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {t.freeResources.ebookTitle}
                                </h3>
                                <div className="h-1 w-20 bg-amber-500 rounded-full mb-6"></div>
                                <p className="text-gray-300 text-sm">
                                    A comprehensive 21-day guide to mastering the Law of Attraction.
                                </p>
                            </div>

                            {/* Glass overlay at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
