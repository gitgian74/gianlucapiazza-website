import type { MediaRef } from "@/content/types";
import { asset } from "@/lib/site";

/**
 * Photographs are licensed and served by the site (docs/ASSET-REGISTRY.md).
 * The portraits are not: a MediaRef without src renders the declared slot,
 * which states what the final image must be rather than inventing a face.
 */
export function Media({
  media,
  ratio,
  grayscale = false,
  ink = false,
  caption,
  priority = false,
}: {
  media: MediaRef;
  ratio: "16-10" | "4-5" | "21-9";
  grayscale?: boolean;
  ink?: boolean;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure>
      {media.src ? (
        <div className={`media media--${ratio}${grayscale ? " media--grayscale" : ""}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(media.src)}
            alt={media.alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            width={media.width}
            height={media.height}
          />
        </div>
      ) : (
        <div className={`slot media--${ratio}${ink ? " slot--ink" : ""}`} role="img" aria-label={media.subject}>
          <span className="slot__badge" aria-hidden="true">
            Asset
          </span>
          <p className="slot__subject">{media.subject}</p>
          <p className="slot__spec">{media.spec}</p>
        </div>
      )}
      {caption ? <figcaption className="caption">{caption}</figcaption> : null}
    </figure>
  );
}
