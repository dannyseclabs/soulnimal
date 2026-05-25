import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Soulnimal",
    short_name: "Soulnimal",
    description:
      "A warm, realistic animal discovery platform for finding companions that fit your real life.",
    start_url: "/",
    display: "standalone",
    background_color: "#E8E0C8",
    theme_color: "#E8E0C8",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
