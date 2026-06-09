import { useEffect, useRef, useState } from 'react'

const nf = new Intl.NumberFormat('it-IT')
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

/**
 * AnimatedCounter — conta da `from` a `to` quando entra nel viewport.
 * Props: from=0, to, duration(ms)=1500, prefix='', suffix='', separator=true
 */
export default function AnimatedCounter({
  from = 0,
  to,
  duration = 1500,
  prefix = '',
  suffix = '',
  separator = true,
}) {
  const [value, setValue] = useState(from)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const run = () => {
      if (started.current) return
      started.current = true
      if (prefersReduced) {
        setValue(to)
        return
      }
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1)
        setValue(Math.round(from + (to - from) * easeOutQuart(p)))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    // Fallback: se l'elemento è già nel viewport al mount, parti subito
    // (alcuni contesti non emettono IntersectionObserver senza uno scroll).
    const rect = node.getBoundingClientRect()
    const inView =
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0
    if (inView) {
      run()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run()
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [from, to, duration])

  const display = separator ? nf.format(value) : String(value)

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
