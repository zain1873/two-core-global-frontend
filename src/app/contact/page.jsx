import PageComponent from "@/views/ContactPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/contact");

export default function Page() {
  return <PageComponent />;
}
