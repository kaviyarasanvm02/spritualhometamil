"use client";

import { useLanguage } from "./LanguageProvider";
import { Play } from "lucide-react";

export default function VideoPreview() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 sm:py-32 bg-gray-900 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-600/20 rounded-full blur-[100px] opacity-30"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6 tracking-tight">
                    {t.videoPreview?.title || "Experience the Transformation"}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
                    {t.videoPreview?.subtitle || "Watch a glimpse of what awaits you inside Spiritual Home."}
                </p>

                {/* Video Placeholder / Container */}
                <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 aspect-video group cursor-pointer">
                    {/* Placeholder Image Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-[url('/assets/hero-banner.png')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:opacity-50 transition-opacity"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-amber-500 rounded-full shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300 z-20">
                            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current ml-1" />
                            {/* Pulse Effect */}
                            <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-75"></div>
                        </div>
                    </div>

                    {/* Overlay Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-left">
                        <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-2">Introduction</p>
                        <h3 className="text-white font-bold text-xl">{t.hero.myJourney}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
