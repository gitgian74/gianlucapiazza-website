import { ProfessionalsView } from "@/views/ProfessionalsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "professionals");

export default function Page() {
  return <ProfessionalsView locale="en" />;
}
