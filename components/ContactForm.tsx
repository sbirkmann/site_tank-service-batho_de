'use client';
import { useState, type FormEvent } from 'react';
import { Icon } from './Icon';
import { site } from '@/lib/data/site';
/** Felder und Einwilligungstext entsprechen dem Formular der bestehenden Website. Ohne NEXT_PUBLIC_FORM_ENDPOINT wird das Mailprogramm geöffnet. */
export function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '';
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);
  const [invalid, setInvalid] = useState<string[]>([]);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const bad: string[] = [];
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[required]').forEach((el) => {
      const ok = el.type === 'checkbox' ? (el as HTMLInputElement).checked : el.checkValidity();
      if (!ok) bad.push(el.name);
    });
    setInvalid(bad);
    if (bad.length) { setStatus({ msg: 'Bitte korrigieren Sie Ihre Eingaben in den markierten Feldern.', ok: false }); return; }
    const fd = new FormData(form);
    if (fd.get('_company')) return;
    if (endpoint) {
      try {
        const r = await fetch(endpoint, { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
        if (!r.ok) throw new Error();
        form.reset(); setStatus({ msg: 'Ihre Formularnachricht wurde erfolgreich versendet.', ok: true });
      } catch { setStatus({ msg: 'Beim Versenden des Formulars ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.', ok: false }); }
    } else {
      const body = `Name: ${fd.get('name')}\nE-Mail: ${fd.get('email')}\n\n${fd.get('message')}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Anfrage über die Website')}&body=${encodeURIComponent(body)}`;
      setStatus({ msg: 'Ihr E-Mail-Programm wird geöffnet. Bitte senden Sie die vorbereitete Nachricht ab.', ok: true });
    }
  }
  const cls = (n: string) => `field${invalid.includes(n) ? ' is-invalid' : ''}`;
  return (
    <form className="cform" method="post" action={endpoint || '#'} onSubmit={onSubmit} noValidate>
      <div className="cform__grid">
        <div className={cls('name')}><label htmlFor="f-name">Name <span aria-hidden="true">*</span></label><input id="f-name" name="name" type="text" autoComplete="name" required /></div>
        <div className={cls('email')}><label htmlFor="f-email">E-Mail-Adresse <span aria-hidden="true">*</span></label><input id="f-email" name="email" type="email" autoComplete="email" required /></div>
        <div className={`${cls('message')} cform__full`}><label htmlFor="f-msg">Nachricht <span aria-hidden="true">*</span></label><textarea id="f-msg" name="message" required /></div>
        <div className="cform__full cform__hp" aria-hidden="true"><label>Firma<input name="_company" tabIndex={-1} autoComplete="off" /></label></div>
        <label className={`check cform__full${invalid.includes('consent') ? ' is-invalid' : ''}`}>
          <input type="checkbox" name="consent" required />
          <span>Hiermit erkläre ich mich einverstanden, dass meine in das Kontaktformular eingegebenen Daten elektronisch gespeichert und zum Zweck der Kontaktaufnahme verarbeitet und genutzt werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen kann. <span aria-hidden="true">*</span></span>
        </label>
      </div>
      <p className={`cform__status${status ? (status.ok ? ' is-ok' : ' is-error') : ''}`} aria-live="polite">{status?.msg}</p>
      <div className="cform__foot">
        <button type="submit" className="btn btn--accent">Nachricht senden <Icon name="arrow" /></button>
        <span className="field__hint">Felder, die mit * bezeichnet sind, sind Pflichtfelder.</span>
      </div>
    </form>
  );
}
