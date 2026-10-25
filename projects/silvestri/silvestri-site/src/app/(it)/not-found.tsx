import { NotFoundView } from "@/views/NotFoundView";

export const metadata = { title: "Pagina non trovata | Silvestri International", robots: { index: false, follow: false } };

export default function NotFound() {
  return <NotFoundView locale="it" />;
}
