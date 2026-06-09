/* ============================================================
   Dati reali dell'agenzia (fonti pubbliche: jetimmobiliare.it,
   immobiliare.it, TrovaCasa, Facebook). Centralizzati per essere
   riutilizzati in tutto il sito.
   ============================================================ */
export const AGENZIA = {
  nome: 'Studio Immobiliare Jet',
  ragioneSociale: 'Studio Immobiliare S.a.s.',
  via: 'Via Genova 9',
  cap: '01100',
  citta: 'Viterbo',
  provincia: 'VT',

  // Contatti reali
  telefono: '0761 171 0757',
  telefonoHref: 'tel:+3907611710757',
  cellulare: '389 236 3916',
  cellulareHref: 'tel:+393892363916',
  whatsapp: '393892363916', // formato wa.me (senza +)
  email: 'jetimmobiliare@gmail.com',

  // Presenza online
  sito: 'www.jetimmobiliare.it',
  facebook: 'https://www.facebook.com/StudioImmobiliareJet',
  immobiliare: 'https://www.immobiliare.it/agenzie-immobiliari/202787/jet-viterbo/',

  // Mappa
  mapsQuery: 'Via Genova 9, 01100 Viterbo',
  lat: 42.4168,
  lng: 12.1061,

  // Referente (da brief cliente)
  referente: 'Patrizio Valle',
  referenteRuolo: 'Titolare & Agente Immobiliare',

  // Orari (da brief cliente)
  orari: [
    { giorni: 'Lunedì', valore: 'Chiuso' },
    { giorni: 'Martedì – Venerdì', valore: '09:30 – 13:00 · 16:00 – 19:30' },
    { giorni: 'Sabato – Domenica', valore: 'Chiuso' },
  ],
  orariBreve: 'Mar–Ven 09:30–13:00 / 16:00–19:30',
}

export const indirizzoCompleto = `${AGENZIA.via}, ${AGENZIA.cap} ${AGENZIA.citta}`

/** Link WhatsApp con messaggio preimpostato. */
export const whatsappLink = (messaggio) =>
  `https://wa.me/${AGENZIA.whatsapp}?text=${encodeURIComponent(messaggio)}`
