import { ContactView } from "@/views/ContactView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("it", "contact");

export default function Page() {
  return <ContactView locale="it" />;
}
