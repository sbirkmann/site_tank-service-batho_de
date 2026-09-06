import { Icon } from './Icon';
import type { Block } from '@/lib/data/services';
/** Strukturierte Inhaltsblöcke der Leistungsseiten: Text, Hinweis, Faktenliste, Optionen (A/B/C), Prozessstrecke */
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="blocks">
      {blocks.map((b, i) => {
        const d = { ['--d' as string]: `${Math.min(i, 3) * 60}ms` };
        if (b.type === 'text') return (
          <section key={i} className="blk reveal" style={d}>
            {b.heading && <h2 className="blk__h">{b.heading}</h2>}
            <div className="blk__prose">{b.paragraphs.map((p, k) => <p key={k}>{p}</p>)}</div>
          </section>
        );
        if (b.type === 'note') return (
          <aside key={i} className="blk blk--note reveal" style={d}><span className="blk--note__mark"><Icon name="check" /></span><p>{b.text}</p></aside>
        );
        if (b.type === 'list') return (
          <section key={i} className="blk reveal" style={d}>
            {b.heading && <h2 className="blk__h">{b.heading}</h2>}
            {b.intro && <p className="blk__intro">{b.intro}</p>}
            <ul className="checklist">{b.items.map((it) => <li key={it}><Icon name="check" /><span>{it}</span></li>)}</ul>
          </section>
        );
        if (b.type === 'options') return (
          <section key={i} className="blk reveal" style={d}>
            {b.heading && <h2 className="blk__h">{b.heading}</h2>}
            {b.intro && <p className="opts__intro">{b.intro}</p>}
            <ol className="opts">{b.items.map((it, k) => <li key={k} className="opts__item"><span className="opts__k" aria-hidden="true">{String.fromCharCode(65 + k)}</span><p>{it}</p></li>)}</ol>
          </section>
        );
        // steps: Prozessstrecke, bei langen Listen in Gruppen gegliedert
        const groups = b.items.length >= 9 ? [[0, 'Vorbereitung'], [3, 'Reinigung und Prüfung'], [8, 'Abschluss']] as const : [];
        return (
          <section key={i} className="blk reveal" style={d}>
            {b.heading && <h2 className="blk__h">{b.heading}</h2>}
            {b.intro && <p className="blk__intro">{b.intro}</p>}
            <ol className="proc2">
              {b.items.map((it, k) => {
                const g = groups.find((x) => x[0] === k);
                return [
                  g ? <li key={`g${k}`} className="proc2__group" aria-hidden="true">{g[1]}</li> : null,
                  <li key={k} className="proc2__item"><span className="proc2__num">{String(k + 1).padStart(2, '0')}</span><p>{it}</p></li>,
                ];
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
