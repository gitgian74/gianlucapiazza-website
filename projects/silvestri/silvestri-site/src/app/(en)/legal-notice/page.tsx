import { LegalView } from "@/views/LegalView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "legal");

export default function Page() {
  return <LegalView locale="en" page="legal" />;
}
