"use client";

import { courses, PricingOption } from "@/lib/courses.data";
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, PlayCircle, MonitorPlay, Sparkles, ChevronDown, ChevronUp, CheckCircle, AlertCircle } from "lucide-react";
import BuyButton from "@/components/BuyButton";

interface Video {
    id: string;
    title: string;
    price: number;
}

export default function CoursePage() {
    const params = useParams();
    const router = useRouter();
    const { language } = useLanguage();

    const [expandedEpisode, setExpandedEpisode] = useState<number | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<PricingOption | null>(null);
    const [matchingVideoId, setMatchingVideoId] = useState<string | null>(null);
    const [isLoadingVideo, setIsLoadingVideo] = useState(false);

    const slug = params.slug as string;
    const course = courses.find((c) => c.slug === slug);

    useEffect(() => {
        if (course?.type === 'paid') {
            setIsLoadingVideo(true);
            fetch('/api/videos')
                .then(res => res.json())
                .then((data: { videos: Video[] }) => {
                    const match = data.videos?.find((v) =>
                        v.title.toLowerCase().trim() === course.title.en.toLowerCase().trim() ||
                        v.title.toLowerCase().includes(course.title.en.toLowerCase()) // Fallback: partial match
                    );
                    if (match) {
                        setMatchingVideoId(match.id);
                    }
                })
                .catch(err => console.error("Failed to fetch videos:", err))
                .finally(() => setIsLoadingVideo(false));
        }
    }, [course]);

    // Set default plan
    useEffect(() => {
        if (course?.pricing && course.pricing.length > 0 && !selectedPlan) {
            // Default to 1 Year (usually most popular) or the first one
            const defaultPlan = course.pricing.find(p => p.label === 'Most Popular' || p.label === 'Best Value') || course.pricing[0];
            setSelectedPlan(defaultPlan);
        }
    }, [course, selectedPlan]);


    const toggleEpisode = (idx: number) => {
        setExpandedEpisode(expandedEpisode === idx ? null : idx);
    };

    if (!course) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
                <button
                    onClick={() => router.back()}
                    className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" /> Go Back
                </button>
            </div>
        );
    }

    const content = language === 'ta' ? course.content.ta : course.content.en;
    // Fallback to English if Tamil content is empty
    const displayContent = content.episodes.length > 0 ? content : course.content.en;
    const title = language === 'ta' ? course.title.ta : course.title.en;

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-20 transition-colors duration-300">
            {/* Header Section */}
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
                        {displayContent.introVideo ? (
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 bg-black">
                                <iframe
                                    src={displayContent.introVideo}
                                    title={title}
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                                <Image
                                    src={course.thumbnail}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/50">
                                        <PlayCircle className="w-8 h-8 text-white fill-white" />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-100 dark:border-indigo-800">
                                {course.type === 'free' ? 'Free Course' : 'Standard Program'}
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

                            {course.type === 'paid' && course.pricing && (
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Choose Access Plan</h3>

                                    <div className="space-y-3 mb-6">
                                        {course.pricing.map((plan, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedPlan(plan)}
                                                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${selectedPlan === plan
                                                    ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20'
                                                    : 'border-gray-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-amber-800'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === plan ? 'border-amber-500' : 'border-gray-300 dark:border-gray-500'
                                                        }`}>
                                                        {selectedPlan === plan && <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />}
                                                    </div>
                                                    <span className={`font-medium ${selectedPlan === plan ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                                        {plan.duration}
                                                    </span>
                                                    {plan.label && (
                                                        <span className="px-2 py-0.5 text-xs font-bold text-amber-700 bg-amber-100 rounded-full">
                                                            {plan.label}
                                                        </span>
                                                    )}
                                                </div>
                                                <span className={`font-bold ${selectedPlan === plan ? 'text-amber-600' : 'text-gray-900 dark:text-white'}`}>
                                                    ₹{plan.price.toLocaleString('en-IN')}
                                                </span>
                                            </button>
                                        ))}
                                    </div>

                                    {matchingVideoId ? (
                                        selectedPlan && (
                                            <div className="mt-4">
                                                <BuyButton
                                                    videoId={matchingVideoId}
                                                    price={selectedPlan.price}
                                                    planPeriod={selectedPlan.period}
                                                />
                                                <p className="text-xs text-gray-500 mt-3 text-center">
                                                    Secure payment via Razorpay. Immediate access granted.
                                                </p>
                                            </div>
                                        )
                                    ) : (
                                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-xl text-sm flex items-center gap-2">
                                            <AlertCircle className="w-5 h-5 shrink-0" />
                                            {isLoadingVideo ? 'Loading availability...' : 'Course enrollment is currently closed.'}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">

                {/* Episodes List */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-amber-500 rounded-full" />
                        Curriculum
                    </h3>
                    <div className="space-y-4">
                        {displayContent.episodes.map((ep, idx) => (
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
