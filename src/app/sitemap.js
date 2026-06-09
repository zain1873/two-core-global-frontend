import { routes, absoluteUrl } from "@/lib/seo";

// Generates /sitemap.xml from the central route list.
export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.path === "/" ? "daily" : "weekly",
    priority: route.priority ?? 0.7,
  }));
}
