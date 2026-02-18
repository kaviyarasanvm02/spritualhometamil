"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { Play } from "lucide-react";
import Image from "next/image";

export default function VideoPreview() {
    const { t } = useLanguage();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <section id="intro-video" className="relative py-24 sm:py-32 bg-gray-900 overflow-hidden">
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

                <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 w-full aspect-video min-h-[300px] group cursor-pointer" onClick={!isPlaying ? handlePlay : undefined}>
                    {!isPlaying ? (
                        <>
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 pointer-events-none">
                                {/* Using standard img tag for debugging */}
                                <img
                                    src="/assets/hero-banner.png"
                                    alt="Video Preview"
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                            </div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-amber-600/90 rounded-full shadow-lg shadow-amber-600/30 group-hover:scale-110 transition-transform duration-300 z-20 pointer-events-auto backdrop-blur-sm border border-amber-400/30">
                                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-30 pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Overlay Text */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-left pointer-events-none">
                                <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-2">Introduction</p>
                                <h3 className="text-white font-bold text-xl md:text-2xl">{t.hero.myJourney}</h3>
                            </div>
                        </>
                    ) : (
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${t.videoPreview?.videoId || 'qIOlVtMtmQw'}?si=SzB9WQ5qB-O5kpV8&autoplay=1`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>
        </section>
    );
}
