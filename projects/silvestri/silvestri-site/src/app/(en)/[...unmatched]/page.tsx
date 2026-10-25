import { notFound } from "next/navigation";

/** Any address outside the ten real routes renders the bilingual 404. */
export default function Unmatched() {
  notFound();
}
