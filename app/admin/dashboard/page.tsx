"use client";

import { Users, Video, DollarSign, TrendingUp, MoreVertical, Download, ArrowRight, Loader2 } from "lucide-react";
import * as XLSX from 'xlsx';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function AdminDashboard() {
    const router = useRouter();
    const [stats, setStats] = useState([
        {
            name: 'Total Revenue',
            value: '₹0',
            icon: DollarSign,
            change: '-',
            trend: 'neutral',
            bg: 'bg-gradient-to-br from-amber-500 to-amber-600',
            iconBg: 'bg-white/20',
            text: 'text-white',
            desc: 'Total earnings'
        },
        {
            name: 'Total Users',
            value: '0',
            icon: Users,
            change: '-',
            trend: 'neutral',
            bg: 'bg-white',
            iconBg: 'bg-indigo-50',
            text: 'text-gray-900',
            desc: 'Registered users'
        },
        {
            name: 'Active Videos',
            value: '0',
            icon: Video,
            change: '-',
            trend: 'neutral',
            bg: 'bg-white',
            iconBg: 'bg-amber-50',
            text: 'text-gray-900',
            desc: 'Videos on platform'
        },
    ]);

    const [recentOrders, setRecentOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDashboardData() {
            try {
                const [usersRes, videosRes, ordersRes] = await Promise.all([
                    fetch('/api/users'),
                    fetch('/api/videos'),
                    fetch('/api/orders')
                ]);

                const usersData = await usersRes.json();
                const videosData = await videosRes.json();
                const ordersData = await ordersRes.json();

                if (usersData.users && videosData.videos && ordersData.orders) {
                    // Calculate Revenue
                    const totalRevenue = ordersData.orders
                        .filter((o: import("@/types").Order) => o.status === 'PAID')
                        .reduce((sum: number, o: import("@/types").Order) => sum + (o.amount || 0), 0);

                    // Update Stats
                    setStats([
                        {
                            name: 'Total Revenue',
                            value: `₹${totalRevenue.toLocaleString('en-IN')}`,
                            icon: DollarSign,
                            change: '+0%', // Dynamic change requires historical data, keeping placeholder
                            trend: 'up',
                            bg: 'bg-gradient-to-br from-amber-500 to-amber-600',
                            iconBg: 'bg-white/20',
                            text: 'text-white',
                            desc: 'Total earnings'
                        },
                        {
                            name: 'Total Users',
                            value: usersData.users.length.toLocaleString(),
                            icon: Users,
                            change: `+${usersData.users.length}`,
                            trend: 'up',
                            bg: 'bg-white',
                            iconBg: 'bg-indigo-50',
                            text: 'text-gray-900',
                            desc: 'Total registered'
                        },
                        {
                            name: 'Active Videos',
                            value: videosData.videos.length.toString(),
                            icon: Video,
                            change: `${videosData.videos.length} total`,
                            trend: 'neutral',
                            bg: 'bg-white',
                            iconBg: 'bg-amber-50',
                            text: 'text-gray-900',
                            desc: 'Course videos'
                        },
                    ]);

                    // Map Recent Orders
                    const mappedOrders = ordersData.orders.slice(0, 10).map((order: import("@/types").Order) => ({
                        id: `#${order.id.slice(-6).toUpperCase()}`,
                        realId: order.id,
                        user: order.user?.name || 'Unknown',
                        course: order.video?.title || 'Unknown Course',
                        amount: `₹${(order.amount || 0).toLocaleString('en-IN')}`,
                        status: order.status === 'PAID' ? 'Completed' : order.status,
                        date: new Date(order.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
                        }),
                        avatar: (order.user?.name || 'U')[0].toUpperCase()
                    }));
                    setRecentOrders(mappedOrders);
                }
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchDashboardData();
    }, []);

    const handleDownloadReport = () => {
        const wb = XLSX.utils.book_new();
        const dataForExcel = recentOrders.map(order => ({
            "Order ID": order.realId,
            "User": order.user,
            "Course": order.course,
            "Amount": order.amount,
            "Status": order.status,
            "Date": order.date
        }));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(dataForExcel), "Recent Orders");
        XLSX.writeFile(wb, "admin_report.xlsx");
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
            </div>
        );
    }

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
                            {recentOrders.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-8 py-10 text-center text-gray-500">
                                        No recent transactions found.
                                    </td>
                                </tr>
                            ) : (
                                recentOrders.map((order) => (
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
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
