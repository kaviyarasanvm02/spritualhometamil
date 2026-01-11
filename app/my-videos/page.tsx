"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { useLanguage } from "@/components/LanguageProvider";

interface Video {
    id: string;
    title: string;
    videoUrl: string;
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
        return <div className="p-8 text-center">{t.myLibrary.loading}</div>;
    }

    if (!user) {
        return (
            <div className="p-8 text-center">
                <p>
                    {t.myLibrary.loginReq}{" "}
                    <Link href="/login" className="text-amber-600 underline">
                        {t.nav.login}
                    </Link>
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.myLibrary.title}</h1>

            {videos.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-lg">{t.myLibrary.noVideos}</p>
                    <Link href="/" className="mt-4 inline-block text-amber-600 hover:text-amber-500 font-medium">
                        {t.myLibrary.browse} &rarr;
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video) => (
                        <div key={video.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                            <div className="p-6">
                                <h3 className="text-lg font-medium text-gray-900 truncate" title={video.title}>{video.title}</h3>
                                <div className="mt-4">
                                    <Link
                                        href={`/videos/${video.id}`}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700"
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
    );
}
