import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "VCS Pakistan",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#18230F",
    theme_color: "#1F7D53",
    icons: [
      {
        src: "/logo.svg",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
