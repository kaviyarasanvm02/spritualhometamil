'use client';

import Image from "next/image";
import { ArrowLeft, PlayCircle, MonitorPlay } from "lucide-react";
import { useRouter } from "next/navigation";
import { CourseContent } from "@/lib/courses.data";

interface CourseHeaderProps {
    title: string;
    type: 'free' | 'paid';
    thumbnail: string;
    displayContent: CourseContent;
}

export default function CourseHeader({ title, type, thumbnail, displayContent }: CourseHeaderProps) {
    const router = useRouter();

    return (
        <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <button
                    onClick={() => router.back()}
                    className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-500 mb-8 transition-colors"
                >
                    <div className="p-1 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    Back to Courses
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Media Section: Video or Image */}
                    <div className="relative aspect-video min-h-[300px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
                        {displayContent.introVideo ? (
                            <iframe
                                src={`${displayContent.introVideo}${displayContent.introVideo?.includes('?') ? '&' : '?'}rel=0&autoplay=0&modestbranding=1&controls=1`}
                                title={title}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        ) : (
                            <>
                                <Image
                                    src={thumbnail}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Play Overlay (Visual only, since no intro video) */}
                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/50">
                                        <PlayCircle className="w-8 h-8 text-white fill-white opacity-80" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-100 dark:border-indigo-800">
                            {type === 'free' ? 'Free Course' : 'Standard Program'}
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            {title}
                        </h1>
                        {displayContent.introTitle && (
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 flex items-center gap-2">
                                <MonitorPlay className="w-5 h-5 text-amber-500" />
                                {displayContent.introTitle}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
