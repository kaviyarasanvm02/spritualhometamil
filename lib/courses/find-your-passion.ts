import { Course } from "./types";

export const findYourPassion: Course = {
    slug: "find-your-passion",
    type: 'paid',
    category: 'standard',
    title: {
        en: "Find Your Passion",
        ta: "உங்கள் ஆர்வத்தைக் கண்டறியவும்"
    },
    dbTitleMatch: "Find Your Passion",
    thumbnail: "/assets/findyourpurposee.png",
    pricing: [
        { duration: "Monthly", durationTa: "மாதாந்திரம்", price: 299, period: 'monthly' },
        { duration: "6 Months", durationTa: "6 மாதங்கள்", price: 599, period: '6_months' },
        { duration: "1 Year", durationTa: "1 வருடம்", price: 999, period: '1_year' },
        { duration: "Lifetime Access", durationTa: "வாழ்நாள் அணுகல்", price: 1499, period: 'lifetime' },
    ],
    content: {
        en: {
            introTitle: "Introduction of Purpose",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: [
                { title: "1. Introduction of Purpose (You are here for reason) Outer World" },
                { title: "2. What you love, Good at, Get paid & What world needs" },
                { title: "3. Live in Present Purpose (Full fill life)" },
                { title: "4. Do daily practice whatever it happens" }
            ],
            description: "Have you ever asked yourself, “Why am I here?” “What is my purpose?” “Why am I not able to succeed?” Here, you will discover your true self and understand your life’s purpose.",
            sections: [
                {
                    title: "Guided Content",
                    content: [
                        "1. Guided Visualization",
                        "2. Guided Affirmation Tamil and English",
                        "3. Subliminal Music",
                        "4. Guided Gratitude"
                    ]
                }
            ]
        },
        ta: {
            introTitle: "அறிமுகம் (Intro)",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: [
                { title: "1. நோக்கம் குறித்த அறிமுகம்: நீங்கள் ஒரு குறிப்பிட்ட காரணத்திற்காகவே இந்த உலகிற்கு வந்திருக்கிறீர்கள் என்பதை உணர்தல்." },
                { title: "2. வாழ்க்கையின் அடிப்படை (Ikigai தத்துவம்): நீங்கள் எதை நேசிக்கிறீர்கள்? நீங்கள் எதில் திறமையானவர்? எந்த வேலைக்கு உங்களுக்கு ஊதியம் கிடைக்கும்? இந்த உலகிற்கு உங்களிடமிருந்து என்ன தேவை?" },
                { title: "3. தற்போதைய நோக்கத்தில் வாழ்தல்: உங்கள் வாழ்க்கையை முழுமையாக வாழ்ந்து அர்த்தமுள்ளதாக மாற்றுங்கள்." },
                { title: "4. தினசரி பயிற்சி: சூழல்கள் மாறினாலும், உங்கள் தேடலையும் பயிற்சியையும் நிறுத்தாதீர்கள்." }
            ],
            description: "“நான் ஏன் இங்கே இருக்கிறேன்?” “என் வாழ்க்கையின் நோக்கம் என்ன?” “நான் ஏன் வெற்றி பெற முடியவில்லை?” என்று நீங்கள் ஒருபோதாவது உங்களையே கேள்வி கேட்டுள்ளீர்களா? இங்கு, உங்கள் உண்மையான ஆத்மாவை அறிந்து, உங்கள் வாழ்க்கையின் நோக்கத்தை கண்டறிவீர்கள்.",
            sections: [
                {
                    title: "வழிகாட்டப்பட்ட பயிற்சிகள் (Guided Practices)",
                    content: [
                        "1. வழிகாட்டப்பட்டக் காட்சிப்படுத்துதல் (Guided Visualization): உங்கள் லட்சிய வாழ்க்கையை மனக்கண்ணால் காண்பது.",
                        "2. தமிழ் மற்றும் ஆங்கில உறுதிமொழிகள் (Guided Affirmation): தன்னம்பிக்கை தரும் நேர்மறை வாக்கியங்களை மனதுக்குள் அல்லது உரக்கக் கூறுதல்.",
                        "3. ஆழ்மன இசை (Subliminal Music): தேடலைத் தூண்டும் ஆழ்மன இசை.",
                        "4. வழிகாட்டப்பட்ட நன்றியுணர்வு (Guided Gratitude): உங்களிடம் உள்ள திறமைகளுக்காக நன்றி கூறுதல்."
                    ]
                }
            ]
        }
    },
    reviews: [
        { type: 'voice', src: '/reviews/find-your-passion/person 1.mp3', title: 'Student Success Story 1' },
        { type: 'voice', src: '/reviews/find-your-passion/preson 2.mp3', title: 'Student Success Story 2' },
        { type: 'voice', src: '/reviews/find-your-passion/preson 3.mp3', title: 'Student Success Story 3' },
        { type: 'voice', src: '/reviews/find-your-passion/preson 4.mp3', title: 'Student Success Story 4' }
    ]
};
