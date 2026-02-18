'use client';

import { useEffect } from 'react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html>
            <body>
                <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-8 text-center">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">Something went wrong!</h2>
                    <p className="mb-8 text-gray-600">
                        We apologize for the inconvenience. An unexpected error has occurred.
                    </p>
                    <button
                        onClick={() => reset()}
                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
