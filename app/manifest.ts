import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Spiritual Home Tamil',
        short_name: 'SpiritualHome',
        description: 'Transform Your Life Spiritually with Ancient Wisdom',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#f59e0b',
        icons: [
            {
                src: '/assets/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/assets/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
