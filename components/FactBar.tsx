export function FactBar({ items, dark = false }: { items: { label: string; value: string; note?: string }[]; dark?: boolean }) {
  return (
    <ul className={`factbar${dark ? ' factbar--dark' : ''}`}>
      {items.map((f, i) => (
        <li key={f.label} className="factbar__item reveal" style={{ ['--d' as string]: `${i * 70}ms` }}>
          <span className="factbar__label">{f.label}</span>
          <span className="factbar__value">{f.value}</span>
          {f.note && <span className="factbar__note">{f.note}</span>}
        </li>
      ))}
    </ul>
  );
}
