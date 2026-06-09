/* ============================================================
   STUDIO IMMOBILIARE JET — Dataset immobili
   Dati reali (rif. Immobiliare.it). Le immagini sono asset locali
   serviti da /public/assets/properties (nessuna dipendenza remota).
   ============================================================ */

// Helper: costruisce i path locali per un set di foto p{n}-{i}.jpg
const ph = (...names) => names.map((n) => `/assets/properties/${n}.jpg`)

export const immobili = [
  {
    id: 'jet-001',
    ref: '128867746',
    titolo: 'Villa unifamiliare con ampio giardino — Bagnaia',
    tipologia: 'villa',
    contratto: 'vendita',
    prezzo: 415000,
    superficie: 200,
    locali: 5,
    bagni: 3,
    piano: 'Piano terra + primo',
    comune: 'Viterbo',
    zona: 'Bagnaia - La Quercia',
    indirizzo: 'Viale Fiume, Bagnaia',
    descrizione:
      'Elegante villa unifamiliare con ampio giardino privato. Pavimenti in parquet e finiture di pregio. La villa si sviluppa su due livelli con tutti i comfort. Ottimo stato conservativo.',
    caratteristiche: [
      'giardino privato',
      'parquet',
      'posto auto',
      'riscaldamento autonomo',
      'finiture di pregio',
    ],
    classeEnergetica: 'C',
    riscaldamento: 'Autonomo',
    foto: ph('p1-0', 'p1-1', 'p1-2'),
    lat: 42.3965,
    lng: 12.1389,
    inEvidenza: true,
    nuovo: false,
    dataInserimento: '2026-05-07',
  },
  {
    id: 'jet-002',
    ref: '121224204',
    titolo: 'Villa di pregio con parco privato — Bagnoregio',
    tipologia: 'villa',
    contratto: 'vendita',
    prezzo: 650000,
    superficie: 245,
    locali: 6,
    bagni: 4,
    piano: 'Piano terra + primo + seminterrato',
    comune: 'Bagnoregio',
    zona: 'Centro',
    indirizzo: 'Via Mantes la Jolie, Bagnoregio',
    descrizione:
      'In posizione dominante, meravigliosa villa unifamiliare circondata da parco privato di circa 3.000 mq. Finiture di pregio e materiali di altissima qualità. Terrazza panoramica, riscaldamento autonomo.',
    caratteristiche: [
      'parco privato 3000mq',
      'terrazza panoramica',
      'posto auto',
      'riscaldamento autonomo',
      'finiture lusso',
      'posizione dominante',
    ],
    classeEnergetica: 'B',
    riscaldamento: 'Autonomo',
    foto: ph('p9-0', 'p9-1', 'p9-2'),
    lat: 42.6267,
    lng: 12.0897,
    inEvidenza: true,
    nuovo: false,
    dataInserimento: '2025-09-15',
  },
  {
    id: 'jet-003',
    ref: '129183110',
    titolo: 'Villa unifamiliare fronte mare — Lido di Tarquinia',
    tipologia: 'villa',
    contratto: 'vendita',
    prezzo: 385000,
    superficie: 180,
    locali: 5,
    bagni: 3,
    piano: 'Piano terra + primo',
    comune: 'Tarquinia',
    zona: 'Lido di Tarquinia',
    indirizzo: 'Via Algi, Lido di Tarquinia',
    descrizione:
      'Villa unifamiliare in contesto residenziale di pregio a Lido di Tarquinia. Ampio giardino, posto auto. Ideale come prima casa o residenza estiva sul mare della Tuscia.',
    caratteristiche: ['giardino', 'posto auto', 'vicino al mare', 'riscaldamento autonomo'],
    classeEnergetica: 'D',
    riscaldamento: 'Autonomo',
    foto: ph('p8-0', 'p8-1', 'p8-2'),
    lat: 42.2467,
    lng: 11.7583,
    inEvidenza: true,
    nuovo: true,
    dataInserimento: '2026-04-28',
  },
  {
    id: 'jet-004',
    ref: '122984614',
    titolo: 'Villa unifamiliare — San Martino al Cimino',
    tipologia: 'villa',
    contratto: 'vendita',
    prezzo: 319000,
    superficie: 160,
    locali: 5,
    bagni: 2,
    piano: 'Piano terra + primo',
    comune: 'Viterbo',
    zona: 'San Martino al Cimino - Tobia',
    indirizzo: 'Strada Montagna 4, San Martino al Cimino',
    descrizione:
      'Villa unifamiliare in ottimo stato nella pittoresca frazione di San Martino al Cimino. Immersa nel verde, con posto auto e giardino. Soluzione ideale per chi cerca tranquillità e natura.',
    caratteristiche: ['giardino', 'posto auto', 'immersa nel verde', 'riscaldamento autonomo'],
    classeEnergetica: 'C',
    riscaldamento: 'Autonomo',
    foto: ph('p4-0', 'p1-2', 'p1-1'),
    lat: 42.3576,
    lng: 12.0817,
    inEvidenza: true,
    nuovo: false,
    dataInserimento: '2025-11-20',
  },
  {
    id: 'jet-005',
    ref: '128666610',
    titolo: 'Appartamento con terrazzo — Murialdo/Cappuccini',
    tipologia: 'appartamento',
    contratto: 'vendita',
    prezzo: 195000,
    superficie: 110,
    locali: 4,
    bagni: 2,
    piano: '3° piano',
    comune: 'Viterbo',
    zona: 'Murialdo - Cappuccini',
    indirizzo: 'Via Vittorio Veneto, Viterbo',
    descrizione:
      'Luminoso appartamento con ampio terrazzo nel quartiere residenziale Murialdo-Cappuccini. Ottime finiture, cucina abitabile, doppi servizi. Ideale per famiglie.',
    caratteristiche: ['terrazzo', 'cucina abitabile', 'doppi servizi', 'luminoso'],
    classeEnergetica: 'C',
    riscaldamento: 'Centralizzato',
    foto: ph('p2-0', 'p2-1'),
    lat: 42.42,
    lng: 12.105,
    inEvidenza: true,
    nuovo: false,
    dataInserimento: '2026-03-15',
  },
  {
    id: 'jet-006',
    ref: '126870449',
    titolo: 'Trilocale con balcone — Murialdo/Cappuccini',
    tipologia: 'appartamento',
    contratto: 'vendita',
    prezzo: 139000,
    superficie: 85,
    locali: 3,
    bagni: 1,
    piano: '2° piano',
    comune: 'Viterbo',
    zona: 'Murialdo - Cappuccini',
    indirizzo: 'Via Monte Nevoso, Viterbo',
    descrizione:
      'Trilocale in buono stato con balcone nel quartiere Murialdo. Soluzione abitativa ideale per coppie o piccoli investitori. Zona servita e tranquilla.',
    caratteristiche: ['balcone', 'zona residenziale', 'buono stato'],
    classeEnergetica: 'D',
    riscaldamento: 'Centralizzato',
    foto: ph('p5-0', 'p5-1', 'p5-2'),
    lat: 42.4215,
    lng: 12.108,
    inEvidenza: false,
    nuovo: false,
    dataInserimento: '2025-12-10',
  },
  {
    id: 'jet-007',
    ref: '126869431',
    titolo: 'Bilocale ristrutturato — Villanova/Riello',
    tipologia: 'appartamento',
    contratto: 'vendita',
    prezzo: 93000,
    superficie: 55,
    locali: 2,
    bagni: 1,
    piano: '1° piano',
    comune: 'Viterbo',
    zona: 'Villanova - Riello',
    indirizzo: 'Via Fernando Molini, Viterbo',
    descrizione:
      'Bilocale completamente ristrutturato nella zona Villanova. Cucina nuova, bagno rifatto, pavimenti nuovi. Pronto per essere abitato. Ottima soluzione per primo acquisto.',
    caratteristiche: ['ristrutturato', 'cucina nuova', 'pavimenti nuovi', 'primo acquisto'],
    classeEnergetica: 'C',
    riscaldamento: 'Autonomo',
    foto: ph('p7-0', 'p7-1'),
    lat: 42.428,
    lng: 12.092,
    inEvidenza: false,
    nuovo: false,
    dataInserimento: '2025-12-08',
  },
  {
    id: 'jet-008',
    ref: '129307936',
    titolo: 'Bilocale centro storico — Sacrario/Piazza della Rocca',
    tipologia: 'appartamento',
    contratto: 'vendita',
    prezzo: 83000,
    superficie: 50,
    locali: 2,
    bagni: 1,
    piano: '2° piano',
    comune: 'Viterbo',
    zona: 'Sacrario - Piazza della Rocca',
    indirizzo: 'Via Giuseppe Mazzini, Viterbo',
    descrizione:
      'Bilocale nel cuore del centro di Viterbo, a pochi passi da Piazza della Rocca. Da rifinire secondo gusto personale. Ottima posizione per investimento o residenza.',
    caratteristiche: ['centro storico', 'posizione centrale', 'da rifinire'],
    classeEnergetica: 'F',
    riscaldamento: 'Centralizzato',
    foto: ph('p10-0', 'p10-1', 'p10-2'),
    lat: 42.4168,
    lng: 12.1061,
    inEvidenza: true,
    nuovo: true,
    dataInserimento: '2026-05-01',
  },
  {
    id: 'jet-009',
    ref: '124335579',
    titolo: 'Bilocale con terrazzo — Murialdo/Cappuccini',
    tipologia: 'appartamento',
    contratto: 'vendita',
    prezzo: 115000,
    superficie: 65,
    locali: 2,
    bagni: 1,
    piano: '3° piano',
    comune: 'Viterbo',
    zona: 'Murialdo - Cappuccini',
    indirizzo: 'Via Antonio Rosmini, Viterbo',
    descrizione:
      'Bilocale con terrazzo panoramico nel quartiere Cappuccini. Buono stato generale, cucina separata, affaccio su verde. Zona tranquilla e ben collegata.',
    caratteristiche: ['terrazzo', 'cucina separata', 'vista verde', 'buono stato'],
    classeEnergetica: 'D',
    riscaldamento: 'Centralizzato',
    foto: ph('p3-0', 'p3-1', 'p3-2'),
    lat: 42.4195,
    lng: 12.1088,
    inEvidenza: false,
    nuovo: false,
    dataInserimento: '2026-01-18',
  },
  {
    id: 'jet-010',
    ref: '125411999',
    titolo: 'Terreno edificabile — Vetralla',
    tipologia: 'terreno',
    contratto: 'vendita',
    prezzo: 59000,
    superficie: 1200,
    locali: null,
    bagni: null,
    piano: null,
    comune: 'Vetralla',
    zona: 'Centro',
    indirizzo: 'Strada Campogiordano 31, Vetralla',
    descrizione:
      'Terreno edificabile in zona residenziale di Vetralla. Superficie di circa 1.200 mq con possibilità edificatoria. Ottima opportunità per costruzione di villa unifamiliare.',
    caratteristiche: ['edificabile', '1200 mq', 'zona residenziale', 'Vetralla'],
    classeEnergetica: null,
    riscaldamento: null,
    foto: ph('p4-0', 'p1-0'),
    lat: 42.32,
    lng: 12.0583,
    inEvidenza: false,
    nuovo: false,
    dataInserimento: '2026-02-05',
  },
  {
    id: 'jet-011',
    ref: '119439915',
    titolo: "Rustico da restaurare — Castel d'Asso/Tuscanese",
    tipologia: 'rustico',
    contratto: 'vendita',
    prezzo: 45000,
    superficie: 90,
    locali: 3,
    bagni: 1,
    piano: 'Piano terra',
    comune: 'Viterbo',
    zona: "Castel d'Asso - Tuscanese",
    indirizzo: 'Strada Montarone 1, Viterbo',
    descrizione:
      "Rustico in pietra da restaurare nella campagna viterbese, nella suggestiva area di Castel d'Asso. Terreno annesso. Perfetto per chi desidera realizzare una casa di campagna con carattere.",
    caratteristiche: [
      'pietra',
      'da restaurare',
      'terreno annesso',
      'campagna',
      'carattere rustico',
    ],
    classeEnergetica: 'G',
    riscaldamento: null,
    foto: ph('p6-0', 'p6-1', 'p6-2'),
    lat: 42.38,
    lng: 12.03,
    inEvidenza: false,
    nuovo: false,
    dataInserimento: '2025-08-22',
  },
  {
    id: 'jet-012',
    ref: '114472903',
    titolo: 'Trilocale in affitto — Piazza Santa Maria Nuova',
    tipologia: 'appartamento',
    contratto: 'affitto',
    prezzo: 570,
    superficie: 80,
    locali: 3,
    bagni: 1,
    piano: '1° piano',
    comune: 'Viterbo',
    zona: 'Sacrario - Piazza della Rocca',
    indirizzo: 'Piazza Santa Maria Nuova, Viterbo',
    descrizione:
      'Affascinante trilocale in affitto nel medievale centro storico di Viterbo, affacciato sulla suggestiva Piazza Santa Maria Nuova. Ambiente storico di grande pregio.',
    caratteristiche: ['centro medievale', 'affaccio piazza', 'storico', 'carattere'],
    classeEnergetica: 'E',
    riscaldamento: 'Centralizzato',
    foto: ph('p10-1', 'p10-2', 'p10-0'),
    lat: 42.413,
    lng: 12.1045,
    inEvidenza: true,
    nuovo: false,
    dataInserimento: '2024-06-10',
  },
  {
    id: 'jet-013',
    ref: '72963842',
    titolo: 'Locale commerciale — Via Aurelio Saffi',
    tipologia: 'commerciale',
    contratto: 'affitto',
    prezzo: 500,
    superficie: 60,
    locali: 2,
    bagni: 1,
    piano: 'Piano terra',
    comune: 'Viterbo',
    zona: 'Sacrario - Piazza della Rocca',
    indirizzo: 'Via Aurelio Saffi, Viterbo',
    descrizione:
      'Locale commerciale in posizione strategica vicino a Piazza della Rocca. Doppio ingresso, vetrine, bagno. Ideale per ufficio, studio professionale o attività commerciale.',
    caratteristiche: ['piano terra', 'vetrine', 'doppio ingresso', 'posizione centrale'],
    classeEnergetica: 'D',
    riscaldamento: 'Autonomo',
    foto: ph('p5-1', 'p5-2'),
    lat: 42.418,
    lng: 12.1048,
    inEvidenza: false,
    nuovo: false,
    dataInserimento: '2023-03-01',
  },
  {
    id: 'jet-014',
    ref: '112437127',
    titolo: 'Locale commerciale ristrutturato — Via Aurelio Saffi',
    tipologia: 'commerciale',
    contratto: 'affitto',
    prezzo: 500,
    superficie: 55,
    locali: 2,
    bagni: 1,
    piano: 'Piano terra',
    comune: 'Viterbo',
    zona: 'Sacrario - Piazza della Rocca',
    indirizzo: 'Via Aurelio Saffi, Viterbo',
    descrizione:
      'Locale commerciale ristrutturato con facciata in pietra. Ampia vetrina su strada. Ottimo per attività artigianale, negozio o ufficio nel centro di Viterbo.',
    caratteristiche: ['ristrutturato', 'vetrina', 'piano terra', 'facciata in pietra'],
    classeEnergetica: 'C',
    riscaldamento: 'Autonomo',
    foto: ph('p7-1', 'p7-0'),
    lat: 42.4182,
    lng: 12.105,
    inEvidenza: false,
    nuovo: false,
    dataInserimento: '2024-01-15',
  },
  {
    id: 'jet-015',
    ref: '129309070',
    titolo: 'Attività commerciale in vendita — Soriano nel Cimino',
    tipologia: 'commerciale',
    contratto: 'vendita',
    prezzo: 47000,
    superficie: 80,
    locali: 3,
    bagni: 1,
    piano: 'Piano terra',
    comune: 'Soriano nel Cimino',
    zona: 'Centro',
    indirizzo: 'Viale Vittorio Emanuele III, Soriano nel Cimino',
    descrizione:
      'Attività commerciale avviata in vendita nel centro di Soriano nel Cimino. Ampio terrazzo pertinenziale. Ottima opportunità per chi cerca un avviamento commerciale.',
    caratteristiche: ['terrazzo', 'attività avviata', 'piano terra', 'centro paese'],
    classeEnergetica: 'E',
    riscaldamento: 'Autonomo',
    foto: ph('p8-1', 'p8-2'),
    lat: 42.4133,
    lng: 12.2344,
    inEvidenza: false,
    nuovo: true,
    dataInserimento: '2026-05-02',
  },
  {
    id: 'jet-016',
    ref: '124060833',
    titolo: 'Locale commerciale su Via Cassia — Villanova/Riello',
    tipologia: 'commerciale',
    contratto: 'affitto',
    prezzo: 420,
    superficie: 45,
    locali: 1,
    bagni: 1,
    piano: 'Piano terra',
    comune: 'Viterbo',
    zona: 'Villanova - Riello',
    indirizzo: 'Via Cassia, Viterbo',
    descrizione:
      'Locale commerciale su via Cassia con ampio parcheggio condominiale. Ideale per attività commerciale o artigianale con accesso veicolare. Alta visibilità su arteria principale.',
    caratteristiche: ['via Cassia', 'parcheggio', 'alta visibilità', 'accesso veicolare'],
    classeEnergetica: 'D',
    riscaldamento: 'Autonomo',
    foto: ph('p3-1', 'p3-0'),
    lat: 42.435,
    lng: 12.09,
    inEvidenza: false,
    nuovo: false,
    dataInserimento: '2026-01-08',
  },
]

