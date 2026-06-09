import PageComponent from "@/views/EcommercePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/ecommerce");

export default function Page() {
  return <PageComponent />;
}
