import PageComponent from "@/views/AboutPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/about");

export default function Page() {
  return <PageComponent />;
}
