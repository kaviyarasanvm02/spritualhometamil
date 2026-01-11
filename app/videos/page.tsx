import prisma from "@/lib/prisma";
import CourseTabs from "@/components/CourseTabs";

export const dynamic = "force-dynamic";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Browse Videos',
    description: 'Explore our collection of spiritual videos, guided meditations, and law of attraction courses.',
    alternates: {
        canonical: 'https://spiritualhometamil.com/videos',
    },
};

export default async function VideosPage() {
    const videos = await prisma.video.findMany({
        where: { isActive: true },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="pt-16 min-h-screen bg-gray-50">
            <CourseTabs videos={videos} />
        </div>
    );
}
