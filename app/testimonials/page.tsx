"use client";

import { useLanguage } from "../../components/LanguageProvider";
import AudioPlayer from "../../components/AudioPlayer";
import { Quote, MessageCircle, Mic } from "lucide-react";

export default function TestimonialsPage() {
    const { t } = useLanguage();

    // Generate arrays for voice and text reviews based on the normalized filenames
    // Assuming we have roughly 30 voice notes and 60 text reviews as observed
    const voiceReviews = Array.from({ length: 29 }, (_, i) => ({
        id: i + 1,
        src: `/voicereview/v${i + 1}.ogg`,
        title: `Student Success Story #${i + 1}`
    }));

    const textReviews = Array.from({ length: 60 }, (_, i) => ({
        id: i + 1,
        src: `/textreview/t${i + 1}.jpg`,
        alt: `Student Testimony ${i + 1}`
    }));

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-6 animate-fade-in">
                    <Quote className="w-4 h-4" />
                    <span>Real Stories, Real Transformations</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                    What Our Students Say
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Hear directly from people whose lives have been transformed through our guidance and the Law of Attraction.
                </p>
            </div>

            {/* Voice Reviews Section */}
            <section className="mb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                            <Mic className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Voice Reviews</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {voiceReviews.map((review) => (
                            <AudioPlayer
                                key={review.id}
                                src={review.src}
                                title={review.title}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Text Reviews Section */}
            <section>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                            <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Whatsapp Reviews</h2>
                    </div>

                    {/* Masonry-like Grid for Images */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {textReviews.map((review) => (
                            <div key={review.id} className="break-inside-avoid">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                                    <img
                                        src={review.src}
                                        alt={review.alt}
                                        loading="lazy"
                                        className="w-full h-auto hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
