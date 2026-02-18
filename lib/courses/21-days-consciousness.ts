import { Course } from "./types";

export const twentyOneDaysConsciousness: Course = {
    slug: "21-days-consciousness",
    type: 'paid', // Premium - Spiritual Awakening Course
    category: 'premium',
    title: {
        en: "Spiritual Awakening Course",
        ta: "ஆன்மீக விழிப்புணர்வு பயிற்சி (21 நாட்கள்)"
    },
    thumbnail: "/assets/money-manifestation.png",
    pricing: [
        { duration: "1 Month Access", durationTa: "1 மாத அணுகல்", price: 999, period: 'monthly' },
        { duration: "6 Months Access", durationTa: "6 மாதங்கள் அணுகல்", price: 2999, period: '6_months' },
        { duration: "1 Year Access", durationTa: "1 வருட அணுகல்", price: 5999, period: '1_year' },
        { duration: "Lifetime Access", durationTa: "வாழ்நாள் அணுகல்", price: 8999, period: 'lifetime' },
    ],
    content: {
        en: {
            introTitle: "Introduction",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: Array.from({ length: 21 }, (_, i) => ({ title: `Day ${i + 1}` })),
            sections: [
                {
                    title: "The Workshop Journey",
                    content: [
                        "1. The Truth?", "2. The voice", "3. Roommate", "4. not mind not Body",
                        "5. Illusion → The world", "6. Just Experience But Present (Fulfill)",
                        "7. no debt will Remain", "8. Don't Add new karma", "9. Reduce old karma",
                        "10. use one tool (meditation, yoga, kriya, Agam)", "11. Game → creator why?",
                        "12. when we enlighten", "13. when we enlight → karma '0' or kundalini Awaken",
                        "14. 2 level (3rd eye & crown) Realize our self", "15. Forgive others why?",
                        "16. love others No New karma", "17. Attachment", "18. Ego self → There is No I",
                        "19. Why It's Hard (Emotions in Body)", "20. Environment & food & major Role",
                        "21. Just decide it's not fate it's choice"
                    ]
                }
            ]
        },
        ta: {
            introTitle: "21 நாள் விழிப்புணர்வு பயிற்சிப் பட்டறை",
            introVideo: "https://www.youtube.com/embed/qIOlVtMtmQw",
            episodes: [
                { title: "1. உண்மை என்றால் என்ன?" },
                { title: "2. உள் மனக்குரல்" },
                { title: "3. மனதிற்குள் வாழும் கூட்டாளி" },
                { title: "4. நான் மனமும் அல்ல, உடலும் அல்ல" },
                { title: "5. மாயை → இந்த உலகம்" },
                { title: "6. அனுபவியுங்கள், ஆனால் நிகழ்காலத்தில் வாழுங்கள் (முழுமையடையுங்கள்)" },
                { title: "7. எந்தவொரு கர்மக் கடனும் எஞ்சியிருக்காது" },
                { title: "8. புதிய கர்மாவைச் சேர்க்காதீர்கள்" },
                { title: "9. பழைய கர்மாவைக் குறையுங்கள்" },
                { title: "10. ஒரே ஒரு கருவியை மட்டும் பயன்படுத்துங்கள் (தியானம், யோகா, க்ரியா, அல்லது அகம்)" },
                { title: "11. வாழ்க்கை ஒரு விளையாட்டு → படைத்தவர் இதை ஏன் உருவாக்கினார்?" },
                { title: "12. நாம் ஞானம் அடையும் போது" },
                { title: "13. ஞானமடையும் போது → கர்மா '0' ஆகும் அல்லது குண்டலினி விழிப்படையும்" },
                { title: "14. 2 நிலைகள் (மூன்றாவது கண் மற்றும் உச்சி சக்கரம்) - நம்மை நாமே உணர்தல்" },
                { title: "15. மற்றவர்களை மன்னிக்க வேண்டும், ஏன்?" },
                { title: "16. மற்றவர்களை அன்போடு அணுகுங்கள், புதிய கர்மா சேராது" },
                { title: "17. பற்று (அல்லது பிணைப்பு)" },
                { title: "18. அகந்தை → 'நான்' என்ற ஒன்றே இங்கு இல்லை" },
                { title: "19. இது ஏன் கடினமாக இருக்கிறது? (உடலில் தங்கியுள்ள உணர்ச்சிகளால்)" },
                { title: "20. சூழ்நிலை மற்றும் உணவின் முக்கியப் பங்கு" },
                { title: "21. இது விதியல்ல, இது உங்கள் தேர்வு என்பதை முடிவு செய்யுங்கள்" }
            ],
            sections: []
        }
    }
};
