import { MetadataRoute } from "next";

// This robots configuration is used to control how search engines crawl the site.
// We are blocking Next.js system files to avoid crawl budget waste
// and helping Google focus only on important SEO pages.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",

        // Allow search engines to crawl all public pages
        allow: "/",

        // Block Next.js internal build assets (JS, CSS, image optimizer routes)
        // These are not real pages and should not be crawled or indexed
        disallow: [
          "/_next/",

          // Block internal API routes (form handlers, server functions)
          "/api/",
        ],
      },
    ],

    // Tell search engines where the sitemap is located
    sitemap: "https://www.all4ps.co/sitemap.xml",

    // Specify preferred host
    host: "https://www.all4ps.co",
  };
}
