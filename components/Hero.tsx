"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3C623] to-[#D4Af37]">
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
            {/* Background Video */}
            <div className="absolute inset-0 -z-20">
                <video
                    id="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                >
                    <source src="/herovideo.mp4" type="video/mp4" />
                </video>
                {/* Deep Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
            </div>

            {/* Ambient Spiritual Glow (The "Divine Light") */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFC857]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow mix-blend-screen" />

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFC857]/60 rounded-full blur-[1px] animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-[#F4A300]/40 rounded-full blur-[2px] animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-amber-200/50 rounded-full blur-[1px] animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Main Content Card - Premium Glassmorphism */}
            <div className={`mx-auto max-w-5xl text-center relative z-10 p-8 sm:p-14 rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_0_60px_rgba(0,0,0,0.5)] ${isTamil ? "mt-32 sm:mt-24" : "mt-16 sm:mt-0"} group transition-all duration-500 hover:shadow-[0_0_80px_rgba(255,200,87,0.1)] hover:border-[#FFC857]/30`}>

                {/* Noise Texture Overlay for Card */}
                <div className="absolute inset-0 rounded-[2.5rem] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                {/* Badge - ENGLISH ONLY */}
                {!isTamil && (
                    <div className="flex justify-center mb-8 mt-4 animate-fade-in">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#F4A300]/10 px-5 py-2 text-xs font-bold text-[#FFC857] ring-1 ring-inset ring-[#FFC857]/40 uppercase tracking-widest shadow-[0_0_20px_rgba(255,200,87,0.15)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC857] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC857]"></span>
                            </span>
                            {t.hero.subtitle.split("—")[0].trim()}
                        </span>
                    </div>
                )}

                {/* Main Headline */}
                <h1 className={`${isTamil ? "text-3xl sm:text-5xl md:text-6xl leading-tight" : "text-5xl sm:text-7xl md:text-8xl"} font-extrabold tracking-tight text-white drop-shadow-2xl animate-fade-in text-balance`}>
                    {renderTitle()}
                </h1>

                {/* Tamil Subtitle */}
                {isTamil && (
                    <div className="mt-8 mb-6 animate-fade-in delay-200">
                        <p className="text-xl sm:text-2xl font-bold text-gray-100 drop-shadow-lg leading-relaxed border-l-4 border-[#FFC857] pl-6 text-left inline-block max-w-3xl bg-black/20 pr-4 py-2 rounded-r-lg">
                            {t.hero.subtitle}
                        </p>
                    </div>
                )}

                {/* Description Text */}
                <p className={`mt-8 ${isTamil ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"} text-gray-200 animate-fade-in delay-300 drop-shadow-md font-light leading-relaxed max-w-3xl mx-auto text-balance`}>
                    {t.hero.description}
                </p>

                {/* English Affirmation/Quote */}
                {!isTamil && (
                    <p className="mt-8 text-sm font-semibold text-[#FFC857] uppercase tracking-[0.2em] opacity-90 animate-fade-in delay-500">
                        {t.hero.subtitle.split("—")[1]?.trim() || "You are here for a reason"}
                    </p>
                )}

                {/* CTA Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in delay-500">

                    {/* Primary Button */}
                    <Link
                        href="videos"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-brand-gradient px-10 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(244,163,0,0.6)] focus:outline-none focus:ring-2 focus:ring-[#FFC857] focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine" />
                        <span className="relative flex items-center gap-3">
                            {t.hero.cta}
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </span>
                    </Link>

                    {/* Secondary Button / Video Thumbnail */}
                    <a href="#intro-video" className="relative group cursor-pointer w-full sm:w-auto overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                        <div className="relative flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-6 py-4 hover:bg-black/40 transition-all w-full sm:w-auto justify-center sm:justify-start">
                            <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#FFC857] text-black shadow-[0_0_15px_rgba(255,200,87,0.5)] shrink-0">
                                <span className="absolute inset-0 rounded-full bg-[#FFC857] animate-ping opacity-50"></span>
                                <svg className="w-4 h-4 relative z-10 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </span>
                            <span className="text-sm font-semibold text-gray-100 group-hover:text-white transition-colors text-left leading-tight max-w-[200px]">
                                {t.hero.myJourney}
                            </span>
                        </div>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block opacity-60">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1.5 h-1.5 bg-[#FFC857] rounded-full animate-float"></div>
                </div>
            </div>
        </div>
    );
}
