import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import SearchBar from '../components/SearchBar.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import { filtraImmobili, ordinaImmobili, SORT_OPTIONS } from '../data/immobili.js'
import { IconSearch, IconArrowRight } from '../components/Icons.jsx'
import styles from './Immobili.module.css'

export default function Immobili() {
  const [searchParams, setSearchParams] = useSearchParams()

  const filtri = useMemo(
    () => ({
      tipologia: searchParams.get('tipo') || '',
      contratto: searchParams.get('contratto') || '',
      comune: searchParams.get('comune') || '',
      prezzoMax: searchParams.get('max') ? Number(searchParams.get('max')) : null,
      superficieMin: searchParams.get('supMin')
        ? Number(searchParams.get('supMin'))
        : null,
      locali: searchParams.get('locali') || '',
    }),
    [searchParams]
  )

  const sort = searchParams.get('sort') || 'rilevanti'

  const risultati = useMemo(() => {
    const filtered = filtraImmobili(filtri)
    return ordinaImmobili(filtered, sort)
  }, [filtri, sort])

  const onSort = (e) => {
    const next = new URLSearchParams(searchParams)
    next.set('sort', e.target.value)
    setSearchParams(next, { replace: true })
  }

  return (
    <>
      <Seo
        title="Immobili in vendita e affitto"
        description="Esplora ville, appartamenti, terreni e immobili commerciali a Viterbo e provincia. Filtra per tipologia, prezzo, superficie e comune."
      />

      <div className={styles.head}>
        <div className="container">
          <p className="eyebrow">I nostri immobili</p>
          <h1 className={styles.title}>Trova la tua proprietà nella Tuscia</h1>
          <p className={styles.sub}>
            Una selezione curata di immobili a Viterbo e in tutta la provincia.
          </p>
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        {/* Sidebar filtri */}
        <aside className={styles.sidebar}>
          <SearchBar variant="full" />
        </aside>

        {/* Risultati */}
        <div className={styles.results}>
          <div className={styles.toolbar}>
            <p className={styles.count}>
              <strong>
                <AnimatedCounter to={risultati.length} duration={900} />
              </strong>{' '}
              {risultati.length === 1 ? 'immobile trovato' : 'immobili trovati'}
            </p>
            <label className={styles.sortLabel}>
              <span>Ordina per</span>
              <select value={sort} onChange={onSort} className={styles.sortSelect}>
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {risultati.length > 0 ? (
            <div className={styles.grid}>
              {risultati.map((imm, idx) => (
                <PropertyCard key={imm.id} immobile={imm} index={idx % 3} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>
                <IconSearch width={36} height={36} />
              </span>
              <h2>Nessun immobile corrisponde ai filtri</h2>
              <p>
                Prova ad ampliare i criteri di ricerca oppure contattaci: spesso abbiamo
                soluzioni non ancora pubblicate.
              </p>
              <Link to="/contatti" className="btn btn-primary">
                Contattaci <IconArrowRight width={18} height={18} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
