"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, FileVideo, ShoppingCart, LogOut, ArrowLeft, Users } from "lucide-react";
import Image from "next/image";

const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Videos", href: "/admin/videos", icon: FileVideo },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-72 bg-gray-950 text-white min-h-screen flex flex-col border-r border-white/10 shadow-xl relative z-20">
            <div className="p-8 border-b border-white/10 flex flex-col items-center">
                <div className="relative w-full h-12 mb-4">
                    <Image
                        src="/assets/logo.png"
                        alt="Admin Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest">
                    Admin Panel
                </div>
            </div>

            <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200",
                                isActive
                                    ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-900/20"
                                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-gray-500 group-hover:text-amber-500 transition-colors")} />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="p-6 border-t border-white/10 bg-gray-900/50">
                <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-medium">Back to Website</span>
                </Link>
            </div>
        </div>
    );
}
