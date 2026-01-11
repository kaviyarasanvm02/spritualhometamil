import LandingPageContent from "@/components/LandingPageContent";
import prisma from "@/lib/prisma";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Spiritual Home Tamil. Start your journey of spiritual awakening, healing, and manifestation today.',
  alternates: {
    canonical: 'https://spiritualhometamil.com',
  },
};

export default async function Home() {
  const videos = await prisma.video.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <LandingPageContent videos={videos} />
  );
}
