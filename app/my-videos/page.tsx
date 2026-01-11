"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { Play, BookOpen, Clock, ArrowRight, Sparkles } from "lucide-react";

interface Video {
    id: string;
    title: string;
    description: string | null;
    videoUrl: string;
    thumbnail: string | null;
    price: number;
}

export default function MyVideosPage() {
    const { user, loading } = useAuth();
    const { t } = useLanguage();
    const [videos, setVideos] = useState<Video[]>([]);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        async function fetchPurchasedVideos() {
            if (!user) return;
            try {
                const res = await fetch("/api/my-videos");
                if (res.ok) {
                    const data = await res.json();
                    setVideos(data.videos);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setPageLoading(false);
            }
        }
        if (!loading && user) {
            fetchPurchasedVideos();
        } else if (!loading && !user) {
            setPageLoading(false);
        }
    }, [user, loading]);

    if (loading || pageLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-500 font-medium animate-pulse">Loading your library...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-gray-50">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
                    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ArrowRight className="w-6 h-6 text-amber-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.myLibrary.loginReq}</h2>
                    <p className="text-gray-500 mb-8">Please sign in to access your purchased content.</p>
                    <Link
                        href="/login"
                        className="inline-flex w-full items-center justify-center px-6 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
                    >
                        {t.nav.login}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-4">
                            <BookOpen className="w-4 h-4" />
                            <span>My Collection</span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {t.myLibrary.title}
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">
                            Welcome back, {user.name}. Continue your spiritual journey.
                        </p>
                    </div>

                    {videos.length > 0 && (
                        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-600">
                            You have <span className="text-amber-600 font-bold">{videos.length}</span> courses
                        </div>
                    )}
                </div>

                {videos.length === 0 ? (
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 text-center max-w-2xl mx-auto mt-12">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Sparkles className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{t.myLibrary.noVideos}</h3>
                        <p className="text-gray-500 mb-8">It looks like you haven't enrolled in any courses yet.</p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            {t.myLibrary.browse}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video) => (
                            <div key={video.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 flex flex-col h-full">
                                {/* Thumbnail */}
                                <div className="relative aspect-video bg-gray-200 overflow-hidden">
                                    {video.thumbnail ? (
                                        <div className="relative w-full h-full">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-amber-50">
                                            <Play className="w-12 h-12 text-amber-300" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-amber-600 shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                                            <Play className="w-6 h-6 fill-current ml-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1" title={video.title}>
                                        {video.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-grow">
                                        {video.description || "Start watching now to unlock the content."}
                                    </p>

                                    <div className="mt-auto">
                                        <Link
                                            href={`/videos/${video.id}`}
                                            className="block w-full py-3 text-center bg-amber-50 text-amber-700 font-bold rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-300"
                                        >
                                            {t.myLibrary.watch}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
