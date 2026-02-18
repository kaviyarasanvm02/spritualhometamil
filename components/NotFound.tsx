'use client';

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-4 bg-gray-50 dark:bg-gray-950">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Course Not Found</h1>
            <button
                onClick={() => router.back()}
                className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-2"
            >
                <ArrowLeft className="w-4 h-4" /> Go Back
            </button>
        </div>
    );
}
