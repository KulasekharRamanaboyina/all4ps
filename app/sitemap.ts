import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  //  Fetch blog slugs from Sanity
  const posts = await client.fetch(
    `*[_type=="post"]{
      "slug": slug.current,
      _updatedAt
    }`,
  );

  const blogUrls = posts.map((post: any) => ({
    url: `https://www.all4ps.co/blog/${post.slug}`,
    lastModified: post._updatedAt,
    priority: 0.7,
  }));

  return [
    // Home
    {
      url: "https://www.all4ps.co/",
      priority: 1.0,
    },

    // Core Pages
    {
      url: "https://www.all4ps.co/about",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/services",
      priority: 0.9,
    },
    {
      url: "https://www.all4ps.co/portfolio",
      priority: 0.7,
    },
    {
      url: "https://www.all4ps.co/contact",
      priority: 0.9,
    },

    // Service Pages
    {
      url: "https://www.all4ps.co/services/brand-identity",
      priority: 0.9,
    },
    {
      url: "https://www.all4ps.co/services/marketing-strategy",
      priority: 0.9,
    },
    {
      url: "https://www.all4ps.co/services/growth-marketing",
      priority: 0.9,
    },
    {
      url: "https://www.all4ps.co/services/content-marketing",
      priority: 0.9,
    },
    {
      url: "https://www.all4ps.co/services/seo-sem",
      priority: 0.9,
    },
    {
      url: "https://www.all4ps.co/services/website-services",
      priority: 0.9,
    },

    // Case Studies
    {
      url: "https://www.all4ps.co/portfolio/motherson",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/portfolio/anscer",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/portfolio/unbox",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/portfolio/anzo",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/portfolio/kloudlite",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/portfolio/synergy",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/portfolio/xpstays",
      priority: 0.8,
    },
    {
      url: "https://www.all4ps.co/portfolio/panchayath",
      priority: 0.8,
    },
    //  BLOGS 
    ...blogUrls,
  ];
}
