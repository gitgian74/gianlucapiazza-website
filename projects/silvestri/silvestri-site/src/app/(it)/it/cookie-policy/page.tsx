import { LegalView } from "@/views/LegalView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("it", "cookies");

export default function Page() {
  return <LegalView locale="it" page="cookies" />;
}
