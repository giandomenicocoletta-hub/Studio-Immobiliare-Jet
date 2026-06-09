import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import {
  IconAward,
  IconHome,
  IconCalendar,
  IconPhone,
  IconMail,
  IconArrowRight,
} from '../components/Icons.jsx'
import { AGENZIA } from '../data/agenzia.js'
import styles from './ChiSiamo.module.css'

export default function ChiSiamo() {
  const revealStory = useScrollReveal()
  const revealAgent = useScrollReveal()

  return (
    <>
      <Seo
        title="Chi siamo"
        description="Studio Immobiliare Jet opera da oltre 11 anni nel mercato immobiliare di Viterbo e provincia, guidato da Patrizio Valle. Associato FIMAA."
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.kicker}>La nostra storia</p>
          <h1 className={styles.heroTitle}>
            Radicati nella Tuscia,
            <br />
            <em>al servizio delle persone</em>
          </h1>
        </div>
      </section>

      {/* Storia */}
      <section className="section container" ref={revealStory}>
        <div className={styles.story}>
          <div className={styles.storyText}>
            <p className="eyebrow reveal">Studio Immobiliare Jet</p>
            <h2 className={`${styles.storyTitle} reveal`} style={{ '--index': 1 }}>
              Oltre un decennio di esperienza nel mercato viterbese
            </h2>
            <p className={`${styles.storyBody} reveal`} style={{ '--index': 2 }}>
              Studio Immobiliare Jet opera da oltre 11 anni nel mercato immobiliare di
              Viterbo e provincia, guidato da Patrizio Valle. Associato FIMAA, offriamo
              un servizio professionale e personalizzato per la compravendita e
              locazione di immobili residenziali e commerciali nel territorio della
              Tuscia.
            </p>
          </div>

          <div className={styles.badges}>
            {[
              { icon: IconAward, num: null, txt: 'Associato FIMAA', sub: 'Federazione agenti' },
              { icon: IconCalendar, num: 11, txt: 'anni di esperienza', sub: 'dal 2014' },
              { icon: IconHome, num: 16, txt: 'annunci attivi', sub: 'in tutta la provincia' },
            ].map((b, idx) => {
              const Icon = b.icon
              return (
                <div key={b.txt} className="reveal" style={{ '--index': idx }}>
                  <span className={styles.badgeIcon}>
                    <Icon width={24} height={24} />
                  </span>
                  <p className={styles.badgeNum}>
                    {b.num != null && <AnimatedCounter to={b.num} duration={1400} />}{' '}
                    <span>{b.txt}</span>
                  </p>
                  <p className={styles.badgeSub}>{b.sub}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Agente */}
      <section className={styles.agentBand} ref={revealAgent}>
        <div className={`container ${styles.agentInner}`}>
          <div className={`${styles.agentCard} reveal`}>
            <div className={styles.avatar} aria-hidden="true">
              PV
            </div>
            <div className={styles.agentInfo}>
              <p className="eyebrow">Il tuo referente</p>
              <h2 className={styles.agentName}>Patrizio Valle</h2>
              <p className={styles.agentRole}>Titolare &amp; Agente Immobiliare</p>
              <p className={styles.agentBio}>
                Un unico referente che ti segue personalmente in ogni fase, con la
                competenza e la conoscenza del territorio maturate in oltre un decennio
                di attività nella Tuscia.
              </p>
              <div className={styles.agentContacts}>
                <a href={AGENZIA.telefonoHref} className="btn btn-primary">
                  <IconPhone width={16} height={16} /> {AGENZIA.telefono}
                </a>
                <a href={`mailto:${AGENZIA.email}`} className="btn btn-ghost">
                  <IconMail width={16} height={16} /> Scrivi una mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Vuoi vendere o acquistare nella Tuscia?</h2>
          <Link to="/contatti" className="btn btn-gold">
            Contattaci <IconArrowRight width={18} height={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
