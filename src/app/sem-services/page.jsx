import PageComponent from "@/views/SemPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/sem-services");

export default function Page() {
  return <PageComponent />;
}
