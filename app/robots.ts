import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.all4ps.co/sitemap.xml",
    host: "https://www.all4ps.co",
  };
}
