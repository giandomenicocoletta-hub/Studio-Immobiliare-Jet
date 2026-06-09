/* Formattazione numeri e prezzi in formato italiano. */

const nf = new Intl.NumberFormat('it-IT')

/** 415000 -> "415.000" */
export const formatNumero = (n) => nf.format(n)

/**
 * Prezzo formattato in base al contratto.
 *  vendita -> "€ 415.000"
 *  affitto -> "€ 570/mese"
 */
export function formatPrezzo(prezzo, contratto) {
  if (prezzo == null) return 'Prezzo su richiesta'
  const base = `€ ${nf.format(prezzo)}`
  return contratto === 'affitto' ? `${base}/mese` : base
}
