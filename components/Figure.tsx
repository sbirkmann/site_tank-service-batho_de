import type { ImageName } from './Picture';
import { Picture } from './Picture';
interface Props { name: ImageName; alt: string; caption?: string; num?: string; ratio?: string; sizes?: string; position?: string; className?: string; priority?: boolean; marks?: boolean; delay?: number }
/** Bildfläche mit editorialer Bildunterschrift (Nummer + Caption) und Eckmarkierungen */
export function Figure({ name, alt, caption, num, ratio = '4 / 3', sizes = '(min-width: 900px) 50vw, 100vw', position = '50% 50%', className = '', priority, marks = true, delay = 0 }: Props) {
  return (
    <figure className={`fig reveal ${className}`} style={{ ['--ratio' as string]: ratio, ['--pos' as string]: position, ['--d' as string]: `${delay}ms` }}>
      <div className="fig__frame">
        <Picture name={name} alt={alt} sizes={sizes} priority={priority} />
        {marks && <span className="ticks" aria-hidden="true" />}
      </div>
      {caption && (
        <figcaption className="fig__cap">
          {num && <span className="num">{num}</span>}
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
