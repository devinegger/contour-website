/**
 * Cloudflare image-resizing helpers.
 *
 * Images uploaded through Tina live at `/uploads/<file>` on the same zone. In
 * production — once Cloudflare Image Resizing is enabled on the zone — we route
 * them through the `/cdn-cgi/image/` transformation endpoint to resize,
 * compress, and format-negotiate (AVIF/WebP) on the fly. Anywhere the feature
 * is off (local `astro dev`, previews, a zone without resizing) `/cdn-cgi/image/`
 * doesn't exist, so we fall back to the raw `src` untouched.
 *
 * Gate: `PUBLIC_IMAGE_RESIZING=true` at build time. Off by default so local
 * builds and dev serve the original files. Set it in the Cloudflare build
 * environment (`build:cloud`) once resizing is live on the zone.
 */
const RESIZING_ENABLED =
  import.meta.env.PUBLIC_IMAGE_RESIZING === 'true' ||
  // @ts-expect-error — Vite may coerce the var to a boolean in some setups.
  import.meta.env.PUBLIC_IMAGE_RESIZING === true;

export interface CfImageOptions {
  width?: number;
  height?: number;
  /** 1–100; default 80. */
  quality?: number;
  fit?: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad';
  format?: 'auto' | 'avif' | 'webp';
}

/** Whether transformations are active (exposed for templates that branch on it). */
export const imageResizingEnabled = RESIZING_ENABLED;

/**
 * Normalize a media src to its same-zone `/uploads/` path.
 *
 * Cloud builds (TinaCloud) rewrite media fields to absolute
 * `https://assets.tina.io/<project>/<path>` URLs, but the same bytes are
 * committed to the repo at `/uploads/<path>` (Tina `publicFolder: public`,
 * `mediaRoot: uploads`) and served from our own zone — which is what
 * Cloudflare can transform. Map the Tina CDN URL back to that path. Local
 * builds already use `/uploads/...`, so they pass through unchanged.
 */
export function toZoneUploadPath(src: string): string {
  const m = src.match(/^https?:\/\/assets\.tina\.io\/[^/]+\/(.+)$/);
  return m ? `/uploads/${m[1]}` : src;
}

/**
 * Build a transformed image URL, or return the raw `src` when resizing is off
 * or the source isn't a same-zone upload (other absolute/remote URLs pass
 * through).
 */
export function cfImage(src: string | undefined | null, opts: CfImageOptions = {}): string {
  if (!src) return '';
  if (!RESIZING_ENABLED) return src;
  const zonePath = toZoneUploadPath(src);
  if (!zonePath.startsWith('/')) return src;
  const { width, height, quality = 80, fit = 'scale-down', format = 'auto' } = opts;
  const params = [
    width && `width=${Math.round(width)}`,
    height && `height=${Math.round(height)}`,
    `quality=${quality}`,
    `fit=${fit}`,
    `format=${format}`,
  ]
    .filter(Boolean)
    .join(',');
  return `/cdn-cgi/image/${params}${zonePath}`;
}

/**
 * DPR srcset (1x + 2x) for a target CSS display width. Returns `undefined`
 * when resizing is off or `src` isn't a transformable upload, so the caller
 * can omit the attribute entirely.
 */
export function cfSrcset(
  src: string | undefined | null,
  width: number,
  opts: CfImageOptions = {}
): string | undefined {
  if (!src || !RESIZING_ENABLED) return undefined;
  if (!toZoneUploadPath(src).startsWith('/')) return undefined;
  return [
    `${cfImage(src, { ...opts, width })} 1x`,
    `${cfImage(src, { ...opts, width: width * 2 })} 2x`,
  ].join(', ');
}

/**
 * Named display sizes shared by the standalone image block and the rich-text
 * image embed. `full` means "fill the available column" — no max-width cap.
 */
export const IMAGE_SIZES = {
  small: 480,
  medium: 768,
  large: 1024,
  full: null,
} as const;

export type ImageSizeName = keyof typeof IMAGE_SIZES;

/** CSS max-width for a named size (px), or `null` for `full`. */
export function sizeToMaxWidth(size: ImageSizeName | undefined | null): number | null {
  if (!size) return IMAGE_SIZES.large;
  return IMAGE_SIZES[size] ?? IMAGE_SIZES.large;
}

/** Largest CF variant width to request for a named size (full caps at 1600). */
export function sizeToVariantWidth(size: ImageSizeName | undefined | null): number {
  const max = sizeToMaxWidth(size);
  return max ?? 1600;
}
