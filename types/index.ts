export interface Video {
    id: string;
    title: string;
    description?: string;
    price: number;
    thumbnail?: string;
    videoUrl?: string;
    createdAt: string | Date;
}

export interface User {
    id: string;
    name?: string | null;
    email: string;
    role: 'USER' | 'ADMIN';
    createdAt: string | Date;
}

export interface Order {
    id: string;
    user?: { name: string | null };
    video?: { title: string };
    amount: number;
    status: 'PENDING' | 'PAID' | 'FAILED';
    createdAt: string | Date;
}

export interface DashboardStats {
    users: User[];
    videos: Video[];
    orders: Order[];
}
