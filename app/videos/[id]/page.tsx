import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import VideoDetailsContent from "@/components/VideoDetailsContent";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const video = await prisma.video.findUnique({
        where: { id },
    });

    if (!video) {
        return {
            title: 'Video Not Found',
        };
    }

    return {
        title: video.title,
        description: video.description || `Watch ${video.title} on Spiritual Home Tamil.`,
        openGraph: {
            title: video.title,
            description: video.description || `Watch content on Spiritual Home Tamil`,
            images: video.thumbnail ? [{ url: video.thumbnail }] : [],
            type: 'video.other',
        },
    };
}

export default async function VideoPage({ params }: PageProps) {
    const { id } = await params;
    const session = await getSession();
    const video = await prisma.video.findUnique({
        where: { id },
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

    // Auto-grant access if the video is free AND user is logged in
    if (video.price === 0 && session) {
        hasAccess = true;
    }

    if (hasAccess && video.videoUrl) {
        // Only get presigned URL if it's NOT a Vimeo ID (numeric only)
        const isVimeo = /^\d+$/.test(video.videoUrl);
        if (!isVimeo) {
            signedUrl = video.videoUrl;
        }
    }

    // Structured Data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": video.title,
        "description": video.description,
        "thumbnailUrl": [video.thumbnail || "/assets/logo.png"],
        "uploadDate": video.createdAt.toISOString(),
        "contentUrl": hasAccess ? video.videoUrl : undefined, // Only show contentUrl if public/accessible? Actually for paid content usually obfuscated or meta only.
        "interactionStatistic": {
            "@type": "InteractionCounter",
            "interactionType": { "@type": "WatchAction" },
            "userInteractionCount": 0 // Dynamic if tracked
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <VideoDetailsContent
                video={{
                    ...video,
                    description: video.description || "",
                }}
                hasAccess={hasAccess}
                signedUrl={signedUrl}
            />
        </>
    );
}
