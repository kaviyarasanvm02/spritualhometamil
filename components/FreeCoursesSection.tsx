"use client";

import { useLanguage } from "./LanguageProvider";
import { PlayCircle, Sparkles, ArrowRight, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FreeCoursesSection() {
    const { t } = useLanguage();

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32 relative overflow-hidden transition-colors duration-300">
            {/* Decorative background blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#F3C623]/20 dark:bg-[#D4Af37]/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3C623]/10 dark:bg-[#F3C623]/10 text-[#D4Af37] dark:text-[#F3C623] text-sm font-semibold mb-4 border border-[#F3C623]/20 dark:border-[#996515]/30">
                        <Sparkles className="w-4 h-4" />
                        <span className="uppercase tracking-wider">{t.freeCourses.universeCall}</span>
                    </div>
                    <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                        {t.freeCourses.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Begin your transformation with our complimentary spiritual guides.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Course 1 */}
                    <Link
                        href="/courses/free-course-1"
                        className="group relative bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-[#D4Af37]/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src="/assets/miracle.png"
                                alt={t.freeCourses.course1.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/40 group-hover:scale-110 transition-transform">
                                    <PlayCircle className="text-white w-8 h-8 fill-white/20" />
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                                <Clock className="w-3 h-3" />
                                <span>3 Episodes</span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 flex flex-col flex-1">
                            <div className="flex-1">
                                <p className="text-xs font-bold text-[#D4Af37] dark:text-[#F3C623] uppercase tracking-wider mb-2">
                                    {t.freeCourses.basicLevel}
                                </p>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-[#996515] dark:group-hover:text-[#F3C623] transition-colors">
                                    {t.freeCourses.course1.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                                    Discover the secrets of the universe and how to align your life with nature's laws.
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="w-full flex items-center justify-center gap-2 bg-brand-gradient text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-[#D4Af37]/20 group-hover:shadow-[#D4Af37]/40 transition-all duration-300">
                                    <ArrowRight className="h-4 w-4" />
                                    {t.freeCourses.course1.cta}
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Course 2 */}
                    <Link
                        href="/courses/free-course-2"
                        className="group relative bg-white/60 dark:bg-black/20 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src="/assets/loa-program.png"
                                alt={t.freeCourses.course2.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/40 group-hover:scale-110 transition-transform">
                                    <PlayCircle className="text-white w-8 h-8 fill-white/20" />
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                                <Calendar className="w-3 h-3" />
                                <span>30 Days Guide</span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 flex flex-col flex-1">
                            <div className="flex-1">
                                <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
                                    Advanced Practice
                                </p>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                                    {t.freeCourses.course2.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                                    A complete 30-day step-by-step guide to mastering the Law of Attraction.
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                                    <ArrowRight className="h-4 w-4" />
                                    {t.freeCourses.course2.cta}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
