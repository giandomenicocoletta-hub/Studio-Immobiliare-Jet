import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

/**
 * Cursore custom: punto bordeaux che segue il mouse + anello che si
 * espande sugli elementi interattivi. Disattivato su touch / reduced-motion.
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || prefersReduced) return

    const dot = dotRef.current
    const ring = ringRef.current
    let rx = 0,
      ry = 0,
      mx = 0,
      my = 0,
      raf = null

    // Anello con lieve inerzia. Il loop gira solo finché l'anello non ha
    // raggiunto il puntatore: a riposo si ferma (niente RAF perpetuo).
    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      if (Math.abs(mx - rx) > 0.3 || Math.abs(my - ry) > 0.3) {
        raf = requestAnimationFrame(loop)
      } else {
        ring.style.transform = `translate(${mx}px, ${my}px)`
        raf = null
      }
    }

    let revealed = false
    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px)`
      if (!revealed) {
        revealed = true
        rx = mx
        ry = my
        dot.style.opacity = '1'
        ring.style.opacity = '1'
      }
      if (raf == null) raf = requestAnimationFrame(loop)
    }

    const interactive = 'a, button, [role="button"], .js-cursor-grow, input, select, textarea, label'
    const onOver = (e) => {
      if (e.target.closest(interactive)) ring.classList.add(styles.grow)
    }
    const onOut = (e) => {
      if (e.target.closest(interactive)) ring.classList.remove(styles.grow)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.body.classList.add(styles.hideNative)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.body.classList.remove(styles.hideNative)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className={`${styles.ring} cursor-ring`} aria-hidden="true" />
      <div ref={dotRef} className={`${styles.dot} cursor-dot`} aria-hidden="true" />
    </>
  )
}
