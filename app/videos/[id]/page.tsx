import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { getPresignedViewUrl } from "@/lib/s3";
import VideoDetailsContent from "@/components/VideoDetailsContent";

interface PageProps {
    params: { id: string };
}

export default async function VideoPage({ params }: PageProps) {
    const session = await getSession();
    const video = await prisma.video.findUnique({
        where: { id: params.id },
    });

    if (!video) {
        return <div className="text-center py-20">Video not found</div>;
    }

    let hasAccess = false;
    let signedUrl = null;

    if (session) {
        if (session.role === "ADMIN") {
            hasAccess = true;
        } else {
            const userVideo = await prisma.userVideo.findUnique({
                where: {
                    userId_videoId: {
                        userId: session.id,
                        videoId: video.id,
                    },
                },
            });
            if (userVideo) hasAccess = true;
        }
    }

    if (hasAccess && video.videoUrl) {
        // Only get presigned URL if it's NOT a Vimeo ID (numeric only)
        const isVimeo = /^\d+$/.test(video.videoUrl);
        if (!isVimeo) {
            signedUrl = await getPresignedViewUrl(video.videoUrl);
        }
    }

    return (
        <VideoDetailsContent
            video={{
                ...video,
                description: video.description || "",
            }}
            hasAccess={hasAccess}
            signedUrl={signedUrl}
        />
    );
}
