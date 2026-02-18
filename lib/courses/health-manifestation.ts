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
        { duration: "Monthly", durationTa: "மாதாந்திரம்", price: 299, period: 'monthly' },
        { duration: "6 Months", durationTa: "6 மாதங்கள்", price: 599, period: '6_months' },
        { duration: "1 Year", durationTa: "1 வருடம்", price: 999, period: '1_year' },
        { duration: "Lifetime Access", durationTa: "வாழ்நாள் அணுகல்", price: 1499, period: 'lifetime' },
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
            description: "Do I really want? How much for 10/10? I do anything for this health? 22 to 66 days? Your mind God for your body.",
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
                { title: "1. ஆரோக்கியம் குறித்த அறிமுகம்: உடல் தன்னைத்தானே குணப்படுத்தும் ஆற்றல் கொண்டது என்பதை உணர்தல். உங்கள் எண்ணம் எப்போதும் நேர்மறையானதாக இருக்க வேண்டும்." },
                { title: "2. அதிர்வு பொருத்தம் (Vibration Match): உங்கள் மனநிலையை ஆரோக்கியமான அதிர்வுகளுக்கு மாற்றுங்கள் மற்றும் எதிர்மறை நம்பிக்கைகளை அகற்றுங்கள்." },
                { title: "3. தெளிவான நோக்கத்தை எழுதுதல்: உங்கள் ஆரோக்கிய இலக்கைத் தெளிவாக எழுதி, அதைத் தினமும் காலை மற்றும் இரவு நேரங்களில் வாசிக்கவும்." },
                { title: "4. தினசரி பயிற்சி: சூழல் எதுவாக இருந்தாலும், பயிற்சியைத் தடையின்றித் தொடரவும்." }
            ],
            description: "முக்கியக் கேள்விகள் மற்றும் வழிமுறைகள்:\n• இது எனக்கு உண்மையிலேயே வேண்டுமா?: உங்கள் விருப்பத்திற்கு 10-க்கு எத்தனை மதிப்பெண் தருவீர்கள்?\n• இந்த ஆரோக்கியத்தைப் பெற நான் எதையும் செய்யத் தயாரா?\n• கால அளவு: 22 முதல் 66 நாட்கள் வரை தொடர்ந்து பயிற்சி செய்யவும்.\n• மனமே மருந்து: உங்கள் உடலுக்கு உங்கள் மனமே கடவுள் (உடல் ஆரோக்கியம் மனதைப் பொறுத்தது).\n• முழு ஈடுபாட்டுடன் செய்ய முடியும் என்றால் மட்டுமே தொடரவும்.",
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
    }
};
