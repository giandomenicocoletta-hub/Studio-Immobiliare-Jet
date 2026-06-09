import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import styles from './LoadingScreen.module.css'

/**
 * Schermata di caricamento iniziale: logo che appare in fadeIn, poi
 * l'intero schermo svanisce. Mostrata solo alla prima visita (sessionStorage).
 */
export default function LoadingScreen() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    return !sessionStorage.getItem('jet_seen_loader')
  })
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!show) return
    const t1 = setTimeout(() => setLeaving(true), 1200)
    const t2 = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem('jet_seen_loader', '1')
    }, 1650)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [show])

  if (!show) return null

  return (
    <div
      className={`${styles.screen} ${leaving ? styles.leaving : ''}`}
      role="status"
      aria-label="Caricamento"
    >
      <div className={styles.logo}>
        <Logo variant="dark" />
      </div>
      <div className={styles.bar}>
        <span />
      </div>
    </div>
  )
}
