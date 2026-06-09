import { useEffect } from 'react'

/**
 * Seo — imposta <title>, meta description e og:image per pagina.
 * Leggero, senza dipendenze (alternativa a react-helmet).
 */
function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function Seo({ title, description, image }) {
  useEffect(() => {
    const full = title
      ? `Studio Immobiliare Jet — ${title} | Viterbo`
      : 'Studio Immobiliare Jet — Agenzia Immobiliare a Viterbo'
    document.title = full
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', full)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', image)
  }, [title, description, image])

  return null
}
