import homepageFallback from "@/data/homepage.json";

export type HomePageData = typeof homepageFallback;


export async function getHomePageData(): Promise<HomePageData> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/homepage`, {
      next: { revalidate: process.env.NEXT_PUBLIC_REVALIDATE_INTERVAL ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_INTERVAL) : 120 },
    });
    if (!response.ok) return homepageFallback;
    return (await response.json()) as HomePageData;
  } catch {
    return homepageFallback;
  }
}
