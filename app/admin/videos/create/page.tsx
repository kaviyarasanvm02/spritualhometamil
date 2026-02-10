"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { upload } from '@vercel/blob/client';
import toast from "react-hot-toast";

export default function CreateVideoPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [videoSource, setVideoSource] = useState<"file" | "vimeo">("file");
    const [vimeoId, setVimeoId] = useState("");
    const [uploading, setUploading] = useState(false);
    const router = useRouter();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setThumbnailFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let videoKey = "";
        let thumbnailUrl = null;
        setUploading(true);

        try {
            // Upload Thumbnail if exists
            if (thumbnailFile) {
                const thumbBlob = await upload(thumbnailFile.name, thumbnailFile, {
                    access: 'public',
                    handleUploadUrl: '/api/upload',
                });
                thumbnailUrl = thumbBlob.url;
            }

            if (videoSource === "file") {
                if (!file) {
                    alert("Please select a video file");
                    setUploading(false);
                    return;
                }

                // Vercel Blob Upload
                const newBlob = await upload(file.name, file, {
                    access: 'public',
                    handleUploadUrl: '/api/upload',
                });

                videoKey = newBlob.url;
            } else {
                // Vimeo ID Flow
                if (!vimeoId) {
                    toast.error("Please enter a Vimeo ID");
                    setUploading(false);
                    return;
                }
                // Construct Vimeo Embed URL
                // Check if user entered full URL or just ID
                const idMatch = vimeoId.match(/(?:vimeo\.com\/)(\d+)/);
                const cleanId = idMatch ? idMatch[1] : vimeoId;

                videoKey = cleanId;
            }

            // Save to DB
            const dbRes = await fetch("/api/videos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    description,
                    price: parseFloat(price),
                    videoUrl: videoKey,
                    thumbnail: thumbnailUrl,
                }),
            });

            if (!dbRes.ok) throw new Error("Failed to save video");

            toast.success("Video created successfully!");
            router.push("/admin/videos");
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong uploading the video");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Upload New Video</h1>
            <div className="flex space-x-4 mb-6">
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
                    <input
                        type="file"
                        accept="image/*"
                        className="mt-1 block w-full"
                        onChange={handleThumbnailChange}
                    />
                    <p className="text-xs text-gray-500 mt-1">Upload an image to be shown on the video card.</p>
                </div>

                {videoSource === "file" ? (
                    <div key="file-upload">
                        <label className="block text-sm font-medium text-gray-700">Video File</label>
                        <input
                            type="file"
                            accept="video/*"
                            required
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
                        <p className="text-xs text-gray-500 mt-1">
                            Copy the numeric ID from your Vimeo video URL. Ensure the video privacy is set to "Hide from Vimeo" or "Domain restricted".
                        </p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={uploading}
                    className="w-full py-2 text-white bg-amber-600 rounded-md hover:bg-amber-700 disabled:opacity-50"
                >
                    {uploading ? "Processing..." : "Publish Video"}
                </button>
            </form>
        </div>
    );
}
