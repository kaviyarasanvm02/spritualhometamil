import { Star, Zap, Heart } from "lucide-react";

const cards = [
    {
        title: "Meditation Mastery",
        desc: "Master the art of mindfulness with our step-by-step guides.",
        icon: Star,
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Energy Healing",
        desc: "Unlock your body's natural healing potential.",
        icon: Zap,
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        title: "Inner Peace",
        desc: "Find tranquility in your daily life through spiritual practice.",
        icon: Heart,
        color: "bg-pink-100 text-pink-600"
    }
];

export default function FeatureCards() {
    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-6`}>
                                <card.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                            <p className="text-gray-600">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
