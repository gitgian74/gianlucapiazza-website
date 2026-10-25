import { HomeView } from "@/views/HomeView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("it", "home");

export default function Page() {
  return <HomeView locale="it" />;
}
