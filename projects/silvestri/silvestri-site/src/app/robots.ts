import type { MetadataRoute } from "next";
import { INDEXABLE, abs } from "@/lib/site";
/** Required by `output: export`: both files are generated at build time. */
export const dynamic = "force-static";


export default function robots(): MetadataRoute.Robots {
  if (!INDEXABLE) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: abs("/sitemap.xml"),
    host: abs("/"),
  };
}
