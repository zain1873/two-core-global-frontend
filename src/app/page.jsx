import PageComponent from "@/views/home";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/");

export default function Page() {
  return <PageComponent />;
}
