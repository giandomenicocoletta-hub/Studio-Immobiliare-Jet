/**
 * Logo Studio Immobiliare Jet — ricreazione vettoriale fedele all'originale:
 * wordmark "Studio Immobiliare" in serif corsivo bordeaux + emblema con
 * chiave dorata e ciondolo a rombo bordeaux con "JET" in oro.
 *
 * Vettoriale → nitido a ogni dimensione (l'originale era 230×49px).
 *
 * Props:
 *   variant: 'dark' (testo bordeaux/scuro) | 'light' (testo chiaro)
 *   compact: true -> solo emblema
 */
export default function Logo({ variant = 'dark', compact = false }) {
  const textColor = variant === 'light' ? '#FAF8F5' : '#6B1A1A'

  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}
      aria-label="Studio Immobiliare Jet"
    >
      {!compact && (
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)',
            lineHeight: 1,
            letterSpacing: '0.005em',
            color: textColor,
            whiteSpace: 'nowrap',
          }}
        >
          Studio Immobiliare
        </span>
      )}

      {/* Emblema: chiave dorata + ciondolo "JET" */}
      <svg
        width="46"
        height="40"
        viewBox="0 0 116 100"
        role="img"
        aria-hidden="true"
        style={{ flexShrink: 0, overflow: 'visible' }}
      >
        {/* Chiave (oro) */}
        <g
          stroke="#C9A84C"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          {/* gambo diagonale */}
          <line x1="20" y1="46" x2="86" y2="16" strokeWidth="6.5" />
          {/* occhiello (anello) della chiave */}
          <circle cx="95" cy="13" r="9.5" strokeWidth="5.5" />
          {/* dentini */}
          <path d="M20 46 l-3 8 M28 42 l-2.5 7 M35 39 l-2.5 6" strokeWidth="5" />
        </g>

        {/* Anellino che collega chiave e ciondolo */}
        <circle cx="55" cy="34" r="4.5" fill="none" stroke="#C9A84C" strokeWidth="3" />

        {/* Ciondolo a rombo con "JET" */}
        <g transform="rotate(45 57 63)">
          <rect
            x="40"
            y="46"
            width="34"
            height="34"
            rx="4"
            fill="#6B1A1A"
            stroke="#C9A84C"
            strokeWidth="3"
          />
        </g>
        <text
          x="57"
          y="69"
          textAnchor="middle"
          fontFamily="'Playfair Display', Georgia, serif"
          fontWeight="700"
          fontSize="18"
          letterSpacing="0.5"
          fill="#C9A84C"
        >
          JET
        </text>
      </svg>
    </span>
  )
}
