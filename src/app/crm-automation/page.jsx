import PageComponent from "@/views/CrmPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/crm-automation");

export default function Page() {
  return <PageComponent />;
}
