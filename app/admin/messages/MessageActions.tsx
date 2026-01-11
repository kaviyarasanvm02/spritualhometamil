"use client";

import { useState } from "react";
import { Check, MailOpen, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

interface MessageActionsProps {
    id: string;
    currentStatus: string;
}

export default function MessageActions({ id, currentStatus }: MessageActionsProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const toggleStatus = async () => {
        setLoading(true);
        try {
            const newStatus = currentStatus === 'UNREAD' ? 'READ' : 'UNREAD';

            const response = await fetch(`/api/contact/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (!response.ok) {
                throw new Error('Failed to update status');
            }

            // Refresh the page to show new data
            router.refresh();
        } catch (error) {
            console.error('Error updating status:', error);
            alert("Failed to update status");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={toggleStatus}
            disabled={loading}
            title={currentStatus === 'UNREAD' ? "Mark as Read" : "Mark as Unread"}
            className={`p-2 rounded-lg transition-colors ${currentStatus === 'UNREAD'
                    ? 'hover:bg-green-500/10 text-gray-400 hover:text-green-500'
                    : 'hover:bg-amber-500/10 text-green-500 hover:text-amber-500'
                }`}
        >
            {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
            ) : currentStatus === 'UNREAD' ? (
                <Check className="w-4 h-4" />
            ) : (
                <MailOpen className="w-4 h-4" />
            )}
        </button>
    );
}
