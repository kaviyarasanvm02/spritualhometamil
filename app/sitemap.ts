import { MetadataRoute } from 'next';
import prisma from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://spiritualhometamil.com'; // Replace with actual domain

    // Get all public videos
    const videos = await prisma.video.findMany({
        where: { isActive: true },
        select: { id: true, updatedAt: true },
    });

    const videoUrls = videos.map((video) => ({
        url: `${baseUrl}/videos/${video.id}`,
        lastModified: video.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/login`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/register`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        ...videoUrls,
    ];
}
