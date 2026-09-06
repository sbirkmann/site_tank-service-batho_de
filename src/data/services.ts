/**
 * Inhalte der Leistungsseiten. Sämtliche Aussagen stammen von der bestehenden
 * Website www.tank-service-batho.de und wurden nur sprachlich überarbeitet.
 */
export type Block =
  | { type: 'text'; heading?: string; paragraphs: string[] }
  | { type: 'list'; heading?: string; intro?: string; items: string[] }
  | { type: 'steps'; heading?: string; intro?: string; items: string[] }
  | { type: 'options'; heading?: string; intro?: string; items: string[] }
  | { type: 'note'; heading?: string; text: string };

export interface Service {
  slug: string;
  index: string;
  title: string;
  short: string;       // Navigation / Karten
  teaser: string;      // Startseite / Übersicht
  lead: string;        // Einleitung auf der Detailseite
  image?: 'oelschlamm' | 'monteur' | 'domschacht' | 'baustelle' | 'fahrzeug';
  imageAlt?: string;
  blocks: Block[];
}

export const services: Service[] = [
  {
    slug: 'tankreinigung',
    index: '01',
    title: 'Tankreinigung',
    short: 'Tankreinigung',
    teaser: 'Ölschlamm entfernen, Tankzustand von innen beurteilen und Betreiberpflichten erfüllen.',
    lead: 'In jedem Heizöltank setzt sich über die Jahre Ölschlamm ab. Eine fachgerechte Tankreinigung entfernt diese Rückstände, schützt Ihre Anlage vor Korrosion und gibt Ihnen einen klaren Blick auf den Zustand Ihres Tanks.',
    image: 'oelschlamm',
    imageAlt: 'Ölschlamm und Rückstände am Boden eines Heizöltanks',
    blocks: [
      {
        type: 'text',
        heading: 'Warum eine Tankreinigung notwendig ist',
        paragraphs: [
          'Durch die Alterung des Heizöls entstehen Sedimente, die sich am Tankboden ablagern. In Verbindung mit Kondenswasser, Schwitzwasser und Schwefel aus dem Heizöl bildet sich dort eine sogenannte Sumpfphase.',
          'Bei Stahltanks führt diese Sumpfphase zu Lochfraß- und Flächenkorrosion. Der Tankboden wird zerstört, und Heizöl kann auslaufen. Bei Kunststofftanks kommt es zur Weichmacherwanderung: Der Kunststoff verliert seine Weichmacher, wird hart und spröde, verformt sich, und die Tankwandung kann reißen. Dieselben Schäden können auch durch UV-Strahlung entstehen. Solche Verformungen sind bei Kunststofftanks oft schon von außen erkennbar.',
          'Wird der Ölschlamm vom Brenner angesaugt, führt das zudem zu Störungen oder Defekten an der Heizungsanlage.',
        ],
      },
      {
        type: 'text',
        heading: 'Der Blick ins Innere zählt',
        paragraphs: [
          'Bei der Tankreinigung werden die Ölschlämme gesondert entfernt. Dabei erhalten wir einen Einblick in das Innere des Tanks und können den Zustand der Anlage von innen beurteilen. Sie bekommen vor Ort einen detaillierten Tankzustandsbericht unserer Monteure. Weist Ihr Tank Beschädigungen auf, informieren wir Sie darüber, und Sie können sich den Befund gerne selbst im Tank ansehen. Unser Fachpersonal berät Sie anschließend über notwendige Sanierungsmöglichkeiten.',
          'Von außen lässt sich das Innere eines Tanks nicht beurteilen. Seien Sie deshalb misstrauisch gegenüber Angeboten wie „Sumpfphasendiagnosen“ oder „Tankchecks“. Dabei wird in der Regel von außen festgestellt, dass Ihr Tank unbedingt gereinigt und saniert werden müsse, und das wird Ihnen meist auch noch in Rechnung gestellt.',
          'Im Zuge der Tankreinigung bieten wir Ihnen ein unverbindliches und kostenloses Beratungsgespräch vor Ort. Wir nehmen Ihren Tank mit allen Sicherheitseinrichtungen in Augenschein, beraten Sie und können Ihnen sagen, ob Ihre Tankanlage einer anstehenden Überprüfung durch einen anerkannten Sachverständigen (TÜV) standhalten würde.',
        ],
      },
      {
        type: 'note',
        text: 'Eine Tankreinigung dient Ihrer Sicherheit und ist Bestandteil Ihrer Betreiberpflicht.',
      },
      {
        type: 'list',
        heading: 'Faktoren, die die Ölschlammbildung begünstigen',
        items: [
          'Lichteinfall',
          'Wärme',
          'Kondenswasser',
          'Pilz- oder Bakterienbefall',
          'Buntmetalle im Tank, z. B. Kupferleitungen',
          'Sauerstoffeintrag ins Öl, z. B. über die Rücklaufleitung',
        ],
      },
      {
        type: 'steps',
        heading: 'Leistungsumfang',
        intro: 'So läuft eine Tankreinigung bei uns ab:',
        items: [
          'Anfahrt mit GGVS-Montage-LKW inklusive Tankschutz-Fachkräften.',
          'Einrichten der Arbeitsstätte und Bereitstellung aller erforderlichen Werkzeuge, Maschinen und Geräte. Ein 220-Volt-Stromanschluss sowie ein Wasseranschluss müssen zur kostenlosen Nutzung zur Verfügung stehen.',
          'Lösen der Leitungen und Verschraubungen, soweit für unsere Arbeiten erforderlich.',
          'Domdeckel öffnen und Auspumpen des noch verwendbaren Heizöls zur Zwischenlagerung für die Dauer unserer Arbeiten. Bis zu 5.000 Liter ohne Mehrkosten, nach Absprache Zwischenlagerung von 30.000 Litern Heizöl oder mehr gegen Berechnung.',
          'Entnahme der Rückstände wie Öl-Schlamm-Wasser-Gemisch und Sinkstoffe, einschließlich Abtransport und ordnungsgemäßer Entsorgung. Bis zu 100 Liter inklusive.',
          'Tank manuell reinigen und überprüfen: Feststellen, ob Korrosionsschäden vorhanden sind, und Zustand des eingebrachten Korrosionsschutzes prüfen. Mündlicher Tankzustandsbericht vor Ort.',
          'Beratung über mögliche Sanierungsmaßnahmen.',
          'Überprüfen der Tankanlage auf Vollständigkeit der behördlich vorgeschriebenen Ausrüstung. Falls vorhanden, Hinweis auf Mängel sowie Sanierungsmaßnahmen gegen Berechnung.',
          'Remontage von Domdeckel, Leitungen und Verschraubungen.',
          'Rückfüllen des zwischengelagerten Heizöls.',
          'Probelauf der Brenneranlage, sofern diese bei unserem Eintreffen in störungsfreiem Betrieb war und manuelle Bedienung möglich ist.',
          'Lieferschein mit Revisionsbericht ausstellen, Endkontrolle, Arbeitsstätte räumen, Abfahrt.',
        ],
      },
      {
        type: 'options',
        heading: 'Nach der Reinigung: Ihre Optionen',
        intro: 'Nach Ausführung der genannten Arbeiten kann der Behälter wahlweise',
        items: [
          'wieder mit Füllgut versehen werden,',
          'mit einem Kunststoffanstrich versehen werden, zur Verwendung als Regenwassersammeltank,',
          'komplett zerlegt und entsorgt werden. Der Tank muss dafür bauseits ausgebaggert und ebenerdig gelagert sein.',
        ],
      },
    ],
  },
  {
    slug: 'beschichtungen',
    index: '02',
    title: 'Beschichtungen',
    short: 'Beschichtungen',
    teaser: 'Kunststoffbeschichtung als Schutz der Stahlwandung vor aggressiven Ablagerungen.',
    lead: 'Eine Kunststoffbeschichtung schützt die Stahlwandung Ihres Heizöltanks vor den aggressiven Ablagerungen am Tankboden. Wir erklären, wie Lochfraßkorrosion entsteht und worin sich Teil- und Vollbeschichtung unterscheiden.',
    image: 'monteur',
    imageAlt: 'Monteur von Tank Service Batho im Inneren eines Tanks',
    blocks: [
      {
        type: 'text',
        heading: 'Wie Lochfraßkorrosion entsteht',
        paragraphs: [
          'In jedem Heizöltank sammelt sich durch Temperaturschwankungen Schwitzwasser. Es bildet sich tropfenweise an der gesamten Tankinnenwand und läuft ab. Im Laufe der Monate setzt sich so ein sehr aggressives Öl-Wasser-Schlamm-Gemisch am Tankboden ab.',
          'Liegt dieser Wassersumpf mehrere Jahre am Tankboden, kommt es unvermeidlich zu tiefen und gefährlichen Lochfraßschäden. Sind die Anfressungen bereits sehr tief oder leckt der Tank sogar, ist es für Schutzmaßnahmen oder eine Reparatur zu spät.',
          'Durch eine sorgfältige und fachmännische Tankreinigung wird der Heizöltank von diesem aggressiven Schlamm befreit. Der Korrosionsvorgang ist gestoppt, die Sicherheit der Tankanlage gewährleistet. Wird der Tank nicht regelmäßig und sorgfältig gereinigt, ist damit zu rechnen, dass er früher oder später durchkorrodiert.',
        ],
      },
      {
        type: 'text',
        heading: 'Vorsorge statt Ölschaden',
        paragraphs: [
          'Ein Ölschaden kostet viel Geld, auch wenn Sie versichert sind. Die meisten Versicherungen enthalten Klauseln, die verlangen, den Tank in regelmäßigen Abständen zu warten und instand zu halten. Bei Mietshäusern können die Kosten dafür in Form der Nebenkosten auf die Mieter umgelegt werden.',
          'Eine Tankreinigung ist nicht teuer. Diese Kosten sind als Teil der Betriebsaufwendungen zu sehen, und böse Überraschungen bleiben aus.',
          'Nach § 22 des Wasserhaushaltsgesetzes haften Halter von Öltanks für alle Veränderungen der Beschaffenheit des Grundwassers in vollem Umfang. Deshalb sollte jeder Heizöltank spätestens alle 5 Jahre gereinigt und untersucht werden.',
        ],
      },
      {
        type: 'text',
        heading: 'Teilbeschichtung',
        paragraphs: [
          'Die Kunststoffbeschichtung soll die Stahlwandung vor den aggressiven Ablagerungen schützen. Da sich die Ablagerungen am Tankboden sammeln, liegt die Annahme nahe, es genüge, das untere Drittel des Öltanks zu schützen.',
          'Im Laufe der Zeit kann das Heizöl eine solche Beschichtung jedoch unterspülen. Dann ist kein Schutz mehr gewährleistet. Aus diesem Grund gibt der Hersteller des Zwei-Komponenten-Kunststoffs auf eine Teilbeschichtung nur 5 Jahre Garantie.',
          'Eine Teilbeschichtung ist deshalb nur als vorübergehende Schutzmaßnahme zu empfehlen, etwa wenn in absehbarer Zeit auf Gas oder andere Energiequellen umgestellt wird.',
        ],
      },
      {
        type: 'text',
        heading: 'Vollbeschichtung',
        paragraphs: [
          'Bei einer Vollbeschichtung wird der Tank rundherum beschichtet. Es gibt keine Angriffsfläche zum Unterspülen, ein Unterwandern der Beschichtung ist damit ausgeschlossen.',
        ],
      },
    ],
  },
  {
    slug: 'anodenschutz',
    index: '03',
    title: 'Anodenschutz',
    short: 'Anodenschutz',
    teaser: 'Elektrochemischer Korrosionsschutz für den Bodenbereich Ihres Heizöltanks.',
    lead: 'Der Anodenschutz beruht auf dem galvanischen Prinzip: Ein unedleres Metall wird zugunsten eines edleren geopfert. So wird der korrosionsgefährdete Bodenbereich des Öltanks wirkungsvoll geschützt.',
    blocks: [
      {
        type: 'steps',
        heading: 'So funktioniert der Anodenschutz',
        intro: 'Auf den praktischen Einsatz bezogen bedeutet das galvanische Prinzip:',
        items: [
          'Magnesiumanoden werden auf dem Boden des Heizöltanks verteilt, miteinander verbunden und über ein Anschlusskabel mit dem Stahlblech des Behälters verbunden.',
          'Anschließend wird eine leitfähige Elektrolytlösung in den Tank gegeben, die die gesamte zu schützende Fläche und die Magnesiumanoden überdeckt. Diese Lösung ist spezifisch schwerer als Heizöl und lagert als geschlossene Schicht unter dem Heizöl.',
          'In dem so geschaffenen elektrochemischen Element entsteht ein Gleichstrom.',
          'Dieser Gleichstrom verhindert, dass Eisen in Lösung geht. Stattdessen werden die minderwertigeren Magnesiumanoden zersetzt. Der Tank wird geschützt und in seinem ursprünglichen Zustand erhalten.',
        ],
      },
      {
        type: 'text',
        heading: 'Keine Veränderung des Heizöls',
        paragraphs: [
          'Bei diesem elektrochemischen Vorgang findet keine Veränderung des im Tank gelagerten Heizöls statt. Der erzeugte Gleichstrom verteilt sich ausschließlich über die Elektrolytlösung, da Heizöl nicht elektrisch leitfähig ist.',
          'Bei fachgerechter Montage durch unser geschultes Personal wird der korrosionsgefährdete Bodenbereich des Öltanks so wirkungsvoll geschützt.',
        ],
      },
    ],
  },
  {
    slug: 'innenhuelle-leckschutzauskleidung',
    index: '04',
    title: 'Kunststoffinnenhülle / Leckschutzauskleidung',
    short: 'Innenhülle / Leckschutzauskleidung',
    teaser: 'Einwandige Tanks werden doppelwandig: zusätzliche Wandung mit Vakuumüberwachung.',
    lead: 'Eine Innenhülle ist eine flexible, hochfeste Kunststofffolie, die exakt für Ihren Tank angefertigt wird. Sie gibt dem Tank eine zusätzliche Wandung und schützt ihn zugleich optimal vor Korrosion.',
    image: 'domschacht',
    imageAlt: 'Blick in einen geöffneten Domschacht mit Absaugschlauch',
    blocks: [
      {
        type: 'text',
        heading: 'Aus einwandig wird doppelwandig',
        paragraphs: [
          'Durch den Einbau einer Innenhülle erhält der Tank eine zusätzliche Wandung. Einwandige Tanks werden dadurch doppelwandig, man spricht hier auch von einer Leckschutzauskleidung. Zugleich wird der Tank optimal vor Korrosion geschützt.',
          'Unsere Innenhüllen besitzen eine Bauartzulassung und entsprechen den Anforderungen zur Lagerung wassergefährdender Stoffe wie Heizöl.',
        ],
      },
      {
        type: 'text',
        heading: 'Vakuumüberwachung mit Leckwarngerät',
        paragraphs: [
          'Die Innenhülle wird mit Vakuum überwacht und im Tank gehalten. Das von uns montierte Leckwarngerät überwacht dieses Vakuum, hält es konstant und gibt im Falle einer Undichtigkeit am Tank oder an der Hülle einen zuverlässigen Alarm.',
          'Es kann kein Öl auslaufen, da jeweils die zweite Wandung vorhanden ist.',
        ],
      },
      {
        type: 'list',
        heading: 'Wir bauen Innenhüllen ein in',
        items: [
          'Erdtanks aus Stahl',
          'Erdtanks aus glasfaserverstärktem Kunststoff (GFK), z. B. Nautank, Haasetank',
          'Kellergeschweißte Tanks',
        ],
      },
      {
        type: 'list',
        heading: 'Wann wird eine Innenhülle benötigt?',
        items: [
          'Bei einwandigen Tanks.',
          'Bei defekten Auffangräumen oder Ölwannen.',
          'Wenn bei doppelwandigen Tanks die vorhandene Leckschutzeinrichtung nicht mehr funktioniert, z. B. Durchfluss der Leckflüssigkeit bei Erdtanks.',
          'Bei Korrosionsschäden an Stahltanks.',
          'Beim Umbau von Heizöltanks zu Wasserzisternen.',
        ],
      },
    ],
  },
  {
    slug: 'beseitigung-von-oelschaeden',
    index: '05',
    title: 'Beseitigung von Ölschäden',
    short: 'Beseitigung von Ölschäden',
    teaser: 'Schnelle, professionelle Hilfe, um Folgen für die Umwelt entscheidend einzugrenzen.',
    lead: 'Unfälle durch technisches oder mechanisches Versagen lassen sich leider nicht immer vermeiden. Umso wichtiger ist es, die möglichen Folgen, insbesondere für die Umwelt, schnell und entscheidend einzugrenzen.',
    blocks: [
      {
        type: 'text',
        heading: 'Ausgerüstet für den Ernstfall',
        paragraphs: [
          'Unsere Mitarbeiter sind mit den entsprechenden technischen Geräten und Fahrzeugen ausgerüstet, sodass Ihnen schnell und professionell geholfen wird. Es wird alles Menschenmögliche getan, um den Schaden so klein wie möglich zu halten.',
        ],
      },
      {
        type: 'steps',
        heading: 'So gehen wir üblicherweise vor',
        items: [
          'Abpumpen des ausgetretenen Heizöls',
          'Reinigen der kontaminierten Fläche',
          'Entsorgen des verschmutzten Materials',
          'Begutachtung durch einen Sachverständigen',
          'Ersetzen der schadhaften Teile oder der gesamten Tankanlage',
        ],
      },
      {
        type: 'note',
        text: 'Grundsätzlich gilt: Solchen Gefahren sollte vorgebeugt werden. Lassen Sie Ihre Tankanlage deshalb regelmäßig von einem Fachbetrieb kontrollieren.',
      },
    ],
  },
  {
    slug: 'stilllegung',
    index: '06',
    title: 'Stilllegung',
    short: 'Stilllegung',
    teaser: 'Fachgerechte Stilllegung von Tankanlagen, die nicht demontiert werden sollen oder können.',
    lead: 'Tankanlagen, die nicht demontiert werden sollen oder können, wie zum Beispiel Erdtanks, legen wir fachgerecht still. Die Tanks werden dabei ordnungsgemäß gereinigt, entfettet und entgast.',
    image: 'baustelle',
    imageAlt: 'Baustelle mit Bagger und zwei Erdtanks in der Baugrube',
    blocks: [
      {
        type: 'text',
        heading: 'Vorübergehend oder endgültig',
        paragraphs: [
          'Eventuell vorhandene Innenhüllen werden ausgebaut und entsorgt. Bei prüfpflichtigen Tankanlagen ist zusätzlich eine Abnahme durch einen anerkannten Sachverständigen (TÜV / DEKRA) erforderlich.',
          'Wir unterscheiden zwischen einer vorübergehenden und einer endgültigen Stilllegung. Zusätzlich wird entschieden, ob der Tank verfüllt wird.',
        ],
      },
      {
        type: 'steps',
        heading: 'Leistungsumfang',
        items: [
          'Anfahrt mit GGVS-Montage-LKW inklusive Tankschutz-Fachkräften.',
          'Einrichtung der Arbeitsstätte und Bereitstellung aller erforderlichen Werkzeuge, Maschinen und Geräte. Ein 220-Volt-Stromanschluss sowie ein Wasseranschluss müssen zur kostenlosen Nutzung zur Verfügung stehen.',
          'Lösen der Leitungen und Verschraubungen, soweit für unsere Arbeit erforderlich.',
          'Domdeckel öffnen und Heizöltank entgasen, soweit erforderlich.',
          'Entnahme der Rückstände wie Öl, Schlamm, Wasser und Sinkstoffe, einschließlich Abtransport und ordnungsgemäßer Entsorgung. Bis zu 300 Liter ohne Mehrkosten.',
          'Tank manuell reinigen. Kontrollflüssigkeit weitgehend absaugen gemäß TRbF 20. Deckel lose auflegen.',
          'Endkontrolle.',
          'Lieferschein mit Revisionsbericht sowie Bescheinigung über die ordnungsgemäße Stilllegung ausstellen.',
        ],
      },
    ],
  },
  {
    slug: 'tankdemontage',
    index: '07',
    title: 'Tankdemontage',
    short: 'Tankdemontage',
    teaser: 'Wir demontieren alle Arten von Tanks, zerlegen sie transportfähig und führen das Material der Wiederverwertung zu.',
    lead: 'Wir demontieren alle Arten von Tanks. Vom Lösen der Leitungen über die Reinigung bis zum Abtransport in transportablen Teilen übernehmen wir den gesamten Ablauf.',
    image: 'baustelle',
    imageAlt: 'Bagger und Erdtanks auf einer Baustelle',
    blocks: [
      {
        type: 'list',
        heading: 'Wir demontieren alle Arten von Tanks',
        items: [
          'Zylindrische Tanks nach DIN 6616 oder DIN 6608 D',
          'Kellergeschweißte Tanks',
          'Kunststofftanks',
          'Batterietanks',
          'Wasserzisternen',
          'Demontage von Innenhüllen',
        ],
      },
      {
        type: 'steps',
        heading: 'Leistungsumfang',
        items: [
          'Anfahrt mit GGVS-Montage-LKW inklusive Tankschutz-Fachkräften.',
          'Einrichten der Arbeitsstätte und Bereitstellung aller erforderlichen Werkzeuge, Maschinen und Geräte. Ein 220-Volt-Stromanschluss sowie ein Wasseranschluss müssen zur kostenlosen Nutzung zur Verfügung stehen.',
          'Lösen der Leitungen und Verschraubungen, soweit für unsere Arbeiten erforderlich.',
          'Domdeckel öffnen und Heizöltank entgasen, soweit erforderlich.',
          'Entnahme der Rückstände wie Öl-Schlamm-Wasser-Gemisch und Sinkstoffe, einschließlich Abtransport und ordnungsgemäßer Entsorgung. Bis zu 300 Liter inklusive.',
          'Heizölbehälter manuell reinigen, Tank in transportable Teile zerlegen und außer Haus transportieren.',
          'Altmaterial der Wiederverwertung zuführen. Für das Altmaterial wird keine Vergütung gewährt.',
        ],
      },
    ],
  },
  {
    slug: 'neutankanlagen',
    index: '08',
    title: 'Neutankanlagen',
    short: 'Neutankanlagen',
    teaser: 'Planung, Installation und Modernisierung Ihrer Tankanlage aus einer Hand.',
    lead: 'Bei der Planung, Installation und Modernisierung Ihrer Tankanlage unterstützen wir Sie gerne. Wir stellen die Lösung zusammen, die genau zu Ihren Ansprüchen und Ihrem Kostenrahmen passt.',
    image: 'fahrzeug',
    imageAlt: 'Montagefahrzeug von Tank Service Batho',
    blocks: [
      {
        type: 'text',
        heading: 'Beratung vor Ort',
        paragraphs: [
          'Am Anfang all unserer Projekte steht die Besichtigung Ihrer Räumlichkeiten und ein umfassendes Beratungsgespräch. Wir stellen die Lösung zusammen, die genau zu Ihren Ansprüchen und Ihrem Kostenrahmen passt.',
          'Legen Sie die Arbeit in unsere Hände. Wir sorgen dafür, dass während der Baumaßnahmen so wenig Unannehmlichkeiten wie möglich entstehen.',
        ],
      },
      {
        type: 'text',
        heading: 'Aktuelle Technik',
        paragraphs: [
          'Als langjähriger Fachbetrieb legen wir großen Wert auf die Aus- und Weiterbildung unserer Mitarbeiter. So können wir Ihnen stets die aktuellste Technik für Ihre Installationen empfehlen.',
        ],
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
