import type { MetadataRoute } from "next";
import { animals } from "../src/data/animals";

const siteUrl = "https://soulnimal.com";
const lastModified = "2026-05-25";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/animals",
    "/quiz",
    "/compare",
    "/guides",
    ...animals.map((animal) => `/animals/${animal.slug}`)
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8
  }));
}
