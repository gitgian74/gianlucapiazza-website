import { dict } from "@/content";
import type { Locale } from "@/lib/routes";
import { INDEXABLE } from "@/lib/site";

/** Visible only while the build is not an approved, indexable release. */
export function PreviewNote({ locale }: { locale: Locale }) {
  if (INDEXABLE) return null;
  const d = dict(locale);

  return (
    <div className="preview-note">
      <div>
        <strong>{d.preview.label}</strong>
        {d.preview.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
