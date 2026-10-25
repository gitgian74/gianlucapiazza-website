import { PracticeView } from "@/views/PracticeView";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "practice");

export default function Page() {
  return <PracticeView locale="en" />;
}
