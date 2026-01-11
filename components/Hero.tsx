"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
    const { t, language } = useLanguage();

    const isTamil = language === 'ta';

    // Helper to format title based on language
    const renderTitle = () => {
        if (language === 'en') {
            const title = t.hero.title;
            if (title.includes("Spiritual Home Tamil")) {
                const parts = title.split("Spiritual Home Tamil");
                return (
                    <>
                        {parts[0]} <br className="hidden sm:block" />
                        <span className="text-amber-400 inline-block drop-shadow-sm">Spiritual Home Tamil{parts[1]}</span>
                    </>
                );
            }
            return title;
        } else {
            const parts = t.hero.title.split('!');
            if (parts.length > 1) {
                return (
                    <>
                        <span className="text-white opacity-95">{parts[0]}!</span>
                        <br />
                        <span className="text-amber-400 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-100">
                            {parts.slice(1).join('!')}
                        </span>
                    </>
                )
            }
            return t.hero.title;
        }
    };

    return (
        <div className="relative isolate px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center items-center">
            {/* Background Image with modern parallax feel */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/assets/hero-banner.png"
                    alt="Spiritual Home Background"
                    fill
                    className="object-cover object-center scale-105"
                    priority
                />
                {/* Gradient Overlay for depth and text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
            </div>

            {/* Content Container */}
            <div className={`mx-auto max-w-5xl text-center relative z-10 p-6 sm:p-12 rounded-3xl border border-amber-500/20 bg-black/20 backdrop-blur-sm shadow-2xl ${isTamil ? "mt-32 sm:mt-24" : "mt-16 sm:mt-0"}`}>

                {/* Badge / Tagline - ENGLISH ONLY (Top Position) */}
                {!isTamil && (
                    <div className="flex justify-center mb-6 mt-8">
                        <span className="inline-flex items-center rounded-full bg-amber-500/20 px-4 py-1.5 text-xs font-medium text-amber-200 ring-1 ring-inset ring-amber-500/30 backdrop-blur-md uppercase tracking-wide">
                            ✨ {t.hero.subtitle.split("—")[0].trim()}
                        </span>
                    </div>
                )}

                <h1 className={`${isTamil ? "text-2xl sm:text-4xl md:text-5xl" : "text-4xl sm:text-6xl md:text-7xl"} font-extrabold tracking-tight text-white drop-shadow-xl animate-fade-in leading-tight`}>
                    {renderTitle()}
                </h1>

                {/* Tagline - TAMIL ONLY (Below Title) - Explicitly White and No Animation to Fix Visibility */}
                {isTamil && (
                    <div className="mt-8 mb-4">
                        <p className="text-lg sm:text-xl font-bold text-white drop-shadow-lg leading-relaxed">
                            {t.hero.subtitle}
                        </p>
                    </div>
                )}

                <p className={`mt-6 ${isTamil ? "text-base sm:text-lg" : "text-lg sm:text-xl"} text-gray-200 animate-fade-in delay-100 drop-shadow-md font-light leading-relaxed max-w-3xl mx-auto text-balance`}>
                    {t.hero.description}
                </p>

                {/* Subtitle / Quote - ENGLISH ONLY (Bottom Position) */}
                {!isTamil && (
                    <p className="mt-4 text-sm font-medium text-amber-300 uppercase tracking-widest opacity-80">
                        {t.hero.subtitle.split("—")[1]?.trim() || "You are here for a reason"}
                    </p>
                )}

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col items-center justify-center gap-6 animate-fade-in delay-200">
                    <Link
                        href="#courses"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-amber-500 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-amber-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto"
                    >
                        <span className="absolute right-0 translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 mr-4">→</span>
                        <span className="transition-all duration-300 group-hover:-translate-x-2">{t.hero.cta}</span>
                    </Link>

                    {/* Video Thumbnail Button */}
                    <div className="relative group cursor-pointer w-full sm:w-auto">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <div className="relative flex items-center gap-3 bg-gray-900 rounded-lg px-6 py-3.5 leading-none shadow-lg ring-1 ring-gray-900/5 hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center sm:justify-start">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </span>
                            <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors text-left line-clamp-2 max-w-[200px] sm:max-w-none">
                                {t.hero.myJourney}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
                <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
}
