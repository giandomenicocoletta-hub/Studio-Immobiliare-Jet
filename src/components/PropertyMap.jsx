import styles from './PropertyMap.module.css'

/**
 * PropertyMap — mappa Google Maps tramite embed (nessuna API key richiesta).
 * Un <iframe> non introduce gli z-index elevati di Leaflet, quindi non si
 * sovrappone più a navbar e sezioni durante lo scroll.
 *
 * Props:
 *   lat, lng   coordinate (fallback se manca `query`)
 *   query      stringa indirizzo da cercare (preferita per l'etichetta)
 *   zoom       livello di zoom (default 14)
 *   height     altezza in px (default 360)
 *   title      titolo accessibile dell'iframe
 */
export default function PropertyMap({
  lat,
  lng,
  query,
  zoom = 14,
  height = 360,
  title = 'Mappa',
}) {
  const q = query ? encodeURIComponent(query) : `${lat},${lng}`
  const src = `https://www.google.com/maps?q=${q}&z=${zoom}&hl=it&output=embed`

  return (
    <div className={styles.mapWrap} style={{ height }}>
      <iframe
        title={title}
        src={src}
        className={styles.map}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}
