import { AboutView } from "@/views/AboutView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("it", "about");

export default function Page() {
  return <AboutView locale="it" />;
}
