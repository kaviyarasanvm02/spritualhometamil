"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { upload } from '@vercel/blob/client';
import { use } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

export default function EditVideoPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
    const [videoKey, setVideoKey] = useState("");
    const [isActive, setIsActive] = useState(true);

    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [videoSource, setVideoSource] = useState<"file" | "vimeo">("file");
    const [vimeoId, setVimeoId] = useState("");

    // New state for file replacement (optional)
    const [newVideoFile, setNewVideoFile] = useState<File | null>(null);

    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchVideo() {
            try {
                const res = await fetch(`/api/videos/${id}`);
                const data = await res.json();
                if (data.video) {
                    setTitle(data.video.title);
                    setDescription(data.video.description || "");
                    setPrice(data.video.price.toString());
                    setIsActive(data.video.isActive);
                    setThumbnailUrl(data.video.thumbnail);
                    setVideoKey(data.video.videoUrl || "");

                    // Determine source type
                    const isVimeo = /^\d+$/.test(data.video.videoUrl || "");
                    setVideoSource(isVimeo ? "vimeo" : "file");
                    if (isVimeo) {
                        setVimeoId(data.video.videoUrl || "");
                    }
                }
            } catch (error) {
                console.error("Failed to load video", error);
                toast.error("Failed to load video details");
            } finally {
                setLoading(false);
            }
        }
        fetchVideo();
    }, [id]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setNewVideoFile(e.target.files[0]);
        }
    };

    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setThumbnailFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setUploading(true);

        try {
            let finalThumbnailUrl = thumbnailUrl;
            let finalVideoKey = videoKey;

            // Upload New Thumbnail
            if (thumbnailFile) {
                const thumbBlob = await upload(thumbnailFile.name, thumbnailFile, {
                    access: 'public',
                    handleUploadUrl: '/api/upload',
                });
                finalThumbnailUrl = thumbBlob.url;
            }

            // Handle Video Source Change or Update
            if (videoSource === "file") {
                if (newVideoFile) {
                    const newBlob = await upload(newVideoFile.name, newVideoFile, {
                        access: 'public',
                        handleUploadUrl: '/api/upload',
                    });
                    finalVideoKey = newBlob.url;
                }
            } else {
                // Vimeo ID Flow
                if (!vimeoId) {
                    toast.error("Please enter a Vimeo ID");
                    setUploading(false);
                    return;
                }
                const idMatch = vimeoId.match(/(?:vimeo\.com\/)(\d+)/);
                const cleanId = idMatch ? idMatch[1] : vimeoId;
                finalVideoKey = cleanId;
            }

            // Update DB
            const dbRes = await fetch(`/api/videos/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    description,
                    price: parseFloat(price),
                    videoUrl: finalVideoKey,
                    thumbnail: finalThumbnailUrl,
                    isActive
                }),
            });

            if (!dbRes.ok) throw new Error("Failed to update video");

            toast.success("Video updated successfully");
            router.push("/admin/videos");
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong updating the video");
        } finally {
            setUploading(false);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto space-y-6 pb-20">
            <h1 className="text-2xl font-bold text-gray-900">Edit Video</h1>

            <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-lg space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-md"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                        className="w-full px-3 py-2 mt-1 border rounded-md"
                        value={isActive ? "active" : "inactive"}
                        onChange={(e) => setIsActive(e.target.value === "active")}
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Draft / Inactive</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        className="w-full px-3 py-2 mt-1 border rounded-md"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price (INR)</label>
                    <input
                        type="number"
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-md"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Thumbnail Image</label>
                    {thumbnailUrl && (
                        <div className="mb-2">
                            <div className="relative h-32 w-full max-w-[200px] mb-2">
                                <Image src={thumbnailUrl} alt="Current Thumbnail" fill className="object-cover rounded shadow-sm" sizes="200px" />
                            </div>
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        className="mt-1 block w-full"
                        onChange={handleThumbnailChange}
                    />
                    <p className="text-xs text-gray-500 mt-1">Upload to replace the current thumbnail.</p>
                </div>

                <div className="border-t pt-4 mt-4">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Video Source</label>
                    <div className="flex space-x-4 mb-4">
                        <button
                            type="button"
                            onClick={() => setVideoSource("file")}
                            className={`px-4 py-2 rounded-md font-medium ${videoSource === "file" ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-700"}`}
                        >
                            Upload File
                        </button>
                        <button
                            type="button"
                            onClick={() => setVideoSource("vimeo")}
                            className={`px-4 py-2 rounded-md font-medium ${videoSource === "vimeo" ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-700"}`}
                        >
                            Vimeo ID
                        </button>
                    </div>

                    {videoSource === "file" ? (
                        <div key="file-upload">
                            <p className="text-sm text-gray-600 mb-2">Current File: {videoKey.substring(0, 50)}...</p>
                            <label className="block text-sm font-medium text-gray-700">Replace Video File (Optional)</label>
                            <input
                                type="file"
                                accept="video/*"
                                className="mt-1 block w-full"
                                onChange={handleFileChange}
                            />
                        </div>
                    ) : (
                        <div key="vimeo-input">
                            <label className="block text-sm font-medium text-gray-700">Vimeo Video ID</label>
                            <input
                                type="text"
                                required
                                placeholder="e.g. 123456789"
                                className="w-full px-3 py-2 mt-1 border rounded-md"
                                value={vimeoId}
                                onChange={(e) => setVimeoId(e.target.value)}
                            />
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={uploading}
                    className="w-full py-2 text-white bg-amber-600 rounded-md hover:bg-amber-700 disabled:opacity-50 mt-6"
                >
                    {uploading ? "Saving Changes..." : "Save Changes"}
                </button>
            </form>
        </div>
    );
}
