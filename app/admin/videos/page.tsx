"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit2, Trash2, Eye, PlayCircle, Search, MoreVertical, Filter } from "lucide-react";

interface Video {
    id: string;
    title: string;
    price: number;
    isActive: boolean;
    thumbnail?: string;
    description: string | null;
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

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this course? This action cannot be undone.")) {
            return;
        }

        try {
            const res = await fetch(`/api/videos/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setVideos(videos.filter(v => v.id !== id));
            } else {
                alert("Failed to delete video");
            }
        } catch (error) {
            console.error("Delete error:", error);
            alert("An error occurred while deleting");
        }
    };

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return (
        <div className="flex items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 font-medium">Loading contents...</p>
            </div>
        </div>
    );

    return (
        <div className="space-y-8 animate-fade-in-up pb-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Course Library</h1>
                    <p className="text-gray-500 mt-2 font-medium">Manage and organize your video content</p>
                </div>
                <Link
                    href="/admin/videos/create"
                    className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-all hover:-translate-y-0.5"
                >
                    <Plus className="w-5 h-5" />
                    Upload New Course
                </Link>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
                {/* Toolbar */}
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/30">
                    <div className="relative w-full max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all shadow-sm"
                            placeholder="Search courses by title..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-sm">
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    {filteredVideos.length === 0 ? (
                        <div className="p-16 text-center flex flex-col items-center justify-center text-gray-500">
                            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                                <PlayCircle className="w-10 h-10 text-amber-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No videos found</h3>
                            <p className="text-gray-500 max-w-sm mx-auto">
                                {searchTerm ? "Try adjusting your search terms to find what you're looking for." : "Get started by uploading your first video course to the platform."}
                            </p>
                        </div>
                    ) : (
                        <table className="w-full">
                            <thead className="bg-gray-50/50">
                                <tr>
                                    <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Course Info</th>
                                    <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Price</th>
                                    <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                    <th className="px-8 py-5 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredVideos.map((video) => (
                                    <tr key={video.id} className="hover:bg-gray-50/80 transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-5">
                                                <div className="h-16 w-28 bg-gray-100 rounded-lg overflow-hidden relative shrink-0 border border-gray-200 shadow-sm group-hover:shadow-md transition-all">
                                                    {video.thumbnail ? (
                                                        <img src={video.thumbnail} alt={video.title} className="object-cover w-full h-full" />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full bg-gray-50 text-gray-300">
                                                            <PlayCircle className="w-8 h-8" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-1">{video.title}</h3>
                                                    <p className="text-sm text-gray-500 line-clamp-1 mt-0.5">{video.description || "No description provided"}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className="inline-flex items-center px-3 py-1 rounded-lg bg-gray-100 text-gray-700 font-bold text-sm">
                                                {video.price === 0 ? "Free" : `₹${video.price}`}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${video.isActive
                                                ? 'bg-green-50 text-green-700 border-green-200'
                                                : 'bg-gray-100 text-gray-600 border-gray-200'
                                                }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${video.isActive ? 'bg-green-500' : 'bg-gray-400'}`} />
                                                {video.isActive ? "Active" : "Draft"}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-100 transition-opacity">
                                                <Link
                                                    href={`/videos/${video.id}`}
                                                    className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all"
                                                    title="Preview Course"
                                                >
                                                    <Eye className="w-5 h-5" />
                                                </Link>
                                                <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all" title="Edit Details">
                                                    <Edit2 className="w-5 h-5" />
                                                </button>
                                                <div className="w-px h-4 bg-gray-200 mx-1" />
                                                <button
                                                    onClick={() => handleDelete(video.id)}
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                    title="Delete Course"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