/* ---- Helper: tipologie disponibili ---- */
export const TIPOLOGIE = ['appartamento', 'villa', 'terreno', 'rustico', 'commerciale']

/* Etichette leggibili per tipologia */
export const TIPOLOGIA_LABEL = {
  appartamento: 'Appartamento',
  villa: 'Villa',
  terreno: 'Terreno',
  rustico: 'Rustico',
  commerciale: 'Commerciale',
}

/* ---- Helper: comuni disponibili ---- */
export const COMUNI = [...new Set(immobili.map((i) => i.comune))].sort()

/* ---- Helper: filtra immobili ---- */
export function filtraImmobili(filtri = {}) {
  return immobili.filter((imm) => {
    if (filtri.tipologia && imm.tipologia !== filtri.tipologia) return false
    if (filtri.contratto && imm.contratto !== filtri.contratto) return false
    if (filtri.comune && !imm.comune.toLowerCase().includes(filtri.comune.toLowerCase()))
      return false
    if (filtri.prezzoMax && imm.prezzo > filtri.prezzoMax) return false
    if (filtri.prezzoMin && imm.prezzo < filtri.prezzoMin) return false
    if (filtri.superficieMin && imm.superficie < filtri.superficieMin) return false
    if (filtri.superficieMax && imm.superficie > filtri.superficieMax) return false
    if (filtri.locali && (imm.locali ?? 0) < parseInt(filtri.locali)) return false
    return true
  })
}

