import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { TIPOLOGIE, TIPOLOGIA_LABEL, COMUNI } from '../data/immobili.js'
import { formatNumero } from '../lib/format.js'
import { IconSearch, IconSliders, IconChevronDown, IconClose } from './Icons.jsx'
import styles from './SearchBar.module.css'

const PREZZO_BUCKETS = [
  { value: '', label: 'Qualsiasi prezzo' },
  { value: '100000', label: 'Fino a € 100.000' },
  { value: '200000', label: 'Fino a € 200.000' },
  { value: '400000', label: 'Fino a € 400.000' },
  { value: '600000', label: 'Fino a € 600.000' },
  { value: '9999999', label: 'Oltre € 600.000' },
]

const LOCALI_OPTS = ['1', '2', '3', '4', '5']

/** Costruisce una query string dai filtri non vuoti. */
function buildQuery(f) {
  const params = new URLSearchParams()
  if (f.tipologia) params.set('tipo', f.tipologia)
  if (f.contratto) params.set('contratto', f.contratto)
  if (f.comune) params.set('comune', f.comune)
  if (f.prezzoMax) params.set('max', f.prezzoMax)
  if (f.superficieMin) params.set('supMin', f.superficieMin)
  if (f.locali) params.set('locali', f.locali)
  return params
}

/**
 * SearchBar
 * Props:
 *   variant: 'compact' (hero) | 'full' (sidebar pagina Immobili)
 *   onSearch?: (filtri) => void  — chiamato ad ogni cambio (variant full)
 */
