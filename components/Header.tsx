'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Icon } from './Icon';
import { nav, site } from '@/lib/data/site';
import { services } from '@/lib/data/services';

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isActive = (href: string) => (href === '/' ? path === '/' : path.startsWith(href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    const mq = window.matchMedia('(min-width: 1100px)');
    const onMq = (e: MediaQueryListEvent) => { if (e.matches) setOpen(false); };
    mq.addEventListener('change', onMq);
    return () => { document.removeEventListener('keydown', onKey); mq.removeEventListener('change', onMq); };
  }, [open]);

  return (
    <>
      <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container container--wide header__inner">
          <Logo />
          <nav className="nav" aria-label="Hauptnavigation">
            <ul className="nav__list">
              {nav.map((item) => (
                <li key={item.href} className={`nav__item${item.children ? ' nav__item--has-sub' : ''}`}>
                  <Link href={item.href} className={`nav__link${isActive(item.href) ? ' is-active' : ''}`} aria-current={isActive(item.href) ? 'page' : undefined}>
                    {item.label}
                    {item.children && <Icon name="chevron" className="nav__chev" />}
                  </Link>
                  {item.children && (
                    <div className="mega" role="group" aria-label="Leistungen">
                      <div className="mega__inner">
                        <div className="mega__intro">
                          <span className="eyebrow">Leistungen</span>
                          <p>Alles rund um Ihre Tankanlage: von der Reinigung bis zur Neuanlage.</p>
                          <Link href="/leistungen/" className="link-arrow">Alle Leistungen <Icon name="arrow" /></Link>
                        </div>
                        <ul className="mega__list">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link href={`/leistungen/${s.slug}/`} className={`mega__link${path.startsWith(`/leistungen/${s.slug}/`) ? ' is-active' : ''}`}>
                                <span className="mega__idx">{s.index}</span>
                                <span className="mega__txt"><strong>{s.short}</strong><small>{s.teaser}</small></span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <a href={site.phoneHref} className="header__phone"><Icon name="phone" /><span>{site.phone}</span></a>
            <Link href="/kontakt/" className="btn btn--accent header__cta">Anfrage</Link>
            <button className="burger" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
              <span className="visually-hidden">{open ? 'Menü schließen' : 'Menü öffnen'}</span>
              <span className="burger__bar" /><span className="burger__bar" /><span className="burger__bar" />
            </button>
          </div>
        </div>
      </header>

      <div className="mobile" id="mobile-nav" hidden={!open}>
        <div className="mobile__scroll">
          <ul className="mobile__list">
            {nav.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <details className="mobile__details" open={path.startsWith('/leistungen/')}>
                    <summary className="mobile__link">{item.label}<Icon name="chevron" /></summary>
                    <ul className="mobile__sub">
                      <li><Link href="/leistungen/" className="mobile__sublink"><span className="mono">—</span> Übersicht</Link></li>
                      {services.map((s) => <li key={s.slug}><Link href={`/leistungen/${s.slug}/`} className="mobile__sublink"><span className="mono">{s.index}</span> {s.short}</Link></li>)}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} className={`mobile__link${isActive(item.href) ? ' is-active' : ''}`}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile__contact">
            <a href={site.phoneHref} className="btn btn--light"><Icon name="phone" /> {site.phone}</a>
            <a href={`mailto:${site.email}`} className="btn btn--outline-light"><Icon name="mail" /> E-Mail schreiben</a>
            <p className="mobile__addr">{site.name}<br />{site.street}<br />{site.zip} {site.city}</p>
          </div>
        </div>
      </div>
    </>
  );
}
