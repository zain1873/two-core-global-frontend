import { notFound } from "next/navigation";
import BlogDetailView from "@/views/BlogDetailPage";
import { getPostBySlug, getAllSlugs } from "@/data/blogPosts";
import { siteConfig, absoluteUrl } from "@/lib/seo";

// Pre-render every known blog slug at build time. When the backend is live,
// fetch the slug list here instead of reading the local data module.
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = absoluteUrl(`/blog/${post.slug}`);
  const image = post.image || siteConfig.ogImage;

  return {
    title: `${post.title} | ${siteConfig.name} Blog`,
    description: post.excerpt,
    keywords: [post.category, "Two Core Global blog", "digital agency insights"],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: siteConfig.name,
      type: "article",
      locale: siteConfig.locale,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
      site: siteConfig.twitter,
    },
  };
}

export default function Page({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  return <BlogDetailView post={post} />;
}
