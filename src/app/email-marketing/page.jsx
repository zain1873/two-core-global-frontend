import PageComponent from "@/views/EmailMarketingPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/email-marketing");

export default function Page() {
  return <PageComponent />;
}
