import PageComponent from "@/views/PrivacyPolicyPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/privacy-policy");

export default function Page() {
  return <PageComponent />;
}
