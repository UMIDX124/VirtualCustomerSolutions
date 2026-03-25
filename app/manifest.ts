import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "VCS Pakistan",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F8F3E1",
    theme_color: "#41431B",
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
