import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "DigitalPoint",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3fb",
    theme_color: "#3E1E68",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}

