import PageComponent from "@/views/websiteDevelopment";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/website-development");

export default function Page() {
  return <PageComponent />;
}
