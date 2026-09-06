import type { CSSProperties } from 'react';
import manifest from '@/lib/images.json';

export type ImageName = keyof typeof manifest;
interface Props { name: ImageName; alt: string; sizes?: string; priority?: boolean; className?: string; style?: CSSProperties }

/** Responsives Bild aus der WebP-Pipeline (scripts/images.mjs); Maße verhindern Layout-Shifts. */
export function Picture({ name, alt, sizes = '100vw', priority = false, className, style }: Props) {
  const m = manifest[name];
  const srcSet = m.widths.map((w) => `/img/gen/${name}-${w}.webp ${w}w`).join(', ');
  const largest = m.widths[m.widths.length - 1];
  return (
    <img
      src={`/img/gen/${name}-${largest}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={m.width}
      height={m.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
      style={style}
    />
  );
}