/* ---- Helper: recupera per id ---- */
export const getImmobileById = (id) => immobili.find((i) => i.id === id)

/* ---- Helper: immobili correlati (stessa tipologia, esclude id) ---- */
export const immobiliCorrelati = (immobile, n = 3) =>
  immobili
    .filter((i) => i.id !== immobile.id && i.tipologia === immobile.tipologia)
    .slice(0, n)

/* ---- Helper: ordinamento ---- */
export function ordinaImmobili(lista, sortKey) {
  const arr = [...lista]
  switch (sortKey) {
    case 'prezzo-asc':
      return arr.sort((a, b) => a.prezzo - b.prezzo)
    case 'prezzo-desc':
      return arr.sort((a, b) => b.prezzo - a.prezzo)
    case 'superficie-asc':
      return arr.sort((a, b) => a.superficie - b.superficie)
    case 'recenti':
      return arr.sort(
        (a, b) => new Date(b.dataInserimento) - new Date(a.dataInserimento)
      )
    case 'rilevanti':
    default:
      return arr.sort((a, b) => Number(b.inEvidenza) - Number(a.inEvidenza))
  }
}

export const SORT_OPTIONS = [
  { value: 'rilevanti', label: 'Più rilevanti' },
  { value: 'prezzo-asc', label: 'Prezzo crescente' },
  { value: 'prezzo-desc', label: 'Prezzo decrescente' },
  { value: 'superficie-asc', label: 'Superficie' },
  { value: 'recenti', label: 'Più recenti' },
]
