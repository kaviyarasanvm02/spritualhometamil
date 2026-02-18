'use client';

import { Course } from "@/lib/courses.data";
import { content as globalContent } from "@/lib/content";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { Video } from "@/types";
import CourseHeader from "@/components/courses/CourseHeader";
import CoursePricing from "@/components/courses/CoursePricing";
import CourseCurriculum from "@/components/courses/CourseCurriculum";

interface CourseClientProps {
    course: Course;
}

export default function CourseClient({ course }: CourseClientProps) {
    const router = useRouter();
    const { language } = useLanguage();
    const t = language === 'ta' ? globalContent.ta : globalContent.en;

    const [matchingVideoId, setMatchingVideoId] = useState<string | null>(null);
    const [isLoadingVideo, setIsLoadingVideo] = useState(false);


    useEffect(() => {
        if (course?.type === 'paid') {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setIsLoadingVideo(true);
            const searchTitle = course.dbTitleMatch || course.title.en;

            fetch(`/api/videos?title=${encodeURIComponent(searchTitle)}`)
                .then(res => res.json())
                .then((data: { videos: Video[] }) => {
                    // With the specific search, the first result should be the best match
                    const match = data.videos && data.videos.length > 0 ? data.videos[0] : null;
                    if (match) {
                        setMatchingVideoId(match.id);
                    }
                })
                .catch(err => console.error("Failed to fetch videos:", err))
                .finally(() => setIsLoadingVideo(false));
        }
    }, [course]);



    const content = language === 'ta' ? course.content.ta : course.content.en;
    // Fallback to English if Tamil content is empty
    const displayContent = content.episodes.length > 0 ? content : course.content.en;
    const title = language === 'ta' ? course.title.ta : course.title.en;

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-20 transition-colors duration-300">
            <CourseHeader
                title={title}
                type={course.type}
                thumbnail={course.thumbnail}
                displayContent={displayContent}
            />

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">

                {/* Pricing Section - Only for Paid & if Pricing exists */}
                {course.type === 'paid' && course.pricing && (
                    <CoursePricing
                        pricing={course.pricing}
                        matchingVideoId={matchingVideoId}
                        isLoadingVideo={isLoadingVideo}
                    />
                )}

                <div className="my-12"></div>

                <CourseCurriculum episodes={displayContent.episodes} />

                <div className="w-full h-px bg-gray-200 dark:bg-gray-800 my-12" />

                {/* Long Text Content */}
                {displayContent.sections?.map((section, idx) => (
                    <div key={idx} className="mb-12 last:mb-0">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{section.title}</h3>
                        <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4 leading-relaxed bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-8">
                            {section.content.map((para, pIdx) => (
                                <p key={pIdx} className={para.startsWith('•') || para.startsWith('1.') ? 'font-medium text-gray-800 dark:text-gray-200 pl-4 border-l-2 border-amber-200 dark:border-amber-800' : ''}>
                                    {para.split('**').map((part, i) =>
                                        i % 2 === 1 ? <span key={i} className="font-bold text-indigo-900 dark:text-indigo-400 block mt-4 mb-2">{part}</span> : part
                                    )}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Footer CTA */}
                {course.type === 'free' && (
                    <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-indigo-900 to-indigo-800 text-white text-center shadow-xl relative overflow-hidden">
                        <Sparkles className="absolute top-4 right-4 w-12 h-12 text-white/10" />
                        <h3 className="text-2xl font-bold mb-4">
                            {language === 'ta' ? 'அடுத்த கட்டத்திற்கு தயாராக இருக்கிறீர்களா?' : 'Ready for the Next Step?'}
                        </h3>
                        <p className="text-indigo-200 mb-8 max-w-xl mx-auto">
                            {language === 'ta'
                                ? 'உங்கள் உள்ளுணர்வை நீங்கள் உணர்ந்தால், எங்கள் கட்டமைக்கப்பட்ட கட்டணப் பயிற்சிகள் உங்களுக்கு உதவ காத்திருக்கின்றன.'
                                : 'If you feel the inner pull, our structure paid programs are designed to help you maintain consistency and deepen your results.'}
                        </p>
                        <button onClick={() => router.push('/videos')} className="px-8 py-3 bg-white text-indigo-900 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                            {language === 'ta' ? 'கட்டணப் பயிற்சி விவரங்கள்' : 'Explore Paid Courses'}
                        </button>
                    </div>
                )}

            </div>
        </main>
    );
}
