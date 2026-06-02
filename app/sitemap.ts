import type { MetadataRoute } from "next";

const baseUrl = "https://archoric.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/services/buyer-hesitation-audit",
    "/services/trust-deficit-audit",
    "/services/architecture-engagement",
    "/who-we-help",
    "/who-we-help/healthcare",
    "/who-we-help/construction",
    "/library",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}