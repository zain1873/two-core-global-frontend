import PageComponent from "@/views/MobileDevelopmentPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/mobile-app-development");

export default function Page() {
  return <PageComponent />;
}
