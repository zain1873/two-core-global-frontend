import PageComponent from "@/views/BrandIdentityPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/brand-identity");

export default function Page() {
  return <PageComponent />;
}
