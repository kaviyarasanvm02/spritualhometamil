'use client';

import { useState } from "react";
import { Episode } from "@/lib/courses.data";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CourseCurriculumProps {
    episodes: Episode[];
}

export default function CourseCurriculum({ episodes }: CourseCurriculumProps) {
    const [expandedEpisode, setExpandedEpisode] = useState<number | null>(null);

    const toggleEpisode = (idx: number) => {
        setExpandedEpisode(expandedEpisode === idx ? null : idx);
    };

    return (
        <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-amber-500 rounded-full" />
                Curriculum
            </h3>
            <div className="space-y-4">
                {episodes.map((ep, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-md">
                        <button
                            onClick={() => toggleEpisode(idx)}
                            className="w-full flex items-center gap-4 p-4 text-left focus:outline-none"
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-colors ${expandedEpisode === idx
                                ? "bg-amber-500 text-white"
                                : "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500"
                                }`}>
                                {idx + 1}
                            </div>
                            <div className="flex-1">
                                <h4 className={`font-medium transition-colors ${expandedEpisode === idx
                                    ? "text-amber-600 dark:text-amber-400"
                                    : "text-gray-900 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-400"
                                    }`}>
                                    {ep.title}
                                </h4>
                                {ep.duration && (
                                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{ep.duration}</p>
                                )}
                            </div>
                            <div className="text-gray-400 dark:text-gray-600">
                                {expandedEpisode === idx ? (
                                    <ChevronUp className="w-5 h-5" />
                                ) : (
                                    <ChevronDown className="w-5 h-5" />
                                )}
                            </div>
                        </button>

                        {/* Accordion Content */}
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedEpisode === idx ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-800">
                                {ep.videoUrl && (
                                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black mb-4 mt-4 shadow-sm">
                                        <iframe
                                            src={ep.videoUrl}
                                            title={ep.title}
                                            className="absolute inset-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                )}
                                {ep.description && (
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {ep.description}
                                    </p>
                                )}
                                {!ep.videoUrl && !ep.description && (
                                    <p className="text-gray-500 dark:text-gray-500 text-sm italic py-2">
                                        Content coming soon...
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
