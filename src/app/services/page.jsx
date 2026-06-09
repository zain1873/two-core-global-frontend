import PageComponent from "@/views/ServicesPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/services");

export default function Page() {
  return <PageComponent />;
}
