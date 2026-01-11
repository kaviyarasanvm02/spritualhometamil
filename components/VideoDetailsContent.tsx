"use client";

import Script from "next/script";
import Link from "next/link";
import BuyButton from "@/components/BuyButton";
import { useLanguage } from "@/components/LanguageProvider";

interface VideoDetailsContentProps {
    video: {
        id: string;
        title: string;
        description: string;
        price: number;
        videoUrl: string | null;
    };
    hasAccess: boolean;
    signedUrl: string | null;
}

export default function VideoDetailsContent({ video, hasAccess, signedUrl }: VideoDetailsContentProps) {
    const { t } = useLanguage();

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <Script src="https://checkout.razorpay.com/v1/checkout.js" />

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100">
                {/* Video Player or Placeholder */}
                <div className="aspect-w-16 aspect-h-9 bg-black relative">
                    {hasAccess ? (
                        signedUrl ? (
                            <video controls className="w-full h-full" controlsList="nodownload">
                                <source src={signedUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : video.videoUrl && /^\d+$/.test(video.videoUrl) ? (
                            <iframe
                                src={`https://player.vimeo.com/video/${video.videoUrl}?badge=0&autopause=0&player_id=0&app_id=58479`}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                className="w-full h-full absolute top-0 left-0"
                                title={video.title}
                            />
                        ) : (
                            <div className="flex items-center justify-center h-96 text-white">
                                {t.videoDetails.unavailable}
                            </div>
                        )
                    ) : (
                        <div className="flex flex-col items-center justify-center h-96 bg-gray-900 text-white p-6 text-center">
                            <h2 className="text-2xl font-bold mb-4">{t.videoDetails.locked}</h2>
                            <p className="mb-6">{t.videoDetails.unlock}</p>
                            <div className="text-4xl">🔒</div>
                        </div>
                    )}
                </div>

                {/* Details */}
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{video.title}</h1>
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-2xl font-bold text-amber-600">₹{video.price}</span>
                        {hasAccess ? (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{t.videoDetails.purchased}</span>
                        ) : (
                            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">{t.videoDetails.premium}</span>
                        )}
                    </div>

                    <p className="text-gray-600 mb-8 whitespace-pre-wrap">{video.description}</p>

                    {!hasAccess && (
                        <div className="border-t pt-6 border-amber-50">
                            <BuyButton videoId={video.id} price={video.price} />
                            <p className="text-xs text-center text-gray-500 mt-3">
                                {t.videoDetails.securePayment}
                            </p>
                        </div>
                    )}

                    <div className="mt-8 pt-6 border-t border-amber-50">
                        <Link href="/" className="text-amber-600 hover:text-amber-800 font-medium">
                            &larr; {t.videoDetails.back}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
