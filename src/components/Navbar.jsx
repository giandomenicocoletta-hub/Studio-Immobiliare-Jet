import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { IconMenu, IconClose, IconPhone } from './Icons.jsx'
import { AGENZIA } from '../data/agenzia.js'
import styles from './Navbar.module.css'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/immobili', label: 'Immobili' },
  { to: '/chi-siamo', label: 'Chi siamo' },
  { to: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Home: navbar trasparente sopra l'hero finché non si scrolla.
  const transparentTop = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Chiude il drawer al cambio pagina e blocca lo scroll quando aperto.
  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || !transparentTop

  return (
    <header
      className={`${styles.nav} ${solid ? styles.scrolled : ''} ${
        transparentTop && !scrolled ? styles.overHero : ''
      }`}
    >
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="Studio Immobiliare Jet — Home">
          <Logo variant={transparentTop && !scrolled ? 'light' : 'dark'} />
        </Link>

        <nav className={styles.links} aria-label="Navigazione principale">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <a href={AGENZIA.telefonoHref} className={`btn btn-primary ${styles.cta}`}>
          <IconPhone width={16} height={16} />
          {AGENZIA.telefono}
        </a>

        {/* Mobile: chiamata rapida (icona) + hamburger */}
        <a
          href={AGENZIA.telefonoHref}
          className={styles.callMobile}
          aria-label={`Chiama ${AGENZIA.telefono}`}
        >
          <IconPhone width={20} height={20} />
        </a>
        <button
          className={styles.burger}
          onClick={() => setOpen(true)}
          aria-label="Apri il menu"
          aria-expanded={open}
        >
          <IconMenu width={26} height={26} />
        </button>
      </div>

      {/* Drawer mobile */}
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-hidden={!open}
      >
        <div className={styles.drawerHead}>
          <Logo variant="dark" />
          <button
            className={styles.drawerClose}
            onClick={() => setOpen(false)}
            aria-label="Chiudi il menu"
          >
            <IconClose width={26} height={26} />
          </button>
        </div>
        <nav className={styles.drawerLinks}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `${styles.drawerLink} ${isActive ? styles.drawerActive : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <a href={AGENZIA.telefonoHref} className="btn btn-primary" style={{ width: '100%' }}>
          <IconPhone width={16} height={16} />
          Chiama: {AGENZIA.telefono}
        </a>
      </aside>
    </header>
  )
}
