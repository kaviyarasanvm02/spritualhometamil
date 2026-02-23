
import { Course } from "./types";

export const twentyOneDaysConsciousness: Course = {
    slug: "21-days-consciousness",
    type: 'paid', // Premium - Spiritual Awakening Course
    category: 'premium',
    title: {
        en: "Spiritual Awakening Course",
        ta: "ஆன்மீக விழிப்புணர்வு பயிற்சி (21 நாட்கள்)"
    },
    thumbnail: "/assets/money-manifestationn.png",
    pricing: [
        { duration: "1 Month Access", durationTa: "1 மாத அணுகல்", price: 999, period: 'monthly' },
        { duration: "3 Months Access", durationTa: "3 மாதங்கள் அணுகல்", price: 2999, period: '3_months' },
        { duration: "6 Months Access", durationTa: "6 மாதங்கள் அணுகல்", price: 5499, period: '6_months', label: "Best Value" },
    ],
    content: {
        en: {
            introTitle: "Introduction",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: Array.from({ length: 21 }, (_, i) => ({ title: `Day ${i + 1} ` })),
            description: "There is only one true motive in life for all of us — to realize ourselves. From childhood, we are taught to focus on the outer world. In that process, we forget who we truly are. Here, you will learn who you really are and discover the power that already exists within you.",
            sections: [
                {
                    title: "The Workshop Journey",
                    content: [
                        "1. Introduction to consciousness",
                        "2. The observer and the observed",
                        "3. Witnessing your mind",
                        "4. Being in the effortless state"
                    ]
                }
            ]
        },
        ta: {
            introTitle: "அறிமுகம்",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: [
                { title: "அறிமுகம் (Introduction)" },
                { title: "கவனிப்பாளர் (The Observer)" },
                { title: "மனதைக் கவனித்தல் (Witnessing)" }
            ],
            description: "எங்கள் வாழ்க்கையின் ஒரே உண்மையான நோக்கம் — நம்மை நாமே உணர்வதே. சிறு வயதிலிருந்தே, வெளியுலகத்தைப் பார்க்கவும் அதில் கவனம் செலுத்தவும் நமக்கு கற்பிக்கப்படுகிறது. அந்தப் பயணத்தில், நாம் உண்மையில் யார் என்பதை மறந்து விடுகிறோம். இங்கு, நீங்கள் உண்மையில் யார் என்பதையும், உங்கள் உள்ளத்தில் ஏற்கனவே இருக்கும் சக்தி என்ன என்பதையும் அறிந்து கொள்வீர்கள்.",
            sections: [
                {
                    title: "விழிப்புணர்வு பயணம்",
                    content: [
                        "6. அனுபவியுங்கள், ஆனால் நிகழ்காலத்தில் வாழுங்கள் (முழுமையடையுங்கள்)",
                        "7. எந்தவொரு கர்மக் கடனும் எஞ்சியிருக்காது",
                        "8. புதிய கர்மாவைச் சேர்க்காதீர்கள்",
                        "9. பழைய கர்மாவைக் குறையுங்கள்",
                        "10. ஒரே ஒரு கருவியை மட்டும் பயன்படுத்துங்கள் (தியானம், யோகா, க்ரியா, அல்லது அகம்)",
                        "13. ஞானமடையும் போது → கர்மா '0' ஆகும் அல்லது குண்டலினி விழிப்படையும்",
                        "14. 2 நிலைகள் (மூன்றாவது கண் மற்றும் உச்சி சக்கரம்) - நம்மை நாமே உணர்தல்",
                        "15. மற்றவர்களை மன்னிக்க வேண்டும், ஏன்?",
                        "16. மற்றவர்களை அன்போடு அணுகுங்கள், புதிய கர்மா சேராது",
                        "17. பற்று (அல்லது பிணைப்பு)",
                        "18. அகந்தை → 'நான்' என்ற ஒன்றே இங்கு இல்லை",
                        "19. இது ஏன் கடினமாக இருக்கிறது? (உடலில் தங்கியுள்ள உணர்ச்சிகளால்)",
                        "20. சூழ்நிலை மற்றும் உணவின் முக்கியப் பங்கு",
                        "21. இது விதியல்ல, இது உங்கள் தேர்வு என்பதை முடிவு செய்யுங்கள்"
                    ]
                }
            ]
        }
    },
    reviews: [
        { type: 'voice', src: '/reviews/21-days-consciousness/person 1.mp3', title: 'Student Success Story 1' },
        { type: 'voice', src: '/reviews/21-days-consciousness/person 2.mp3', title: 'Student Success Story 2' }
    ]
};
