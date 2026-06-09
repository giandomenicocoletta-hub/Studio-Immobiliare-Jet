import { useEffect, useRef } from 'react'

/**
 * useScrollReveal — aggiunge la classe `.revealed` quando l'elemento
 * (o i suoi figli con [data-reveal]) entrano nel viewport.
 *
 * Uso:
 *   const ref = useScrollReveal()
 *   <section ref={ref}>...</section>
 *
 * Gli elementi rivelati possono usare la classe `.reveal` (vedi base.css)
 * e una CSS var `--index` per lo stagger.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    // Rispetta la preferenza di movimento ridotto: rivela subito.
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const targets = root.hasAttribute('data-reveal')
      ? [root]
      : Array.from(root.querySelectorAll('[data-reveal], .reveal'))

    const items = targets.length ? targets : [root]

    if (prefersReduced) {
      items.forEach((el) => el.classList.add('revealed'))
      return
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options }
    )

    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return ref
}
