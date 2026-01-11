"use client";

import { Users, Video, DollarSign, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
    // Simulated data
    const stats = [
        {
            name: 'Total Revenue',
            value: '₹45,231',
            icon: DollarSign,
            change: '+20.1%',
            trend: 'up',
            bg: 'bg-gradient-to-br from-amber-500 to-amber-600',
            text: 'text-white'
        },
        {
            name: 'Total Users',
            value: '2,338',
            icon: Users,
            change: '+15.1%',
            trend: 'up',
            bg: 'bg-white',
            text: 'text-gray-900'
        },
        {
            name: 'Active Videos',
            value: '24',
            icon: Video,
            change: '12 new this month',
            trend: 'neutral',
            bg: 'bg-white',
            text: 'text-gray-900'
        },
    ];

    const recentOrders = [
        { id: '#ORD-001', user: 'Vicky', course: 'Manifestation Masterclass', amount: '₹499', status: 'Completed', date: '2 mins ago' },
        { id: '#ORD-002', user: 'Priya S.', course: 'Chakra Healing', amount: '₹999', status: 'Pending', date: '15 mins ago' },
        { id: '#ORD-003', user: 'Rahul K.', course: 'Manifestation Masterclass', amount: '₹499', status: 'Completed', date: '1 hour ago' },
        { id: '#ORD-004', user: 'Anita R.', course: 'Law of Attraction Basic', amount: '₹0', status: 'Completed', date: '3 hours ago' },
    ];

    return (
        <div className="space-y-8 animate-fade-in-up pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h1>
                    <p className="text-gray-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
                        Download Report
                    </button>
                    <button className="px-4 py-2 bg-amber-600 text-white rounded-xl text-sm font-medium hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20">
                        Add New Video
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item) => (
                    <div
                        key={item.name}
                        className={`relative overflow-hidden rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group ${item.bg === 'bg-white' ? 'bg-white' : item.bg}`}
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className={`text-sm font-medium ${item.bg !== 'bg-white' ? 'text-amber-100' : 'text-gray-500'}`}>
                                    {item.name}
                                </p>
                                <p className={`mt-2 text-3xl font-bold ${item.text}`}>
                                    {item.value}
                                </p>
                            </div>
                            <div className={`p-3 rounded-xl ${item.bg !== 'bg-white' ? 'bg-white/20 text-white' : 'bg-gray-50 text-gray-900'}`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="mt-4 flex items-center">
                            <span className={`text-sm font-medium ${item.bg !== 'bg-white' ? 'text-white' : 'text-green-600'} flex items-center gap-1`}>
                                {item.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                                {item.change}
                            </span>
                            <span className={`ml-2 text-xs ${item.bg !== 'bg-white' ? 'text-amber-100' : 'text-gray-400'}`}>
                                vs last month
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Orders Section */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Recent Transactions</h3>
                        <p className="text-sm text-gray-500">Latest financial activity from users</p>
                    </div>
                    <button className="text-sm font-semibold text-amber-600 hover:text-amber-700">
                        View All
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Course</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {order.id}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-xs font-bold">
                                                {order.user[0]}
                                            </div>
                                            {order.user}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {order.course}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {order.amount}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === 'Completed'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {order.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
