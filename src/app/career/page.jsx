import PageComponent from "@/views/CareerPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/career");

export default function Page() {
  return <PageComponent />;
}