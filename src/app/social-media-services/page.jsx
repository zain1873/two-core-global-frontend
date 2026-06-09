import PageComponent from "@/views/SocialMediaPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/social-media-services");

export default function Page() {
  return <PageComponent />;
}
