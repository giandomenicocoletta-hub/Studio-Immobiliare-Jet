import { Link } from 'react-router-dom'
import { TIPOLOGIA_LABEL } from '../data/immobili.js'
import { formatPrezzo } from '../lib/format.js'
import { IconBed, IconBath, IconRuler, IconPin, IconArrowRight } from './Icons.jsx'
import styles from './PropertyCard.module.css'

/**
 * PropertyCard
 * Props: immobile, variant ('grid' | 'featured'), index (per stagger)
 */
export default function PropertyCard({
  immobile,
  variant = 'grid',
  index = 0,
  reveal = false,
}) {
  const {
    id,
    titolo,
    tipologia,
    contratto,
    prezzo,
    superficie,
    locali,
    bagni,
    comune,
    zona,
    foto,
    inEvidenza,
    nuovo,
  } = immobile

  return (
    <article
      className={`${styles.card} js-cursor-grow ${reveal ? 'reveal' : ''} ${
        variant === 'featured' ? styles.featured : ''
      }`}
      style={{ '--index': index }}
    >
      <Link to={`/immobili/${id}`} className={styles.media} aria-label={titolo}>
        <img src={foto[0]} alt={titolo} loading="lazy" className={styles.img} />
        <div className={styles.badges}>
          {nuovo && <span className={`${styles.badge} ${styles.badgeNew}`}>Nuovo</span>}
          {inEvidenza && (
            <span className={`${styles.badge} ${styles.badgeFeat}`}>In evidenza</span>
          )}
        </div>
        <span className={styles.type}>{TIPOLOGIA_LABEL[tipologia]}</span>
        <div className={styles.overlay}>
          <span>
            Scopri l'immobile <IconArrowRight width={18} height={18} />
          </span>
        </div>
      </Link>

      <div className={styles.body}>
        <p className={styles.price}>{formatPrezzo(prezzo, contratto)}</p>
        <h3 className={styles.title}>
          <Link to={`/immobili/${id}`}>{titolo}</Link>
        </h3>
        <p className={styles.location}>
          <IconPin width={15} height={15} />
          {comune}
          {zona ? ` · ${zona}` : ''}
        </p>

        <ul className={styles.specs}>
          <li>
            <IconRuler width={17} height={17} />
            {superficie} m²
          </li>
          {locali != null && (
            <li>
              <IconBed width={17} height={17} />
              {locali} {locali === 1 ? 'locale' : 'locali'}
            </li>
          )}
          {bagni != null && (
            <li>
              <IconBath width={17} height={17} />
              {bagni} {bagni === 1 ? 'bagno' : 'bagni'}
            </li>
          )}
        </ul>

        <Link to={`/immobili/${id}`} className={styles.cta}>
          Scopri <IconArrowRight width={16} height={16} />
        </Link>
      </div>
    </article>
  )
}
