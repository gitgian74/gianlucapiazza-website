import { ProfessionalsView } from "@/views/ProfessionalsView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("it", "professionals");

export default function Page() {
  return <ProfessionalsView locale="it" />;
}
