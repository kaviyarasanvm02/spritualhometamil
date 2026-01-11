"use client";

import { Users, Video, DollarSign, TrendingUp, MoreVertical, Download, ArrowRight } from "lucide-react";
import * as XLSX from 'xlsx';
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function AdminDashboard() {
    const router = useRouter();

    // Simulated data
    const stats = [
        {
            name: 'Total Revenue',
            value: '₹45,231',
            icon: DollarSign,
            change: '+20.1%',
            trend: 'up',
            bg: 'bg-gradient-to-br from-amber-500 to-amber-600',
            iconBg: 'bg-white/20',
            text: 'text-white',
            desc: 'Total earnings this month'
        },
        {
            name: 'Total Users',
            value: '2,338',
            icon: Users,
            change: '+15.1%',
            trend: 'up',
            bg: 'bg-white',
            iconBg: 'bg-indigo-50',
            text: 'text-gray-900',
            desc: 'Active registered users'
        },
        {
            name: 'Active Videos',
            value: '24',
            icon: Video,
            change: '12 new',
            trend: 'neutral',
            bg: 'bg-white',
            iconBg: 'bg-amber-50',
            text: 'text-gray-900',
            desc: 'Videos live on platform'
        },
    ];

    const recentOrders = [
        { id: '#ORD-001', user: 'Vicky', course: 'Manifestation Masterclass', amount: '₹499', status: 'Completed', date: '2 mins ago', avatar: 'V' },
        { id: '#ORD-002', user: 'Priya S.', course: 'Chakra Healing', amount: '₹999', status: 'Pending', date: '15 mins ago', avatar: 'P' },
        { id: '#ORD-003', user: 'Rahul K.', course: 'Manifestation Masterclass', amount: '₹499', status: 'Completed', date: '1 hour ago', avatar: 'R' },
        { id: '#ORD-004', user: 'Anita R.', course: 'Law of Attraction Basic', amount: '₹0', status: 'Completed', date: '3 hours ago', avatar: 'A' },
        { id: '#ORD-005', user: 'Suresh M.', course: 'Meditation Basics', amount: '₹299', status: 'Failed', date: '5 hours ago', avatar: 'S' },
    ];

    const handleDownloadReport = () => {
        const wb = XLSX.utils.book_new();
        const dataForExcel = recentOrders.map(order => ({
            "Order ID": order.id,
            "User": order.user,
            "Course": order.course,
            "Amount": order.amount,
            "Status": order.status,
            "Date": order.date
        }));
        const ws = XLSX.utils.json_to_sheet(dataForExcel);
        XLSX.utils.book_append_sheet(wb, ws, "Recent Orders");
        XLSX.writeFile(wb, "admin_report.xlsx");
    };

    return (
        <div className="space-y-8 animate-fade-in-up pb-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard Overview</h1>
                    <p className="text-gray-500 mt-2 font-medium">Welcome back, Admin. Here's your daily report.</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleDownloadReport}
                        className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                        Download Report
                    </button>
                    <Link
                        href="/admin/videos/create"
                        className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 flex items-center justify-center gap-2"
                    >
                        <Video className="w-4 h-4" />
                        Add New Video
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item) => (
                    <div
                        key={item.name}
                        className={`relative overflow-hidden rounded-[2rem] p-7 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group ${item.bg === 'bg-white' ? 'bg-white' : item.bg}`}
                    >
                        {/* Decorative Background for Colored Card */}
                        {item.bg !== 'bg-white' && (
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl" />
                        )}

                        <div className="flex items-start justify-between relative z-10">
                            <div>
                                <p className={`text-sm font-semibold uppercase tracking-wider ${item.bg !== 'bg-white' ? 'text-amber-100' : 'text-gray-500'}`}>
                                    {item.name}
                                </p>
                                <p className={`mt-3 text-4xl font-extrabold ${item.text}`}>
                                    {item.value}
                                </p>
                            </div>
                            <div className={`p-3.5 rounded-2xl ${item.bg !== 'bg-white' ? 'bg-white/20 text-white' : `${item.iconBg} text-gray-900`}`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center relative z-10">
                            <span className={`inline-flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-lg ${item.bg !== 'bg-white' ? 'bg-white/20 text-white' : 'bg-green-50 text-green-700'}`}>
                                {item.trend === 'up' && <TrendingUp className="w-3.5 h-3.5" />}
                                {item.change}
                            </span>
                            <span className={`ml-3 text-sm font-medium ${item.bg !== 'bg-white' ? 'text-amber-100' : 'text-gray-400'}`}>
                                {item.desc}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Orders Section */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
                <div className="p-8 border-b border-gray-100 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Recent Transactions</h3>
                        <p className="text-sm text-gray-500 mt-1">Latest purchases from across the platform</p>
                    </div>
                    <Link href="/admin/orders" className="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 group">
                        View All
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Order ID</th>
                                <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">User</th>
                                <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Course</th>
                                <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Amount</th>
                                <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-8 py-5 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50/80 transition-colors group">
                                    <td className="px-8 py-5 text-sm font-semibold text-gray-900">
                                        {order.id}
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center text-amber-800 font-bold shadow-sm">
                                                {order.avatar}
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700">{order.user}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-sm text-gray-600 font-medium">
                                        {order.course}
                                    </td>
                                    <td className="px-8 py-5 text-sm font-bold text-gray-900">
                                        {order.amount}
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${order.status === 'Completed'
                                            ? 'bg-green-100 text-green-700 border border-green-200'
                                            : order.status === 'Pending'
                                                ? 'bg-amber-100 text-amber-700 border border-amber-200'
                                                : 'bg-red-100 text-red-700 border border-red-200'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-sm text-gray-500 font-medium text-right">
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
