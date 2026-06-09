# Studio Immobiliare Jet — Sito web

Sito web premium per **Studio Immobiliare Jet**, agenzia immobiliare a Viterbo
(Via Genova 9, 01100). Stack: **React + Vite + React Router v6**, CSS modulare
scritto a mano con design token (nessun framework CSS). Mappe con **Google
Maps** (embed via iframe, nessuna API key richiesta).

## Avvio in locale

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build di produzione in dist/
npm run preview  # anteprima della build
```

## Struttura

```
src/
├── styles/        variables.css (design token) + base.css (reset, utility)
├── data/          immobili.js (dataset 16 immobili + helper filtri/ordinamento)
├── hooks/         useScrollReveal (Intersection Observer)
├── lib/           format.js (prezzi/numeri it-IT)
├── components/    Navbar, Footer, SearchBar, PropertyCard, PropertyGallery,
│                  PropertyMap, AnimatedCounter, CustomCursor, LoadingScreen,
│                  Logo, Icons (SVG set), Seo, ScrollToTop
└── pages/         Home, Immobili, Dettaglio, ChiSiamo, Contatti, NotFound
```

## Design system

- **Palette**: bordeaux `#6B1A1A`, oro `#C9A84C`, bianco caldo `#FAF8F5`.
- **Font** (Google Fonts): Playfair Display (titoli), Cormorant Garamond
  (sottotitoli), DM Sans (UI/body).
- **Animazioni**: hero stagger, scroll reveal, hover card, navbar scroll,
  cursore custom, contatori animati, lightbox, loading screen.
  Tutte rispettano `prefers-reduced-motion`.

## Note / contenuti da sostituire

Questi elementi sono **placeholder** in attesa dei dati reali:

- **Logo** — ricreazione **vettoriale fedele** dell'originale ("Studio
  Immobiliare" in serif corsivo bordeaux + chiave dorata e ciondolo a rombo
  con "JET"), in `src/components/Logo.jsx`. Nitido a ogni dimensione, a
  differenza dell'originale a 230×49px (salvato come riferimento in
  `public/assets/logo-originale.jpg`).
- **Sfondo hero** — panorama di **Civita di Bagnoregio** (borgo della Tuscia,
  prov. Viterbo), file statico `public/assets/viterbo-hero.jpg`
  (alternativa: `viterbo-hero-alt.jpg`). Nessuna immagine "a rotazione":
  tutti gli sfondi e le foto sono file locali fissi.
- **WhatsApp** — pulsante flottante in basso a destra con messaggio
  preimpostato (`src/components/WhatsAppButton.jsx`). Il numero
  `393510000000` è un **placeholder**: sostituire con il cellulare reale
  (formato internazionale senza "+").
- **Foto agente** — la scheda di Patrizio Valle usa un avatar con iniziali
  "PV"; sostituibile con una foto reale in `ChiSiamo.jsx`.
- **Telefono / email** — `0761 000000` e `info@studioimmobiliarejet.it` sono
  placeholder (presenti in Navbar, Footer, Contatti, Dettaglio, index.html).
- **Foto immobili** — servite localmente da `public/assets/properties/`
  (riutilizzate dagli asset reali dell'agenzia). Assegnate per tipologia;
  alcune sono condivise tra annunci simili.

## SEO

- `<title>`, meta description e Open Graph impostati per pagina (`Seo.jsx`).
- JSON-LD `RealEstateAgent` in `index.html`.
