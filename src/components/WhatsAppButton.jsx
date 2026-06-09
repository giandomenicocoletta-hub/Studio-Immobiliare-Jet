import styles from './WhatsAppButton.module.css'
import { whatsappLink } from '../data/agenzia.js'

/**
 * Pulsante WhatsApp flottante (in basso a destra).
 * Click → apre la chat con il cellulare reale dell'agenzia e un
 * messaggio preimpostato.
 */
const PRESET_MESSAGE =
  'Salve! Ho visitato il sito di Studio Immobiliare Jet e vorrei ricevere maggiori informazioni.'

export default function WhatsAppButton() {
  const href = whatsappLink(PRESET_MESSAGE)

  return (
    <a
      className={styles.fab}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
    >
      <span className={styles.pulse} aria-hidden="true" />
      <svg
        className={styles.icon}
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.001 3.2C9.07 3.2 3.43 8.84 3.43 15.77c0 2.22.58 4.39 1.69 6.3L3.2 28.8l6.9-1.81a12.54 12.54 0 0 0 5.9 1.5h.01c6.93 0 12.57-5.64 12.57-12.57 0-3.36-1.31-6.51-3.68-8.89A12.48 12.48 0 0 0 16 3.2Zm0 22.98h-.01a10.43 10.43 0 0 1-5.31-1.45l-.38-.23-3.94 1.03 1.05-3.84-.25-.39a10.4 10.4 0 0 1-1.6-5.54c0-5.76 4.69-10.45 10.46-10.45 2.79 0 5.42 1.09 7.39 3.06a10.38 10.38 0 0 1 3.06 7.4c0 5.76-4.69 10.45-10.45 10.45Zm5.73-7.83c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.33-.49-2.53-1.56-.94-.83-1.57-1.86-1.75-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55l-.6-.01c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.38 4.76.75.32 1.34.51 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.86-.76 2.12-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
      </svg>
      <span className={styles.tooltip}>Scrivici su WhatsApp</span>
    </a>
  )
}
