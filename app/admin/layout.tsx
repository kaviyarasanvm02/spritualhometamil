"use client";

import { useAuth } from "@/components/AuthProvider";
import AdminSidebar from "@/components/AdminSidebar";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Loader2, Menu } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (!loading) {
            if (!user || user.role !== "ADMIN") {
                if (pathname !== "/admin/login") {
                    router.push("/admin/login");
                }
            }
        }
    }, [user, loading, router, pathname]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <Loader2 className="w-10 h-10 animate-spin text-amber-600" />
            </div>
        );
    }

    // If on login page, don't show sidebar
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    if (!user || user.role !== "ADMIN") {
        return null;
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden animate-in fade-in duration-200"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-8 shadow-sm z-10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="p-2 -ml-2 text-gray-600 hover:text-gray-900 md:hidden"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <h2 className="text-xl font-bold text-gray-800 capitalize truncate">
                            {pathname.split("/").pop()?.replace("-", " ") || "Dashboard"}
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold border border-amber-200">
                            {user.name?.[0]?.toUpperCase() || "A"}
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-gray-50/50">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

