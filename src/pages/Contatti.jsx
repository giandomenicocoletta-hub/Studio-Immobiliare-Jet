import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import PropertyMap from '../components/PropertyMap.jsx'
import {
  IconPin,
  IconPhone,
  IconMail,
  IconClock,
  IconCheck,
} from '../components/Icons.jsx'
import { AGENZIA, indirizzoCompleto } from '../data/agenzia.js'
import styles from './Contatti.module.css'

const INFO = [
  {
    icon: IconPin,
    label: 'Indirizzo',
    value: indirizzoCompleto,
    href: `https://www.google.com/maps?q=${encodeURIComponent(AGENZIA.mapsQuery)}`,
  },
  {
    icon: IconPhone,
    label: 'Telefono',
    value: AGENZIA.telefono,
    href: AGENZIA.telefonoHref,
  },
  {
    icon: IconPhone,
    label: 'Cellulare / WhatsApp',
    value: AGENZIA.cellulare,
    href: AGENZIA.cellulareHref,
  },
  {
    icon: IconMail,
    label: 'Email',
    value: AGENZIA.email,
    href: `mailto:${AGENZIA.email}`,
  },
  {
    icon: IconClock,
    label: 'Orari',
    value: 'Mar–Ven 09:30–13:00 / 16:00–19:30 · Sab–Dom chiuso',
  },
]

export default function Contatti() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Seo
        title="Contatti"
        description="Contatta Studio Immobiliare Jet — Via Genova 9, Viterbo. Compravendita, locazione e valutazioni immobiliari a Viterbo e provincia."
      />

      <div className={styles.head}>
        <div className="container">
          <p className="eyebrow">Parliamone</p>
          <h1 className={styles.title}>Contattaci</h1>
          <p className={styles.sub}>
            Siamo a tua disposizione per ogni esigenza immobiliare nella Tuscia.
          </p>
        </div>
      </div>

      <div className={`container ${styles.layout}`}>
        {/* Form */}
        <div className={styles.formCol}>
          {sent ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>
                <IconCheck width={32} height={32} />
              </span>
              <h2>Messaggio inviato!</h2>
              <p>Grazie per averci contattato. Ti risponderemo nel più breve tempo possibile.</p>
            </div>
          ) : (
            <form onSubmit={submit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="c-nome">Nome *</label>
                  <input id="c-nome" type="text" required autoComplete="given-name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="c-cognome">Cognome *</label>
                  <input id="c-cognome" type="text" required autoComplete="family-name" />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="c-email">Email *</label>
                  <input id="c-email" type="email" required autoComplete="email" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="c-tel">Telefono</label>
                  <input id="c-tel" type="tel" autoComplete="tel" />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="c-tipo">Sono interessato a</label>
                <select id="c-tipo" className={styles.select} defaultValue="Acquisto">
                  <option>Acquisto</option>
                  <option>Vendita</option>
                  <option>Affitto</option>
                  <option>Valutazione</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="c-msg">Messaggio</label>
                <textarea id="c-msg" rows={5} placeholder="Come possiamo aiutarti?" />
              </div>

              <label className={styles.privacy}>
                <input type="checkbox" required />
                <span>
                  Ho letto e accetto la <a href="#privacy">privacy policy</a> ai sensi del
                  GDPR (Reg. UE 2016/679).
                </span>
              </label>

              <button type="submit" className="btn btn-primary" style={{ width: 'fit-content' }}>
                Invia messaggio
              </button>
            </form>
          )}
        </div>

        {/* Info + mappa */}
        <aside className={styles.infoCol}>
          <ul className={styles.infoList}>
            {INFO.map((i) => {
              const Icon = i.icon
              const inner = (
                <>
                  <span className={styles.infoIcon}>
                    <Icon width={20} height={20} />
                  </span>
                  <span>
                    <span className={styles.infoLabel}>{i.label}</span>
                    <span className={styles.infoValue}>{i.value}</span>
                  </span>
                </>
              )
              return (
                <li key={i.label}>
                  {i.href ? (
                    <a
                      href={i.href}
                      target={i.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className={styles.infoItem}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={styles.infoItem}>{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>

          <PropertyMap
            lat={AGENZIA.lat}
            lng={AGENZIA.lng}
            query={AGENZIA.mapsQuery}
            zoom={16}
            title="Studio Immobiliare Jet — Via Genova 9, Viterbo"
            height={320}
          />
        </aside>
      </div>
    </>
  )
}
