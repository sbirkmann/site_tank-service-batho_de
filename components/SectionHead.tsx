interface Props { eyebrow: string; title: string; lead?: string; num?: string; split?: boolean; className?: string; id?: string }
export function SectionHead({ eyebrow, title, lead, num, split = true, className = '', id }: Props) {
  return (
    <div className={`shead ${className}${split && lead ? ' shead--split' : ''}`}>
      <div className="shead__main">
        <div className="shead__top reveal">
          {num && <span className="num">{num}</span>}
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2 id={id} className="reveal" style={{ ['--d' as string]: '80ms' }}>{title}</h2>
      </div>
      {lead && <p className="lead reveal" style={{ ['--d' as string]: '160ms' }}>{lead}</p>}
    </div>
  );
}
