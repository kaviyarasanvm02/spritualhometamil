import LandingPageContent from "@/components/LandingPageContent";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const videos = await prisma.video.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <LandingPageContent videos={videos} />
  );
}
