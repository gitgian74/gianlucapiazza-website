import { LegalView } from "@/views/LegalView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "cookies");

export default function Page() {
  return <LegalView locale="en" page="cookies" />;
}
