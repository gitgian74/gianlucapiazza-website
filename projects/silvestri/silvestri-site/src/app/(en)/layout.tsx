import { RootHtml } from "@/components/RootHtml";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml locale="en">{children}</RootHtml>;
}
