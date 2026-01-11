"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { Sparkles, ArrowRight, Play, Clock, Star } from "lucide-react";

type Video = {
    id: string;
    title: string;
    description: string | null;
    price: number;
    thumbnail: string | null;
    createdAt: Date;
    duration?: number; // Optional duration if available in future
};

export default function CourseTabs({ videos }: { videos: Video[] }) {
    const { t } = useLanguage();

    return (
        <section id="courses" className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-6 border border-amber-200">
                        <Sparkles className="w-4 h-4" />
                        <span className="uppercase tracking-wider">Premium Content</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        {t.paidCourses?.title || "Paid Courses"}
                    </h2>
                    <p className="text-lg text-gray-600">
                        Unlock deep spiritual wisdom with our masterclasses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.length === 0 ? (
                        <div className="col-span-full text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                            <p className="text-gray-500 text-lg">No courses available at the moment.</p>
                        </div>
                    ) : (
                        videos.map((video) => (
                            <Link href={`/videos/${video.id}`} key={video.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                                {/* Thumbnail Section */}
                                <div className="relative aspect-video overflow-hidden bg-gray-200">
                                    {video.thumbnail ? (
                                        <div className="relative h-full w-full">
                                            <img
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                src={video.thumbnail}
                                                alt={video.title}
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center h-full w-full bg-amber-50 group-hover:bg-amber-100 transition-colors">
                                            <Play className="w-12 h-12 text-amber-300 group-hover:text-amber-500 transition-colors" />
                                        </div>
                                    )}

                                    {/* Price Badge */}
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-gray-900 shadow-sm ring-1 ring-gray-900/5">
                                        ₹{video.price}
                                    </div>

                                    {/* Overlay Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                                        <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50">
                                            <ArrowRight className="w-6 h-6 -rotate-45" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-8 flex flex-col">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2 leading-tight">
                                            {video.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 line-clamp-2 mb-6 leading-relaxed">
                                            {video.description || "Unlock the secrets of the universe with this exclusive course."}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                                            <Star className="w-3 h-3 fill-current" />
                                            <span>Premium</span>
                                        </div>
                                        <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                                            {t.paidCourses?.viewDetails || "View Details"}
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
