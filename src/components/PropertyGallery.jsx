import { useCallback, useEffect, useRef, useState } from 'react'
import { IconArrowLeft, IconArrowRight, IconClose, IconEye } from './Icons.jsx'
import styles from './PropertyGallery.module.css'

/**
 * PropertyGallery
 * Props: foto[] (array URL), titolo
 * - Galleria principale (1 grande + griglia laterale)
 * - Lightbox fullscreen: frecce custom, counter, thumbnails, ← → Esc, swipe
 */
export default function PropertyGallery({ foto = [], titolo = '' }) {
  const [open, setOpen] = useState(false)
  const [i, setI] = useState(0)
  const touchX = useRef(null)

  const total = foto.length
  const go = useCallback(
    (n) => setI((prev) => (n + total) % total),
    [total]
  )
  const next = useCallback(() => go(i + 1), [go, i])
  const prev = useCallback(() => go(i - 1), [go, i])

  const openAt = (idx) => {
    setI(idx)
    setOpen(true)
  }

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, next, prev])

  if (!total) return null

  return (
    <div className={styles.wrap}>
      {/* Galleria principale */}
      <div className={styles.grid} data-count={Math.min(total, 3)}>
        <button className={styles.main} onClick={() => openAt(0)} aria-label="Apri galleria">
          <img src={foto[0]} alt={`${titolo} — foto 1`} />
          <span className={styles.expand}>
            <IconEye width={18} height={18} /> {total} foto
          </span>
        </button>
        {total > 1 && (
          <div className={styles.side}>
            {foto.slice(1, 3).map((src, idx) => (
              <button
                key={src + idx}
                className={styles.thumb}
                onClick={() => openAt(idx + 1)}
                aria-label={`Apri foto ${idx + 2}`}
              >
                <img src={src} alt={`${titolo} — foto ${idx + 2}`} />
                {idx === 1 && total > 3 && (
                  <span className={styles.more}>+{total - 3}</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Galleria: ${titolo}`}
          onClick={() => setOpen(false)}
        >
          <button
            className={`${styles.lbClose} js-cursor-grow`}
            onClick={() => setOpen(false)}
            aria-label="Chiudi galleria"
          >
            <IconClose width={26} height={26} />
          </button>

          <span className={styles.counter}>
            {i + 1} / {total}
          </span>

          <button
            className={`${styles.arrow} ${styles.arrowL}`}
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Foto precedente"
          >
            <IconArrowLeft width={24} height={24} />
          </button>

          <div
            className={styles.stage}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current == null) return
              const dx = e.changedTouches[0].clientX - touchX.current
              if (dx > 50) prev()
              else if (dx < -50) next()
              touchX.current = null
            }}
          >
            <img
              key={i}
              src={foto[i]}
              alt={`${titolo} — foto ${i + 1}`}
              className={styles.lbImg}
            />
          </div>

          <button
            className={`${styles.arrow} ${styles.arrowR}`}
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Foto successiva"
          >
            <IconArrowRight width={24} height={24} />
          </button>

          <div className={styles.strip} onClick={(e) => e.stopPropagation()}>
            {foto.map((src, idx) => (
              <button
                key={src + idx}
                className={`${styles.stripThumb} ${idx === i ? styles.stripOn : ''}`}
                onClick={() => setI(idx)}
                aria-label={`Vai alla foto ${idx + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
