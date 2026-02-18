import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">404</h2>
            <p className="mb-2 text-xl font-semibold text-gray-700">Page Not Found</p>
            <p className="mb-8 text-gray-500">Could not find requested resource</p>
            <Link
                href="/"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Return Home
            </Link>
        </div>
    );
}
