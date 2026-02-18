"use client";

import { useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { courses } from "@/lib/courses.data";

export default function PaidCoursesSection() {
    const { language } = useLanguage();

    // Filter only paid courses
    // Standard vs Premium Separation
    const standardCourses = courses.filter(c => c.type === 'paid' && c.category === 'standard');
    const premiumCourses = courses.filter(c => c.type === 'paid' && c.category === 'premium');

    const standardRef = useRef<HTMLDivElement>(null);
    const premiumRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            const container = ref.current;
            const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of view width
            const targetScroll = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-white dark:bg-gray-950 py-24 sm:py-32 transition-colors duration-300 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* STANDARD LEVEL PROGRAMS */}
                <div id="standard-courses" className="mb-24 scroll-mt-28">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 border border-blue-100 dark:border-blue-800">
                            <Sparkles className="w-4 h-4" />
                            <span className="uppercase tracking-wider">Structured Guidance</span>
                        </div>
                        <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
                            Standard Level Programs
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Apply the Law of Attraction correctly with step-by-step guidance.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Navigation Buttons Standard */}
                        <button
                            onClick={() => scroll('left', standardRef)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full bg-white dark:bg-black/80 border border-gray-200 dark:border-white/10 shadow-xl text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={() => scroll('right', standardRef)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full bg-white dark:bg-black/80 border border-gray-200 dark:border-white/10 shadow-xl text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition-all duration-300 hidden md:flex"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div
                            ref={standardRef}
                            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {standardCourses.map((course) => (
                                <div
                                    key={course.slug}
                                    className="flex-none w-[85vw] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-center"
                                >
                                    <CourseCard course={course} language={language} theme="blue" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PREMIUM MASTERCLASS PROGRAMS */}
                <div id="premium-courses" className="scroll-mt-28">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3C623]/10 dark:bg-[#F3C623]/10 text-[#D4Af37] dark:text-[#F3C623] text-sm font-semibold mb-4 border border-[#F3C623]/20 dark:border-[#996515]/30">
                            <Star className="w-4 h-4 fill-[#D4Af37] dark:fill-[#F3C623]" />
                            <span className="uppercase tracking-wider">Deep Transformation</span>
                        </div>
                        <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
                            Premium Masterclass Programs
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            For those who feel a strong inner call for deep conscious change.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Navigation Buttons Premium */}
                        <button
                            onClick={() => scroll('left', premiumRef)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full bg-white dark:bg-black/80 border border-gray-200 dark:border-white/10 shadow-xl text-gray-800 dark:text-white hover:bg-[#F3C623] dark:hover:bg-[#F3C623] hover:text-white transition-all duration-300 hidden md:flex"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={() => scroll('right', premiumRef)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full bg-white dark:bg-black/80 border border-gray-200 dark:border-white/10 shadow-xl text-gray-800 dark:text-white hover:bg-[#F3C623] dark:hover:bg-[#F3C623] hover:text-white transition-all duration-300 hidden md:flex"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div
                            ref={premiumRef}
                            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {premiumCourses.map((course) => (
                                <div
                                    key={course.slug}
                                    className="flex-none w-[85vw] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-center"
                                >
                                    <CourseCard course={course} language={language} theme="gold" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CourseCard({ course, language, theme }: { course: any, language: any, theme: 'blue' | 'gold' }) {
    const isGold = theme === 'gold';
    const borderColor = isGold ? 'border-[#D4Af37]/20 group-hover:border-[#F3C623]/60' : 'border-blue-100 dark:border-blue-800 group-hover:border-blue-300 dark:group-hover:border-blue-600';
    const shadowColor = isGold ? 'group-hover:shadow-[#D4Af37]/20' : 'group-hover:shadow-blue-500/20';
    const buttonTextColor = isGold ? 'text-[#D4Af37] group-hover:text-[#F3C623]' : 'text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300';
    const buttonBgColor = isGold ? 'bg-[#D4Af37]/10 group-hover:bg-[#F3C623]/20' : 'bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50';

    return (
        <Link
            href={`/courses/${course.slug}`}
            className={`group flex flex-col h-full relative bg-white/80 dark:bg-slate-900/40 backdrop-blur-2xl rounded-3xl overflow-hidden border ${borderColor} shadow-lg hover:shadow-2xl ${shadowColor} hover:-translate-y-2 transition-all duration-500`}
        >
            {/* Shine Effect on Hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr ${isGold ? 'from-[#F3C623]/10' : 'from-blue-400/10'} via-transparent to-transparent pointer-events-none`} />

            <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
                <Image
                    src={course.thumbnail}
                    alt={language === 'ta' ? course.title.ta : course.title.en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-serif font-bold text-white drop-shadow-lg leading-tight mb-2">
                        {language === 'ta' ? course.title.ta : course.title.en}
                    </h3>
                    <div className={`h-1 w-12 ${isGold ? 'bg-[#F3C623]' : 'bg-blue-500'} rounded-full group-hover:w-20 transition-all duration-500`} />
                </div>
            </div>

            <div className="p-8 flex-1 flex flex-col relative z-10">
                <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3 leading-relaxed flex-1">
                    {course.content?.[language]?.description ||
                        (language === 'ta' ? 'விரிவான வழிகாட்டுதல் மற்றும் பயிற்சிகள்.' : 'Detailed guidance, visualizations and affirmations.')}
                </p>

                <div className={`w-full flex items-center justify-between ${buttonTextColor} font-bold tracking-wide uppercase text-sm transition-colors`}>
                    <span>{language === 'ta' ? 'விவரங்களை காண்க' : 'View Details'}</span>
                    <div className={`w-10 h-10 rounded-full ${buttonBgColor} flex items-center justify-center transition-colors`}>
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
