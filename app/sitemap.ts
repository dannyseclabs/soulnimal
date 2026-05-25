import type { MetadataRoute } from "next";

const siteUrl = "https://soulnimal.com";
const lastModified = "2026-05-25";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/animals", "/quiz", "/compare", "/guides"];

  // Add future `/animals/[slug]` profile URLs here once real animal data exists.
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8
  }));
}
