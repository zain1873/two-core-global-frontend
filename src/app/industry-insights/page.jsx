import PageComponent from "@/views/IndustryInsightsPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/industry-insights");

export default function Page() {
  return <PageComponent />;
}