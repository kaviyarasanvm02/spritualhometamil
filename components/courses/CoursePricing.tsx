'use client';

import { useState, useEffect } from "react";
import { PricingOption } from "@/lib/courses.data";
import BuyButton from "@/components/BuyButton";
import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { content as globalContent } from "@/lib/content";

interface CoursePricingProps {
    pricing: PricingOption[];
    matchingVideoId: string | null;
    isLoadingVideo: boolean;
}

export default function CoursePricing({ pricing, matchingVideoId, isLoadingVideo }: CoursePricingProps) {
    const { language } = useLanguage();
    const t = language === 'ta' ? globalContent.ta : globalContent.en;
    const [selectedPlan, setSelectedPlan] = useState<PricingOption | null>(() => {
        if (pricing && pricing.length > 0) {
            return pricing.find(p => p.label === 'Most Popular' || p.label === 'Best Value') || pricing[0];
        }
        return null;
    });

    // Update selected plan if pricing options change
    useEffect(() => {
        if (pricing && pricing.length > 0) {
            // Only update if current selected plan is not in the new pricing list or is null
            const isCurrentPlanValid = selectedPlan && pricing.some(p => p.duration === selectedPlan.duration);
            if (!isCurrentPlanValid) {
                const defaultPlan = pricing.find(p => p.label === 'Most Popular' || p.label === 'Best Value') || pricing[0];
                setSelectedPlan(defaultPlan);
            }
        }
    }, [pricing, selectedPlan]);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm mt-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{t.pricing.choosePlan}</h3>

            <div className="space-y-3 mb-6">
                {pricing.map((plan, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedPlan(plan)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${selectedPlan === plan
                            ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20'
                            : 'border-gray-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-amber-800'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === plan ? 'border-amber-500' : 'border-gray-300 dark:border-gray-500'
                                }`}>
                                {selectedPlan === plan && <div className="w-2.5 h-2.5 bg-amber-500 rounded-full" />}
                            </div>
                            <span className={`font-medium ${selectedPlan === plan ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                {language === 'ta' && plan.durationTa ? plan.durationTa : plan.duration}
                            </span>
                            {plan.label && (
                                <span className="px-2 py-0.5 text-xs font-bold text-amber-700 bg-amber-100 rounded-full">
                                    {plan.label}
                                </span>
                            )}
                        </div>
                        <span className={`font-bold ${selectedPlan === plan ? 'text-amber-600' : 'text-gray-900 dark:text-white'}`}>
                            ₹{plan.price.toLocaleString('en-IN')}
                        </span>
                    </button>
                ))}
            </div>

            {matchingVideoId ? (
                selectedPlan && (
                    <div className="mt-4">
                        <BuyButton
                            videoId={matchingVideoId}
                            price={selectedPlan.price}
                            planPeriod={selectedPlan.period}
                        />
                        <p className="text-xs text-gray-500 mt-3 text-center">
                            Secure payment via Razorpay. Immediate access granted.
                        </p>
                    </div>
                )
            ) : (
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-xl text-sm flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    {isLoadingVideo ? 'Loading availability...' : 'Course enrollment is currently closed.'}
                </div>
            )}
        </div>
    );
}
