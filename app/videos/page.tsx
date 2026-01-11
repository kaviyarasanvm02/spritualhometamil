import prisma from "@/lib/prisma";
import CourseTabs from "@/components/CourseTabs";

export const dynamic = "force-dynamic";

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
