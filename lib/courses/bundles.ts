import { Course } from "./types";

export const all5CoursesCombo: Course = {
    slug: "all-5-courses-combo",
    type: 'paid',
    category: 'standard',
    title: {
        en: "ALL 5 COURSES COMBO ACCESS",
        ta: "அனைத்து 5 பயிற்சிகளும்"
    },
    thumbnail: "/assets/miracle.png", // Temporary placeholder
    pricing: [
        { duration: "Monthly", durationTa: "மாதாந்திரம்", price: 999, period: 'monthly' },
        { duration: "6 Months", durationTa: "6 மாதங்கள்", price: 1999, period: '6_months' },
        { duration: "1 Year", durationTa: "1 வருடம்", price: 2999, period: '1_year', label: "Most Popular" },
        { duration: "Lifetime Access", durationTa: "வாழ்நாள் அணுகல்", price: 4999, period: 'lifetime' },
    ],
    content: {
        en: {
            introTitle: "All 5 Standard Courses",
            episodes: [],
            description: "Five things are very important in life: • Money • Relationships • Job and business • Health • Passion. Here, you will learn how to understand and improve all these areas of your life.",
            sections: []
        },
        ta: {
            introTitle: "Intro",
            episodes: [],
            description: "வாழ்க்கையில் ஐந்து விஷயங்கள் மிகவும் முக்கியமானவை: • பணம் • உறவுகள் • வேலை மற்றும் வியாபாரம் • ஆரோக்கியம் • ஆர்வம் / வாழ்க்கை நோக்கம். இந்த அனைத்தையும் புரிந்து கொண்டு மேம்படுத்துவது எப்படி என்பதை இங்கு நீங்கள் கற்றுக்கொள்வீர்கள்.",
            sections: []
        }
    }
};

export const transformationSpiritualCombo: Course = {
    slug: "transformation-spiritual-combo",
    type: 'paid',
    category: 'premium',
    title: {
        en: "COMBO COURSE – ONE PURCHASE",
        ta: "காம்போ பயிற்சி (30 நாட்கள் + ஆன்மீகம்)"
    },
    thumbnail: "/assets/loa-programm.png", // Temporary placeholder
    pricing: [
        { duration: "1 Month Access", durationTa: "1 மாத அணுகல்", price: 1999, period: 'monthly' },
        { duration: "6 Months Access", durationTa: "6 மாதங்கள் அணுகல்", price: 5999, period: '6_months' },
        { duration: "1 Year Access", durationTa: "1 வருட அணுகல்", price: 10999, period: '1_year', label: "Most Popular" },
        { duration: "Lifetime Access", durationTa: "வாழ்நாள் அணுகல்", price: 14999, period: 'lifetime' },
    ],
    content: {
        en: {
            introTitle: "30-Day Transformation + Spiritual Awakening",
            episodes: [],
            description: "In life, we truly need only two things: • Material well-being • Spiritual growth. Here, you will learn how to achieve and balance both.",
            sections: []
        },
        ta: {
            introTitle: "Intro",
            episodes: [],
            description: "வாழ்க்கையில் நமக்கு உண்மையாக தேவைப்படுவது இரண்டு விஷயங்கள் மட்டுமே: • பொருளாதார நலன் • ஆன்மீக வளர்ச்சி. இந்த இரண்டையும் எவ்வாறு அடைந்து சமநிலையுடன் வாழ வேண்டும் என்பதை இங்கு நீங்கள் கற்றுக்கொள்வீர்கள்.",
            sections: []
        }
    }
};
