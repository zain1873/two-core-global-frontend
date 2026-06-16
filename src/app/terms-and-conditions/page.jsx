import PageComponent from "@/views/TermsPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/terms-and-conditions");

export default function Page() {
  return <PageComponent />;
}
