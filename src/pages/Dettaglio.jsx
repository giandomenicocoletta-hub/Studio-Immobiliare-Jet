import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PropertyGallery from '../components/PropertyGallery.jsx'
import PropertyMap from '../components/PropertyMap.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import {
  getImmobileById,
  immobiliCorrelati,
  TIPOLOGIA_LABEL,
} from '../data/immobili.js'
import { formatPrezzo, formatNumero } from '../lib/format.js'
import { AGENZIA } from '../data/agenzia.js'
import {
  IconRuler,
  IconBed,
  IconBath,
  IconLayers,
  IconCalendar,
  IconFlame,
  IconLeaf,
  IconCar,
  IconPin,
  IconCheck,
  IconChevronRight,
  IconArrowRight,
} from '../components/Icons.jsx'
import styles from './Dettaglio.module.css'

export default function Dettaglio() {
  const { id } = useParams()
  const immobile = getImmobileById(id)
  const [sent, setSent] = useState(false)

  if (!immobile) {
    return (
      <div className={styles.notFound}>
        <h1>Immobile non trovato</h1>
        <p>L'annuncio che cerchi non è più disponibile o l'indirizzo non è corretto.</p>
        <Link to="/immobili" className="btn btn-primary">
          Torna agli immobili
        </Link>
      </div>
    )
  }

  const {
    titolo,
    tipologia,
    contratto,
    prezzo,
    superficie,
    locali,
    bagni,
    piano,
    comune,
    zona,
    indirizzo,
    descrizione,
    caratteristiche,
    classeEnergetica,
    riscaldamento,
    foto,
    lat,
    lng,
    ref,
    dataInserimento,
  } = immobile

  const anno = new Date(dataInserimento).getFullYear()
  const correlati = immobiliCorrelati(immobile, 3)

  const scheda = [
    { icon: IconRuler, label: 'Superficie', value: `${formatNumero(superficie)} m²` },
    locali != null && { icon: IconBed, label: 'Locali', value: locali },
    bagni != null && { icon: IconBath, label: 'Bagni', value: bagni },
    piano && { icon: IconLayers, label: 'Piano', value: piano },
    { icon: IconCalendar, label: 'Inserito nel', value: anno },
    riscaldamento && { icon: IconFlame, label: 'Riscaldamento', value: riscaldamento },
    classeEnergetica && {
      icon: IconLeaf,
      label: 'Classe energetica',
      value: classeEnergetica,
    },
    { icon: IconCar, label: 'Posto auto', value: 'Disponibile' },
  ].filter(Boolean)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Seo
        title={titolo}
        description={descrizione.slice(0, 155)}
        image={foto[0]}
      />

      <div className={styles.page}>
        {/* Breadcrumb */}
        <nav className={`container ${styles.crumbs}`} aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <IconChevronRight width={14} height={14} />
          <Link to="/immobili">Immobili</Link>
          <IconChevronRight width={14} height={14} />
          <span>{titolo}</span>
        </nav>

        {/* Header + galleria */}
        <header className={`container ${styles.header}`}>
          <div className={styles.headTop}>
            <div>
              <div className={styles.tags}>
                <span className={styles.typeTag}>{TIPOLOGIA_LABEL[tipologia]}</span>
                <span className={styles.contractTag}>
                  {contratto === 'affitto' ? 'In affitto' : 'In vendita'}
                </span>
              </div>
              <h1 className={styles.title}>{titolo}</h1>
              <p className={styles.addr}>
                <IconPin width={17} height={17} />
                {indirizzo} · {comune}
                {zona ? ` (${zona})` : ''}
              </p>
            </div>
            <div className={styles.priceBox}>
              <p className={styles.price}>{formatPrezzo(prezzo, contratto)}</p>
              <p className={styles.ref}>Rif. {ref}</p>
            </div>
          </div>

          <PropertyGallery foto={foto} titolo={titolo} />
        </header>

        {/* Corpo: info + form */}
        <div className={`container ${styles.body}`}>
          <div className={styles.main}>
            {/* Scheda tecnica */}
            <section className={styles.block}>
              <h2 className={styles.blockTitle}>Scheda tecnica</h2>
              <ul className={styles.scheda}>
                {scheda.map((s) => {
                  const Icon = s.icon
                  return (
                    <li key={s.label}>
                      <span className={styles.schedaIcon}>
                        <Icon width={20} height={20} />
                      </span>
                      <span className={styles.schedaText}>
                        <span className={styles.schedaLabel}>{s.label}</span>
                        <span className={styles.schedaValue}>{s.value}</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </section>

            {/* Descrizione */}
            <section className={styles.block}>
              <span className="rule-gold" />
              <h2 className={styles.blockTitle}>Descrizione</h2>
              <p className={styles.desc}>{descrizione}</p>

              {caratteristiche?.length > 0 && (
                <ul className={styles.feat}>
                  {caratteristiche.map((c) => (
                    <li key={c}>
                      <IconCheck width={16} height={16} />
                      {c}
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Mappa */}
            <section className={styles.block}>
              <h2 className={styles.blockTitle}>Dove si trova</h2>
              <PropertyMap
                lat={lat}
                lng={lng}
                query={`${indirizzo}, ${comune}`}
                zoom={15}
                title={titolo}
                height={380}
              />
              <p className={styles.mapNote}>
                <IconPin width={15} height={15} />
                {comune}
                {zona ? ` · ${zona}` : ''} — posizione indicativa della zona.
              </p>
            </section>
          </div>

          {/* Form contatto sticky */}
          <aside className={styles.aside}>
            <div className={styles.form}>
              <h2 className={styles.formTitle}>Richiedi informazioni</h2>
              <p className={styles.formSub}>
                Un nostro agente ti risponderà al più presto.
              </p>

              {sent ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}>
                    <IconCheck width={28} height={28} />
                  </span>
                  <p>
                    <strong>Richiesta inviata!</strong>
                    <br />
                    Ti contatteremo a breve per l'immobile rif. {ref}.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className={styles.formFields}>
                  <div className={styles.field}>
                    <label htmlFor="d-nome">Nome e cognome *</label>
                    <input id="d-nome" name="nome" type="text" required autoComplete="name" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="d-tel">Telefono *</label>
                    <input id="d-tel" name="tel" type="tel" required autoComplete="tel" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="d-email">Email *</label>
                    <input
                      id="d-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="d-msg">Messaggio</label>
                    <textarea
                      id="d-msg"
                      name="msg"
                      rows={3}
                      defaultValue={`Salve, sono interessato/a all'immobile "${titolo}" (rif. ${ref}). Vorrei maggiori informazioni.`}
                    />
                  </div>
                  <label className={styles.privacy}>
                    <input type="checkbox" required />
                    <span>
                      Ho letto e accetto la <a href="#privacy">privacy policy</a> (GDPR).
                    </span>
                  </label>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Richiedi informazioni
                  </button>
                </form>
              )}

              <a href={AGENZIA.telefonoHref} className={styles.formPhone}>
                oppure chiama: <strong>{AGENZIA.telefono}</strong>
              </a>
            </div>
          </aside>
        </div>

        {/* Correlati */}
        {correlati.length > 0 && (
          <section className={`container ${styles.related}`}>
            <div className={styles.relatedHead}>
              <h2 className="section-title">Potrebbero interessarti</h2>
              <Link to="/immobili" className={styles.relatedLink}>
                Vedi tutti <IconArrowRight width={18} height={18} />
              </Link>
            </div>
            <div className={styles.relatedGrid}>
              {correlati.map((imm, idx) => (
                <PropertyCard key={imm.id} immobile={imm} index={idx} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
