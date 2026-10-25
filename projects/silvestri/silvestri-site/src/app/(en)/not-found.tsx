import { NotFoundView } from "@/views/NotFoundView";

export const metadata = { title: "Page not found | Silvestri International", robots: { index: false, follow: false } };

export default function NotFound() {
  return <NotFoundView locale="en" />;
}
