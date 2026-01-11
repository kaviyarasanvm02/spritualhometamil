"use client";

import { Users, Video, DollarSign, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
    // In a real app, these would come from an API
    // For now we simulate "modern" look with static components
    const stats = [
        { name: 'Total Revenue', value: '₹45,231', icon: DollarSign, change: '+20.1%', changeType: 'increase', color: 'text-green-600', bg: 'bg-green-100' },
        { name: 'Total Users', value: '2,338', icon: Users, change: '+15.1%', changeType: 'increase', color: 'text-blue-600', bg: 'bg-blue-100' },
        { name: 'Active Videos', value: '24', icon: Video, change: '12 new', changeType: 'neutral', color: 'text-amber-600', bg: 'bg-amber-100' },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Overview</h1>
                <p className="text-gray-500 mt-1">Metrics and performance indicators</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item) => (
                    <div key={item.name} className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <item.icon className="w-24 h-24 text-gray-900" />
                        </div>
                        <dt>
                            <div className={`rounded-xl p-3 w-fit ${item.bg}`}>
                                <item.icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
                            </div>
                            <p className="mt-4 truncate text-sm font-medium text-gray-500">{item.name}</p>
                        </dt>
                        <dd className="flex items-baseline pb-1 sm:pb-2">
                            <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                            <p className={`ml-2 flex items-baseline text-sm font-semibold ${item.changeType === 'increase' ? 'text-green-600' : 'text-gray-600'}`}>
                                {item.changeType === 'increase' && <TrendingUp className="h-4 w-4 flex-shrink-0 self-center text-green-500 mr-1" />}

                                {item.change}
                            </p>
                        </dd>
                    </div>
                ))}
            </div>

            {/* Placeholder for Recent Activity */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="prose prose-sm text-gray-500">
                    <p>No recent activity to display.</p>
                </div>
            </div>
        </div>
    );
}
