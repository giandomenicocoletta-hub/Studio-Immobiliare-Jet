/* ============================================================
   Icone SVG (stroke 1.75, currentColor) — nessuna emoji.
   Set coerente in stile lineare, ispirato a Lucide.
   ============================================================ */

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const IconSearch = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

export const IconBed = (p) => (
  <svg {...base} {...p}>
    <path d="M3 7v11M3 12h18a0 0 0 0 1 0 0v6M21 18v-3a3 3 0 0 0-3-3H8" />
    <path d="M7 9.5h2a2 2 0 0 1 2 2V12" />
  </svg>
)

export const IconBath = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
    <path d="M5 12V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2" />
    <path d="M8 6h2.5" />
    <path d="M7 19l-1 2M18 19l1 2" />
  </svg>
)

export const IconRuler = (p) => (
  <svg {...base} {...p}>
    <path d="M3 9 9 3l12 12-6 6z" />
    <path d="M6 9.5 7.5 11M9 6.5 10.5 8M12 9.5 13.5 11M9 12.5 10.5 14" />
  </svg>
)

export const IconPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const IconLayers = (p) => (
  <svg {...base} {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5M3 17l9 5 9-5" />
  </svg>
)

export const IconFlame = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3c.5 3-2 4-2 7a2 2 0 0 0 4 0c0-1 .5-1.5 1-2 1 2 2 3.2 2 5a5 5 0 0 1-10 0c0-4 3-6 5-10Z" />
  </svg>
)

export const IconLeaf = (p) => (
  <svg {...base} {...p}>
    <path d="M4 20c0-9 7-15 16-15 0 9-6 15-16 15Z" />
    <path d="M9 15c2-3 5-5 8-6" />
  </svg>
)

export const IconCar = (p) => (
  <svg {...base} {...p}>
    <path d="M5 17h14M4 17l1.5-5A2 2 0 0 1 7.4 11h9.2a2 2 0 0 1 1.9 1l1.5 5" />
    <path d="M4 17v2M20 17v2" />
    <circle cx="7.5" cy="17" r="1" />
    <circle cx="16.5" cy="17" r="1" />
  </svg>
)

export const IconCalendar = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
)

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5L14 12l4 1.5V17a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const IconClock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const IconArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const IconArrowLeft = (p) => (
  <svg {...base} {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
)

export const IconChevronDown = (p) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const IconChevronRight = (p) => (
  <svg {...base} {...p}>
    <path d="m9 6 6 6-6 6" />
  </svg>
)

export const IconMenu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const IconClose = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const IconCheck = (p) => (
  <svg {...base} {...p}>
    <path d="m5 12 5 5 9-11" />
  </svg>
)

export const IconShield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const IconHandshake = (p) => (
  <svg {...base} {...p}>
    <path d="m11 17 2 2a1.5 1.5 0 0 0 2-2" />
    <path d="m15 17 1.5 1.5a1.5 1.5 0 0 0 2-2L13 11l-2 1.5a2 2 0 0 1-2.4 0L7 11l-4 4" />
    <path d="m3 7 4-2 4 1.5L15 5l6 2" />
  </svg>
)

export const IconEye = (p) => (
  <svg {...base} {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

export const IconHeart = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10Z" />
  </svg>
)

export const IconHome = (p) => (
  <svg {...base} {...p}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v9h12v-9" />
  </svg>
)

export const IconKey = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="4" />
    <path d="m11 11 8 8M16 16l2-2M18 18l1.5-1.5" />
  </svg>
)

export const IconAward = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="m8.5 13-1.5 7 5-3 5 3-1.5-7" />
  </svg>
)

export const IconSliders = (p) => (
  <svg {...base} {...p}>
    <path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4" />
    <circle cx="16" cy="6" r="2" />
    <circle cx="8" cy="12" r="2" />
    <circle cx="14" cy="18" r="2" />
  </svg>
)

export const IconBuilding = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="3" width="11" height="18" rx="1.5" />
    <path d="M15 8h4a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-4" />
    <path d="M8 7h3M8 11h3M8 15h3M18 12h0M18 16h0" />
  </svg>
)

export const IconChart = (p) => (
  <svg {...base} {...p}>
    <path d="M4 4v16h16" />
    <path d="M8 15l3-4 3 2 4-6" />
  </svg>
)

export const IconDoc = (p) => (
  <svg {...base} {...p}>
    <path d="M7 3h7l4 4v14a0 0 0 0 1 0 0H7a0 0 0 0 1 0 0V3Z" />
    <path d="M14 3v4h4M9 13h6M9 17h4" />
  </svg>
)

export const IconTrees = (p) => (
  <svg {...base} {...p}>
    <path d="M8 14a4 4 0 1 1 0-8 4 4 0 0 1 4-1 3.5 3.5 0 0 1 3 5" />
    <path d="M9 14v7M9 18l-2-2M9 17l2-2" />
    <path d="M16 21v-5M16 16a3 3 0 1 0 0-6" />
  </svg>
)

export const IconStar = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.7l5.9-.9z" />
  </svg>
)
