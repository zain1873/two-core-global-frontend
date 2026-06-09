import PageComponent from "@/views/SeoPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/seo-services");

export default function Page() {
  return <PageComponent />;
}
