import PageComponent from "@/views/pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/pricing");

export default function Page() {
  return <PageComponent />;
}