export default function SearchBar({ variant = 'compact', onSearch }) {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [compactOpen, setCompactOpen] = useState(false)

  // Blocca lo scroll del body quando il drawer filtri (mobile) è aperto.
  useEffect(() => {
    if (variant !== 'full') return
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen, variant])

  const [f, setF] = useState({
    tipologia: searchParams.get('tipo') || '',
    contratto: searchParams.get('contratto') || '',
    comune: searchParams.get('comune') || '',
    prezzoMax: searchParams.get('max') || '',
    superficieMin: searchParams.get('supMin') || '',
    locali: searchParams.get('locali') || '',
  })

  const apply = (next) => {
    setF(next)
    if (variant === 'full') {
      const params = buildQuery(next)
      // Conserva l'ordinamento se presente
      const sort = searchParams.get('sort')
      if (sort) params.set('sort', sort)
      setSearchParams(params, { replace: true })
      onSearch?.(next)
    }
  }

  const update = (key) => (e) => {
    const value = e?.target ? e.target.value : e
    apply({ ...f, [key]: value })
  }

  const toggleContratto = (val) =>
    apply({ ...f, contratto: f.contratto === val ? '' : val })

  const toggleLocali = (val) =>
    apply({ ...f, locali: f.locali === val ? '' : val })

  const reset = () => {
    const cleared = {
      tipologia: '',
      contratto: '',
      comune: '',
      prezzoMax: '',
      superficieMin: '',
      locali: '',
    }
    setF(cleared)
    if (variant === 'full') {
      setSearchParams(new URLSearchParams(), { replace: true })
      onSearch?.(cleared)
    }
  }

  const submit = (e) => {
    e.preventDefault()
    navigate(`/immobili?${buildQuery(f).toString()}`)
  }

  /* ---------- COMPACT (hero) ---------- */
  if (variant === 'compact') {
    return (
      <form
        className={`${styles.compact} ${compactOpen ? styles.compactOpen : ''}`}
        onSubmit={submit}
        role="search"
      >
        {/* Accordion trigger (solo mobile) */}
        <button
          type="button"
          className={styles.compactTrigger}
          onClick={() => setCompactOpen((v) => !v)}
          aria-expanded={compactOpen}
        >
          <span>
            <IconSearch width={18} height={18} /> Cerca immobile
          </span>
          <IconChevronDown
            width={20}
            height={20}
            className={styles.triggerChevron}
          />
        </button>

        <div className={styles.compactField}>
          <label>Tipologia</label>
          <select value={f.tipologia} onChange={update('tipologia')}>
            <option value="">Tutte</option>
            {TIPOLOGIE.map((t) => (
              <option key={t} value={t}>
                {TIPOLOGIA_LABEL[t]}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.compactField}>
          <label>Contratto</label>
          <div className={styles.toggle}>
            <button
              type="button"
              className={f.contratto === 'vendita' ? styles.toggleOn : ''}
              onClick={() => toggleContratto('vendita')}
            >
              Vendita
            </button>
            <button
              type="button"
              className={f.contratto === 'affitto' ? styles.toggleOn : ''}
              onClick={() => toggleContratto('affitto')}
            >
              Affitto
            </button>
          </div>
        </div>

        <div className={styles.compactField}>
          <label>Comune</label>
          <select value={f.comune} onChange={update('comune')}>
            <option value="">Tutti i comuni</option>
            {COMUNI.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.compactField}>
          <label>Prezzo max</label>
          <select value={f.prezzoMax} onChange={update('prezzoMax')}>
            {PREZZO_BUCKETS.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className={`btn btn-primary ${styles.searchBtn}`}>
          <IconSearch width={18} height={18} />
          Cerca
        </button>
      </form>
    )
  }

  /* ---------- FULL (sidebar) ---------- */
  return (
    <div className={styles.full}>
      <button
        type="button"
        className={styles.mobileToggle}
        onClick={() => setMobileOpen((v) => !v)}
        aria-expanded={mobileOpen}
      >
        <IconSliders width={18} height={18} />
        Filtri
      </button>

      {/* Backdrop del drawer filtri (solo mobile) */}
      <div
        className={`${styles.sheetBackdrop} ${mobileOpen ? styles.sheetBackdropOpen : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <div className={`${styles.panel} ${mobileOpen ? styles.panelOpen : ''}`}>
        <div className={styles.panelHead}>
          <h2 className={styles.panelTitle}>Filtra</h2>
          <button type="button" className={styles.reset} onClick={reset}>
            Azzera filtri
          </button>
          <button
            type="button"
            className={styles.sheetClose}
            onClick={() => setMobileOpen(false)}
            aria-label="Chiudi i filtri"
          >
            <IconClose width={22} height={22} />
          </button>
        </div>

        <div className={styles.group}>
          <span className={styles.label}>Contratto</span>
          <div className={styles.toggle}>
            <button
              type="button"
              className={f.contratto === 'vendita' ? styles.toggleOn : ''}
              onClick={() => toggleContratto('vendita')}
            >
              Vendita
            </button>
            <button
              type="button"
              className={f.contratto === 'affitto' ? styles.toggleOn : ''}
              onClick={() => toggleContratto('affitto')}
            >
              Affitto
            </button>
          </div>
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="f-tipo">
            Tipologia
          </label>
          <select id="f-tipo" value={f.tipologia} onChange={update('tipologia')}>
            <option value="">Tutte le tipologie</option>
            {TIPOLOGIE.map((t) => (
              <option key={t} value={t}>
                {TIPOLOGIA_LABEL[t]}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="f-comune">
            Comune
          </label>
          <select id="f-comune" value={f.comune} onChange={update('comune')}>
            <option value="">Tutti i comuni</option>
            {COMUNI.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="f-prezzo">
            Prezzo massimo
            <span className={styles.value}>
              {f.prezzoMax ? `€ ${formatNumero(Number(f.prezzoMax))}` : 'Qualsiasi'}
            </span>
          </label>
          <input
            id="f-prezzo"
            type="range"
            min="0"
            max="700000"
            step="10000"
            value={f.prezzoMax || 700000}
            onChange={(e) =>
              update('prezzoMax')(e.target.value === '700000' ? '' : e.target.value)
            }
            className={styles.range}
          />
        </div>

        <div className={styles.group}>
          <label className={styles.label} htmlFor="f-sup">
            Superficie minima
            <span className={styles.value}>
              {f.superficieMin ? `${f.superficieMin} m²` : 'Qualsiasi'}
            </span>
          </label>
          <input
            id="f-sup"
            type="range"
            min="0"
            max="300"
            step="10"
            value={f.superficieMin || 0}
            onChange={(e) =>
              update('superficieMin')(e.target.value === '0' ? '' : e.target.value)
            }
            className={styles.range}
          />
        </div>

        <div className={styles.group}>
          <span className={styles.label}>Locali (minimo)</span>
          <div className={styles.localiRow}>
            {LOCALI_OPTS.map((n) => (
              <button
                key={n}
                type="button"
                className={`${styles.localiBtn} ${
                  f.locali === n ? styles.localiOn : ''
                }`}
                onClick={() => toggleLocali(n)}
              >
                {n === '5' ? '5+' : n}
              </button>
            ))}
          </div>
        </div>

        {/* Conferma (solo mobile, chiude il drawer) */}
        <button
          type="button"
          className={styles.applyBtn}
          onClick={() => setMobileOpen(false)}
        >
          Vedi gli immobili
        </button>
      </div>
    </div>
  )
}
