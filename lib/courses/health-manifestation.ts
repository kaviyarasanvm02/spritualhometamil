import { Course } from "./types";

export const healthManifestation: Course = {
    slug: "health-manifestation",
    type: 'paid',
    category: 'standard',
    title: {
        en: "Health Manifestation",
        ta: "ஆரோக்கிய ஈர்ப்பு"
    },
    dbTitleMatch: "Health Manifestation",
    thumbnail: "/assets/health-manifestationn.png",
    pricing: [
        { duration: "1 Month Access", durationTa: "1 மாத அணுகல்", price: 299, period: 'monthly' },
        { duration: "3 Months Access", durationTa: "3 மாதங்கள் அணுகல்", price: 599, period: '3_months' },
        { duration: "6 Months Access", durationTa: "6 மாதங்கள் அணுகல்", price: 999, period: '6_months', label: "Best Value" },
    ],
    content: {
        en: {
            introTitle: "Introduction of Health",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: [
                { title: "1. Introduction of Health (It can heal itself) Intention from Positive" },
                { title: "2. Vibration Match (Remove Negative Believes)" },
                { title: "3. Write Clear Intention and Read Morning and Night" },
                { title: "4. Do Daily Practice Whatever It Happens" }
            ],
            description: "The mind is the master of your body. The body responds to what the mind believes and commands. When you transform your mind in the right way, your body begins to adjust and support better health. As a result, you can move toward a healthier and more balanced life. Here, you will learn how to do this in a practical way.",
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
                { title: "1. உடல் மற்றும் மனம் பற்றிய அறிமுகம்: மனம் சொல்வதை உடல் கேட்கும்." },
                { title: "2. உடல் ஒரு கருவி: உங்கள் ஆரோக்கியத்தை மீட்டெடுப்பதற்கான வழிகள்." },
                { title: "3. நன்றியுணர்வு: உங்கள் உடலுக்கு நன்றி கூறி குணப்படுத்துதல்." },
                { title: "4. தினசரி பயிற்சி: ஆழ்மனதின் மூலம் ஆரோக்கியத்தைப் பெறுதல்." }
            ],
            description: "மனம் உங்கள் உடலின் தலைவர் போன்றது. மனம் என்ன நம்புகிறது, என்ன கூறுகிறது என்பதைக் கேட்டு உடல் செயல்படுகிறது. நீங்கள் உங்கள் மனதை சரியான முறையில் மாற்றும்போது, உடல் அதற்கு ஏற்ப தன்னைச் சீரமைத்து ஆரோக்கியத்தை ஆதரிக்க ஆரம்பிக்கும். இதன் மூலம், நீங்கள் ஆரோக்கியமான மற்றும் சமநிலையான வாழ்க்கையை நோக்கி நகரலாம். இதை நடைமுறையில் எப்படி செய்ய வேண்டும் என்பதை இங்கு நீங்கள் கற்றுக்கொள்வீர்கள்.",
            sections: [
                {
                    title: "வழிகாட்டப்பட்ட பயிற்சிகள் (Guided Practices)",
                    content: [
                        "1. வழிகாட்டப்பட்டக் காட்சிப்படுத்துதல் (Guided Visualization): உங்கள் உடல் ஆரோக்கியமாக இருப்பதை மனக்கண்ணால் காண்பது.",
                        "2. தமிழ் மற்றும் ஆங்கில உறுதிமொழிகள் (Guided Affirmation): நேர்மறையான வாக்கியங்களை மனதுக்குள் அல்லது உரக்கக் கூறுதல்.",
                        "3. ஆழ்மன இசை (Subliminal Music): ஆழ்மனதைத் தூண்டி குணப்படுத்தும் மெல்லிசை.",
                        "4. வழிகாட்டப்பட்ட நன்றியுணர்வு (Guided Gratitude): இப்போது இருக்கும் ஆரோக்கியத்திற்காக நன்றி கூறுதல்."
                    ]
                }
            ]
        }
    },
    reviews: [
        { type: 'voice', src: '/reviews/health-manifestation/person 1.mp3', title: 'Student Success Story 1' },
        { type: 'voice', src: '/reviews/health-manifestation/person 2.mp3', title: 'Student Success Story 2' },
        { type: 'voice', src: '/reviews/health-manifestation/person 3.mp3', title: 'Student Success Story 3' }
    ]
};
