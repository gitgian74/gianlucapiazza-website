import { RootHtml } from "@/components/RootHtml";

export default function ItLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml locale="it">{children}</RootHtml>;
}
