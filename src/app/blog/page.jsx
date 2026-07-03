import PageComponent from "@/views/BlogPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/blog");

export default function Page() {
  return <PageComponent />;
}
