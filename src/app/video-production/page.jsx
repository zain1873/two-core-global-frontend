import PageComponent from "@/views/VideoProductionPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/video-production");

export default function Page() {
  return <PageComponent />;
}
