export interface Episode {
    title: string;
    duration?: string;
    videoUrl?: string;
    description?: string;
}

export interface CourseContent {
    introVideo?: string;
    introTitle?: string;
    episodes: Episode[];
    bodyText?: string;
    description?: string;
    features?: string[];
    sections?: {
        title: string;
        content: string[];
    }[];
}

export interface PricingOption {
    duration: string;
    price: number;
    label?: string; // e.g. "Most Popular", "Best Value"
    durationTa?: string; // Tamil translation for duration
    period: 'monthly' | '6_months' | '1_year' | 'lifetime';
}

export interface Course {
    slug: string;
    type: 'free' | 'paid';
    category?: 'standard' | 'premium';
    title: {
        en: string;
        ta: string;
    };
    dbTitleMatch?: string; // Explicitly link to DB Video title if different from en title
    thumbnail: string;
    thumbnailKey?: string; // For matching existing assets
    pricing?: PricingOption[];
    content: {
        en: CourseContent;
        ta: CourseContent;
    };
    reviews?: {
        type: 'voice' | 'text';
        src: string;
        title?: string;
    }[];
}
