import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { IconPin, IconPhone, IconMail, IconClock } from './Icons.jsx'
import { AGENZIA, indirizzoCompleto } from '../data/agenzia.js'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <Logo variant="light" />
          <p className={styles.tagline}>
            Agenzia immobiliare di pregio nel territorio della Tuscia. Compravendita
            e locazione di immobili residenziali e commerciali a Viterbo e provincia.
          </p>
          <p className={styles.fimaa}>Associata FIMAA · Oltre 11 anni di esperienza</p>
          <a
            className={styles.social}
            href={AGENZIA.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Seguici su Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M14 9h3l.5-3H14V4.3c0-.9.3-1.5 1.6-1.5H17V.1C16.6.05 15.7 0 14.7 0 12.4 0 11 1.3 11 3.9V6H8v3h3v9h3V9Z" />
            </svg>
            Seguici su Facebook
          </a>
        </div>

        <nav className={styles.linksCol} aria-label="Link rapidi">
          <h3 className={styles.colTitle}>Naviga</h3>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/immobili" className={styles.link}>
            Immobili
          </Link>
          <Link to="/chi-siamo" className={styles.link}>
            Chi siamo
          </Link>
          <Link to="/contatti" className={styles.link}>
            Contatti
          </Link>
        </nav>

        <div className={styles.contactCol}>
          <h3 className={styles.colTitle}>Contatti</h3>
          <a
            className={styles.contactItem}
            href={`https://www.google.com/maps?q=${encodeURIComponent(AGENZIA.mapsQuery)}`}
            target="_blank"
            rel="noreferrer"
          >
            <IconPin width={18} height={18} />
            <span>{indirizzoCompleto}</span>
          </a>
          <a className={styles.contactItem} href={AGENZIA.telefonoHref}>
            <IconPhone width={18} height={18} />
            <span>Tel. {AGENZIA.telefono}</span>
          </a>
          <a className={styles.contactItem} href={AGENZIA.cellulareHref}>
            <IconPhone width={18} height={18} />
            <span>Cell. {AGENZIA.cellulare}</span>
          </a>
          <a className={styles.contactItem} href={`mailto:${AGENZIA.email}`}>
            <IconMail width={18} height={18} />
            <span>{AGENZIA.email}</span>
          </a>
          <div className={styles.contactItem}>
            <IconClock width={18} height={18} />
            <span>
              {AGENZIA.orariBreve}
              <br />
              Sab–Dom chiuso
            </span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>
            © {year} {AGENZIA.nome} · {AGENZIA.ragioneSociale} · {indirizzoCompleto} ·
            Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  )
}
