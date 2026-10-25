import type { MediaRef } from "@/content/types";
import { REFERENCE_MEDIA } from "@/lib/site";

/**
 * No media is licensed yet. Default: an explicit, labelled slot that states
 * what the final image must be. NEXT_PUBLIC_REFERENCE_MEDIA=true swaps in the
 * unlicensed stock reference for art-direction review only.
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
  const useReference = REFERENCE_MEDIA && Boolean(media.referenceSrc);

  return (
    <figure>
      {useReference ? (
        <div className={`media media--${ratio}${grayscale ? " media--grayscale" : ""}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media.referenceSrc}
            alt={media.alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            width={1400}
            height={875}
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
