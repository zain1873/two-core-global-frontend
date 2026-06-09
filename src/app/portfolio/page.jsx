import PageComponent from "@/views/PortfolioPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/portfolio");

export default function Page() {
  return <PageComponent />;
}
