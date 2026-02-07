"use client";

import { useLanguage } from "./LanguageProvider";
import { Download, BookOpen, Sparkles, Star, ChevronRight } from "lucide-react";

export default function FreeResourcesSection() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            {/* Deep, Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500" />

            {/* Decorative Mesh/Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-400/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-semibold tracking-wide uppercase animate-fade-in shadow-sm">
                            <Sparkles className="w-4 h-4" />
                            <span>{t.freeResources.title}</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 leading-[1.15] drop-shadow-sm">
                            {t.freeResources.subtitle}
                        </h2>

                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                            Unlock the secrets of the universe with our exclusive guides. These resources are crafted to help you manifest abundance, clarity, and spiritual awakening.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                            {/* Tamil Button */}
                            <a
                                href="/ebook-ta.pdf"
                                download
                                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <Download className="h-5 w-5 group-hover:animate-bounce relative z-10" />
                                <span className="relative z-10">{t.freeResources.downloadTamil}</span>
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 relative z-10" />
                            </a>

                            {/* English Button */}
                            <a
                                href="/ebook-en.pdf"
                                download
                                className="group flex items-center justify-center gap-3 bg-white dark:bg-white/5 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-amber-500/50 dark:hover:border-amber-400/50 backdrop-blur-md transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
                            >
                                <Download className="h-5 w-5 text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform" />
                                <span>{t.freeResources.downloadEnglish}</span>
                            </a>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-3 text-sm font-medium text-gray-500 dark:text-gray-400 pt-2">
                            <div className="flex -space-x-2">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[10px] overflow-hidden">
                                        <span className="opacity-50">User</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                <span>10,000+ Users Downloaded</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual (3D Ebook Covers) */}
                    <div className="relative w-full flex flex-col sm:flex-row gap-10 items-center justify-center lg:justify-end perspective-1000">
                        {/* Tamil Ebook */}
                        <a href="/ebook-ta.pdf" download className="group relative w-56 sm:w-64 aspect-[1/1.45] transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer z-20">
                            {/* Glow/Shadow */}
                            <div className="absolute -inset-4 bg-amber-500/20 blur-2xl group-hover:bg-amber-500/30 transition-colors duration-500 rounded-[2rem] opacity-0 group-hover:opacity-100"></div>

                            {/* Book Spine Effect */}
                            <div className="absolute left-0 top-1 bottom-1 w-2 bg-white/20 rounded-l-lg z-20 mix-blend-overlay"></div>

                            <img
                                src="/assets/ebook-cover-ta.jpg"
                                alt="Tamil Ebook Cover"
                                className="relative rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 w-full h-full object-cover transform transition-transform duration-500 group-hover:rotate-y-6"
                            />

                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 rounded-xl backdrop-blur-[2px]">
                                <div className="bg-white/90 dark:bg-black/80 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <Download className="w-4 h-4" /> Download PDF
                                </div>
                            </div>
                        </a>

                        {/* English Ebook - Slightly behind or offset */}
                        <a href="/ebook-en.pdf" download className="group relative w-56 sm:w-64 aspect-[1/1.45] sm:-ml-12 lg:-ml-16 sm:mt-12 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer z-10 hover:z-30">
                            <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl group-hover:bg-indigo-500/30 transition-colors duration-500 rounded-[2rem] opacity-0 group-hover:opacity-100"></div>

                            <div className="absolute left-0 top-1 bottom-1 w-2 bg-white/20 rounded-l-lg z-20 mix-blend-overlay"></div>

                            <img
                                src="/assets/ebook-cover-en.jpg"
                                alt="English Ebook Cover"
                                className="relative rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 w-full h-full object-cover transform transition-transform duration-500 group-hover:rotate-y-[-6deg]"
                            />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 rounded-xl backdrop-blur-[2px]">
                                <div className="bg-white/90 dark:bg-black/80 text-gray-900 dark:text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <Download className="w-4 h-4" /> Download PDF
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
