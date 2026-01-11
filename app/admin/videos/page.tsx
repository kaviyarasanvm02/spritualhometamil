"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit2, Trash2, Eye, PlayCircle, Search } from "lucide-react";

interface Video {
    id: string;
    title: string;
    price: number;
    isActive: boolean;
    thumbnail?: string;
}

export default function AdminVideosPage() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function fetchVideos() {
            try {
                const res = await fetch("/api/videos");
                const data = await res.json();
                setVideos(data.videos || []);
            } catch (error) {
                console.error("Failed to load videos", error);
            } finally {
                setLoading(false);
            }
        }
        fetchVideos();
    }, []);

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return (
        <div className="flex items-center justify-center p-12">
            <div className="animate-pulse text-amber-600">Loading videos...</div>
        </div>
    );

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Videos</h1>
                    <p className="text-gray-500 mt-1">Manage your course content</p>
                </div>
                <Link
                    href="/admin/videos/create"
                    className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-md hover:shadow-lg hover:to-amber-600 transition-all hover:-translate-y-0.5"
                >
                    <Plus className="w-5 h-5" />
                    Upload New
                </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Search Bar */}
                <div className="p-4 border-b border-gray-100">
                    <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                            placeholder="Search videos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <ul className="divide-y divide-gray-100">
                    {filteredVideos.length === 0 && (
                        <div className="p-12 text-center flex flex-col items-center justify-center text-gray-500">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <PlayCircle className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">No videos found</h3>
                            <p className="mt-1">Get started by creating a new video.</p>
                        </div>
                    )}
                    {filteredVideos.map((video) => (
                        <li key={video.id} className="p-6 hover:bg-gray-50 transition-colors group">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-20 bg-gray-200 rounded-lg overflow-hidden relative shrink-0">
                                        {video.thumbnail ? (
                                            <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full" />
                                        ) : (
                                            <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
                                                <PlayCircle className="w-6 h-6" />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{video.title}</h3>
                                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                                            <span className="font-medium text-gray-900">₹{video.price}</span>
                                            <span>•</span>
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${video.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {video.isActive ? "Active" : "Inactive"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Link href={`/videos/${video.id}`} className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors" title="View">
                                        <Eye className="w-5 h-5" />
                                    </Link>
                                    <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Edit">
                                        <Edit2 className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
