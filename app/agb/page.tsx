import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
export const metadata: Metadata = { title: 'Allgemeine Geschäftsbedingungen', description: 'Allgemeine Geschäftsbedingungen von Tank Service Batho.' };
export default function Page() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Allgemeine Geschäftsbedingungen" crumbs={[{ label: 'Impressum', href: '/impressum/' }, { label: 'AGB' }]} />
      <section className="section">
        <div className="container agb">
          <div className="doc reveal">
            <div className="doc__meta"><span>Tank Service Batho</span><span>Allgemeine Geschäftsbedingungen</span></div>
            <h2>Angebote und Vereinbarungen</h2>
            <p>Unsere Angebote sind freibleibend. Abschlüsse und Vereinbarungen werden erst durch unsere schriftliche Bestätigung für uns verbindlich.</p>
            <p>Bei Stornierung eines Auftrages durch den Kunden werden 30 % des vereinbarten Preises als Aufwandsentschädigung in Rechnung gestellt.</p>
            <p>Wir bemühen uns, die vereinbarten Termine einzuhalten. Bei Nichteinhalten eines Termins aufgrund unvorhersehbarer Ereignisse, wie Öl-Alarm, Krankheit, schlechtes Wetter, Fahrverbot für GGVS-Fahrzeuge u. a., kann der Auftraggeber keine Schadensersatzansprüche geltend machen.</p>
            <p>Unsere Angebote unterbreiten wir in der Annahme, dass die Angaben des Auftraggebers bzw. Tankbetreibers korrekt sind. Bei falschen Angaben bezüglich Tankgröße, Bauart, vorhandenem Korrosionsschutz oder eingebauter Leckschutzauskleidung (Innenhülle) ändern sich die Preise dementsprechend.</p>
            <h2>Technische Voraussetzungen</h2>
            <p>Bei unseren Angeboten gehen wir davon aus, dass die Anlagen den Technischen Richtlinien für brennbare Flüssigkeiten (TRbF) sowie der Verordnung für Anlagen wassergefährdender Stoffe (VAwS) entsprechen und die Arbeiten reibungslos, ohne Wartezeiten ausgeführt werden können.</p>
            <p><strong>Auszug TRbF 220-5.4:</strong> Über jeder Einsteigeöffnung eines vollständig im Erdreich eingebauten Tanks muss ein Domschacht angeordnet sein. Domschächte müssen so geräumig sein, dass alle Rohranschlüsse zugänglich sind und die erforderlichen Arbeiten und Prüfungen im Schacht unbehindert durchgeführt werden können. Die lichte Weite des Domschachtes soll 1 m nicht wesentlich unterschreiten und muss mindestens 0,2 m größer als der Domdeckel sein. Die lichte Weite der Schachtabdeckung muss so gewählt werden, dass der Domdeckel ausgebaut werden kann. Domschächte müssen so abgedeckt sein, dass dem Eindringen von Oberflächenwasser in den Domschacht ausreichend vorgebeugt ist.</p>
            <p>Sind Domdeckelschrauben einbetoniert und müssen daher aufgemeißelt werden oder sind diese verrostet und müssen abgeschliffen werden, stellen wir die dadurch entstehenden Mehrkosten in Rechnung.</p>
            <p>Sind die auf dem Domschacht befindlichen Leitungen durch Abschrauben nicht zu entfernen, sodass diese durchtrennt werden müssen, um den Domdeckel zu öffnen, so werden die erforderlichen Reparaturkosten in Rechnung gestellt. Ist der Auftraggeber bzw. der Tankbetreiber nicht damit einverstanden, dass die Leitungen durchtrennt werden, und kann die Tankreinigung somit nicht ausgeführt werden, stellen wir die anfallenden Unkosten für An- und Abfahrt sowie Ausfallzeiten in Rechnung.</p>
            <p>Bei Kellertanks dürfen im Tankraum bzw. Auffangraum keine Gegenstände gelagert werden. Ist dies dennoch der Fall, so haften wir nicht für Beschädigungen an den gelagerten Gegenständen.</p>
            <p>Ein 220-Volt-Stromanschluss sowie ein Wasseranschluss müssen zur kostenlosen Nutzung zur Verfügung stehen. Für freie Anfahrtswege und Stellplätze der GGVS-Montage-LKW ist zu sorgen.</p>
            <h2>Abnahme und Haftung</h2>
            <p>Nach Abschluss der Arbeiten wird ein Probelauf des Ölbrenners im Beisein des Kunden oder dessen Stellvertreters vorgenommen, sofern der Ölbrenner bei Arbeitsbeginn in ordnungsgemäßem, störungsfreiem Betrieb war und manuelle Bedienung möglich ist. Danach hat der Kunde die Arbeiten abzunehmen. Ist beim Eintreffen unserer Tankschutzmonteure die Heizung nicht in Betrieb, übernehmen wir keine Haftung, wenn der Brenner nach der Durchführung nicht anläuft.</p>
            <p><strong>Hinweis:</strong> Elektroanschlüsse werden provisorisch ausgeführt und müssen von einem Elektro-Installationsbetrieb nach VDI überprüft werden.</p>
            <h2>Entsorgung, Zusatzarbeiten und Gebühren</h2>
            <p>Für den Abtransport und die Vernichtung bzw. ordnungsgemäße Entsorgung der Öl-Schlamm-Wasser-Rückstände sowie der Sinkstoffe berechnen wir die uns entstehenden Selbstkosten (jeweils gültiger Tarif).</p>
            <p>Anfallende Zusatz- bzw. Nebenarbeiten berechnen wir auf Stundennachweis. Da unsere Tankschutz-Fahrzeuge stets mit zwei Monteuren besetzt sind, berechnen wir Doppelstunden zzgl. MwSt.</p>
            <p>Anfallende Prüfgebühren nach VAwS und TRbF sind vom Tankbetreiber bzw. Auftraggeber zu begleichen, z. B. bei Stilllegungen, Erstabnahme, Nachprüfung usw. durch anerkannte Sachverständige.</p>
            <h2>Reklamation und Zahlung</h2>
            <p>Beanstandungen und Reklamationen müssen unverzüglich, längstens nach sieben Werktagen geltend gemacht werden.</p>
            <p>Dienstleistungsrechnungen sind zahlbar ohne Abzug sofort nach Erhalt.</p>
            <h2>Steuerbonus für Handwerksleistungen</h2>
            <p><strong>Bitte beachten:</strong> Bei unseren Preisen handelt es sich um Pauschalpreise. Daher bitten wir um Ihr Verständnis, dass wir keine gesonderte Ausweisung von Lohnanteilen vornehmen können.</p>
          </div>
          <aside className="agb__gloss reveal" style={{ ['--d' as string]: '120ms' }}>
            <span className="fact__label">Erläuterung</span>
            <dl><dt>VAwS</dt><dd>Verordnung für Anlagen wassergefährdender Stoffe</dd><dt>TRbF</dt><dd>Technische Richtlinien für brennbare Flüssigkeiten</dd><dt>GGVS</dt><dd>Gefahrgutverordnung Straße</dd></dl>
          </aside>
        </div>
      </section>
    </>
  );
}
