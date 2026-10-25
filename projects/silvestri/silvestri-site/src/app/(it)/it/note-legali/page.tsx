import { LegalView } from "@/views/LegalView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("it", "legal");

export default function Page() {
  return <LegalView locale="it" page="legal" />;
}
