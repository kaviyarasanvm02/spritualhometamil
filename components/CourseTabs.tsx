"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { Sparkles, ArrowRight, Play, Star, Clock } from "lucide-react";

type Video = {
    id: string;
    title: string;
    description: string | null;
    price: number;
    thumbnail: string | null;
    createdAt: Date;
    duration?: number;
};

export default function CourseTabs({ videos }: { videos: Video[] }) {
    const { t } = useLanguage();

    return (
        <section id="courses" className="relative py-24 sm:py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden transition-colors duration-300">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-amber-200/40 dark:bg-amber-900/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-indigo-200/40 dark:bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>Premium Masterclasses</span>
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6 font-display">
                        {t.paidCourses?.title || "Unlock Ancient Wisdom"}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Dive deep into exclusive spiritual practices and transformative knowledge.
                    </p>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {videos.length === 0 ? (
                        <div className="col-span-full flex flex-col items-center justify-center py-24 bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 text-center">
                            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                                <Sparkles className="w-6 h-6 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Coming Soon</h3>
                            <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto">We are crafting new premium content for you. Check back later.</p>
                        </div>
                    ) : (
                        videos.map((video) => (
                            <Link href={`/videos/${video.id}`} key={video.id} className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/60 dark:shadow-none hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2 ring-1 ring-gray-100 dark:ring-gray-800">
                                {/* Thumbnail Container */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    {video.thumbnail ? (
                                        <div className="relative h-full w-full">
                                            <img
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                src={video.thumbnail}
                                                alt={video.title}
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                        </div>
                                    ) : (
                                        <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center group-hover:bg-amber-50 dark:group-hover:bg-amber-900/10 transition-colors duration-500">
                                            <Play className="w-16 h-16 text-gray-300 dark:text-gray-600 group-hover:text-amber-400 transition-colors duration-500" />
                                        </div>
                                    )}

                                    {/* Floating Badges */}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="backdrop-blur-md bg-white/90 dark:bg-black/80 px-3 py-1 rounded-full text-xs font-bold text-gray-900 dark:text-white shadow-sm flex items-center gap-1">
                                            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                                            Premium
                                        </span>
                                    </div>

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/50 shadow-2xl">
                                            <Play className="w-6 h-6 fill-current ml-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="flex-1 p-8 flex flex-col relative">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 line-clamp-2 leading-tight">
                                            {video.title}
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 line-clamp-2 mb-6 text-sm leading-relaxed font-medium">
                                            {video.description || "Unlock the secrets of the universe with this exclusive spiritual masterclass."}
                                        </p>
                                    </div>

                                    {/* Footer Info */}
                                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800 mt-auto">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-0.5">Price</span>
                                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                                {video.price === 0 ? "Free" : `₹${video.price}`}
                                            </span>
                                        </div>

                                        <div className="h-10 w-10 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-amber-500/30">
                                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-500 transition-colors"
                    >
                        Looking for something else? Contact us
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
