import PageComponent from "@/views/UiUxPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/ui-ux-design");

export default function Page() {
  return <PageComponent />;
}
