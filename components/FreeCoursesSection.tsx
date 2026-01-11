"use client";

import { useLanguage } from "./LanguageProvider";
import { ChevronDown, ChevronUp, PlayCircle, Lock, Sparkles, BookOpen } from "lucide-react";
import { useState } from "react";

export default function FreeCoursesSection() {
    const { t } = useLanguage();
    const [openCourse, setOpenCourse] = useState<number | null>(null);

    const toggleCourse = (id: number) => {
        setOpenCourse(openCourse === id ? null : id);
    };

    return (
        <section className="bg-gray-50 py-24 sm:py-32 relative overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-600 text-sm font-semibold mb-4 border border-amber-200">
                        <Sparkles className="w-4 h-4" />
                        <span className="uppercase tracking-wider">{t.freeCourses.universeCall}</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                        {t.freeCourses.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        Begin your transformation with our complimentary spiritual guides.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Course 1 */}
                    <div className={`group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ${openCourse === 1 ? 'ring-2 ring-amber-400 shadow-xl' : 'hover:shadow-xl hover:-translate-y-1'}`}>
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BookOpen className="w-24 h-24 text-amber-500" />
                        </div>

                        <button
                            onClick={() => toggleCourse(1)}
                            className="w-full text-left p-8 relative z-10 focus:outline-none"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="inline-block p-3 rounded-2xl bg-amber-50 text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <PlayCircle className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-relaxed bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                                        {t.freeCourses.course1.title}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                        {t.freeCourses.basicLevel}
                                    </p>
                                </div>
                                <div className={`p-2 rounded-full transition-colors duration-300 ${openCourse === 1 ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-400 group-hover:bg-amber-50 group-hover:text-amber-500'}`}>
                                    {openCourse === 1 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                </div>
                            </div>
                        </button>

                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openCourse === 1 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-8 pt-0 border-t border-gray-50">
                                <div className="my-6 p-4 bg-amber-50/50 border border-amber-100 rounded-xl text-amber-800 text-sm font-medium flex gap-3 items-center">
                                    <span className="text-xl">ℹ️</span>
                                    {t.freeCourses.course1.thumbnailText}
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {t.freeCourses.course1.episodes.map((ep, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700 p-3 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors">
                                            <div className="h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                                            <span className="font-medium text-sm">{ep}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300">
                                    <Lock className="h-4 w-4" />
                                    {t.freeCourses.course1.cta}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Course 2 */}
                    <div className={`group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ${openCourse === 2 ? 'ring-2 ring-purple-400 shadow-xl' : 'hover:shadow-xl hover:-translate-y-1'}`}>
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Sparkles className="w-24 h-24 text-purple-500" />
                        </div>

                        <button
                            onClick={() => toggleCourse(2)}
                            className="w-full text-left p-8 relative z-10 focus:outline-none"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="inline-block p-3 rounded-2xl bg-purple-50 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <PlayCircle className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-relaxed bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                                        {t.freeCourses.course2.title}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                        30 Days Guide
                                    </p>
                                </div>
                                <div className={`p-2 rounded-full transition-colors duration-300 ${openCourse === 2 ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-400 group-hover:bg-purple-50 group-hover:text-purple-500'}`}>
                                    {openCourse === 2 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                </div>
                            </div>
                        </button>

                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openCourse === 2 ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-8 pt-0 border-t border-gray-50">
                                <div className="my-6 p-4 bg-purple-50/50 border border-purple-100 rounded-xl text-purple-800 text-sm font-medium flex gap-3 items-center">
                                    <span className="text-xl">ℹ️</span>
                                    {t.freeCourses.course2.thumbnailText}
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {t.freeCourses.course2.episodes.map((ep, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
                                            <div className="h-2 w-2 rounded-full bg-purple-400 shrink-0" />
                                            <span className="font-medium text-sm">{ep}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-300">
                                    <Lock className="h-4 w-4" />
                                    {t.freeCourses.course2.cta}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
