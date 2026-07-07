import { buildMetadata } from "@/lib/seo";
import TestimonialsPage from "@/components/TestimonialsPage";

export const metadata = buildMetadata("/testimonials");

export default function Page() {
  return <TestimonialsPage />;
}
