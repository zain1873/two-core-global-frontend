import PageComponent from "@/views/PaidAdvertisingPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/paid-advertising");

export default function Page() {
  return <PageComponent />;
}
