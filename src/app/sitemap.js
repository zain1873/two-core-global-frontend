import { routes, absoluteUrl } from "@/lib/seo";
import { getAllPosts } from "@/data/blogPosts";

// Generates /sitemap.xml from the central route list + blog detail pages.
export default function sitemap() {
  const lastModified = new Date();

  const staticEntries = routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.path === "/" ? "daily" : "weekly",
    priority: route.priority ?? 0.7,
  }));

  const blogEntries = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
