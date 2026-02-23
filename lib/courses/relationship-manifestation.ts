import { Course } from "./types";

export const relationshipManifestation: Course = {
    slug: "relationship-manifestation",
    type: 'paid',
    category: 'standard',
    title: {
        en: "Relationship Manifestation",
        ta: "உறவு ஈர்ப்பு"
    },
    dbTitleMatch: "Relationship Manifestation",
    thumbnail: "/assets/loa-programm.png",
    pricing: [
        { duration: "1 Month Access", durationTa: "1 மாத அணுகல்", price: 299, period: 'monthly' },
        { duration: "3 Months Access", durationTa: "3 மாதங்கள் அணுகல்", price: 599, period: '3_months' },
        { duration: "6 Months Access", durationTa: "6 மாதங்கள் அணுகல்", price: 999, period: '6_months', label: "Best Value" },
    ],
    content: {
        en: {
            introTitle: "Introduction of Relationship",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: [
                { title: "1. Introduction of Relationship (It's just a part) Intention from Positive" },
                { title: "2. Vibration Match (Remove Negative Believes)" },
                { title: "3. Write Clear Intention and Read Morning and Night" },
                { title: "4. Do Daily Practice Whatever It Happens" }
            ],
            description: "Every relationship you see in your life is a reflection of your inner state. If you want to change or attract any relationship, first change your inner state. When you transform within, the right relationship will be attracted to you, and your existing relationships will also improve.",
            sections: [
                {
                    title: "Practice Morning and Evening",
                    content: [
                        "22 to 66 days (Below Age 30)",
                        "22 to 132 days (Above Age 30)",
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
                { title: "1. உறவுமுறை பற்றிய அறிமுகம்: இது வாழ்க்கையின் ஒரு பகுதி மட்டுமே. நேர்மறையான நோக்கத்துடன் அணுகுதல்." },
                { title: "2. அதிர்வலை பொருத்தம் (Vibration Match): எதிர்மறையான நம்பிக்கைகளை நீக்குதல்." },
                { title: "3. எழுதுதல் (Write): உங்கள் நோக்கத்தைத் தெளிவாக எழுதுங்கள்; அதை காலையிலும் இரவிலும் படியுங்கள்." },
                { title: "4. செயல்முறை (Do): சூழல் எப்படி இருந்தாலும், தினசரி பயிற்சியை செய்யுங்கள்." }
            ],
            description: "உங்கள் வாழ்க்கையில் நீங்கள் காணும் ஒவ்வொரு உறவும், உங்கள் உள்ளார்ந்த நிலையின் பிரதிபலிப்பே ஆகும். எந்த உறவையும் மாற்றவோ அல்லது புதிய உறவை ஈர்க்கவோ விரும்பினால், முதலில் உங்கள் உள்ளார்ந்த நிலையை மாற்றுங்கள். நீங்கள் உள்ளிருந்து மாறும்போது, சரியான உறவு உங்களை நோக்கி ஈர்க்கப்படும்; ஏற்கனவே உள்ள உறவுகளும் மேம்படும்.",
            sections: [
                {
                    title: "காலை மற்றும் மாலை நேரப் பயிற்சி",
                    content: [
                        "• 22 முதல் 66 நாட்கள் (30 வயதிற்குட்பட்டவர்கள்)",
                        "• 22 முதல் 132 நாட்கள் (30 வயதிற்கு மேற்பட்டவர்கள்)",
                        "1. வழிகாட்டப்பட்ட காட்சிப்படுத்தல் (Guided Visualization)",
                        "2. வழிகாட்டப்பட்ட சுய உறுதிமொழிகள் (Guided Affirmation) - தமிழ் மற்றும் ஆங்கிலத்தில்",
                        "3. ஆழ்மனதிற்கான இசை (Subliminal Music)",
                        "4. வழிகாட்டப்பட்ட நன்றியுணர்வுப் பயிற்சி (Guided Gratitude)"
                    ]
                }
            ]
        }
    },
    reviews: [
        { type: 'voice', src: '/reviews/relationship-manifestation/person 1.mp3', title: 'Student Success Story 1' },
        { type: 'voice', src: '/reviews/relationship-manifestation/person 2.mp3', title: 'Student Success Story 2' }
    ]
};
