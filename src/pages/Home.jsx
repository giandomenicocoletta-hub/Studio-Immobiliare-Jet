import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import SearchBar from '../components/SearchBar.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { immobili, COMUNI } from '../data/immobili.js'
import { AGENZIA } from '../data/agenzia.js'
import {
  IconArrowRight,
  IconPin,
  IconPhone,
  IconShield,
  IconHandshake,
  IconHeart,
  IconHome,
  IconKey,
  IconLayers,
  IconTrees,
  IconBuilding,
  IconChart,
  IconDoc,
  IconAward,
  IconEye,
} from '../components/Icons.jsx'
import styles from './Home.module.css'

/* Conteggio reale per tipologia dal dataset */
const countTipo = (t) => immobili.filter((i) => i.tipologia === t).length

const TIPI = [
  { tipo: 'appartamento', label: 'Appartamenti', icon: IconLayers },
  { tipo: 'villa', label: 'Ville e case', icon: IconHome },
  { tipo: 'commerciale', label: 'Commerciale', icon: IconBuilding },
  { tipo: 'terreno', label: 'Terreni', icon: IconTrees },
]

const SERVIZI = [
  {
    icon: IconKey,
    titolo: 'Vendita immobili',
    testo:
      'Affianchiamo proprietari e acquirenti in ogni fase della compravendita, con valutazioni oneste e trattative trasparenti.',
  },
  {
    icon: IconHome,
    titolo: 'Locazioni e affitti',
    testo:
      'Gestione completa di affitti residenziali e commerciali: dalla pubblicazione alla firma del contratto.',
  },
  {
    icon: IconChart,
    titolo: 'Valutazione gratuita',
    testo:
      "Stima professionale e senza impegno del tuo immobile, basata sull'andamento reale del mercato di Viterbo.",
  },
  {
    icon: IconBuilding,
    titolo: 'Immobili commerciali',
    testo:
      'Negozi, locali e attività avviate nel centro storico e lungo le principali arterie della città e provincia.',
  },
  {
    icon: IconDoc,
    titolo: 'Consulenza e pratiche',
    testo:
      'Supporto su mutuo, documentazione catastale e adempimenti, accompagnandoti fino al rogito notarile.',
  },
  {
    icon: IconTrees,
    titolo: 'Terreni e rustici',
    testo:
      'Terreni edificabili e casali da recuperare immersi nella campagna e nei borghi della Tuscia.',
  },
]

const PROCESSO = [
  {
    n: '01',
    icon: IconChart,
    titolo: 'Valutazione',
    testo: 'Sopralluogo e stima gratuita del valore di mercato del tuo immobile.',
  },
  {
    n: '02',
    icon: IconEye,
    titolo: 'Visibilità',
    testo: 'Servizio fotografico, annuncio curato e promozione mirata sui portali.',
  },
  {
    n: '03',
    icon: IconKey,
    titolo: 'Visite guidate',
    testo: 'Selezioniamo i contatti realmente interessati e accompagniamo ogni visita.',
  },
  {
    n: '04',
    icon: IconHandshake,
    titolo: 'Rogito assistito',
    testo: 'Ti seguiamo in trattativa, pratiche e firma dal notaio, senza pensieri.',
  },
]

const VALORI = [
  {
    icon: IconPin,
    titolo: 'Esperienza locale',
    testo:
      'Oltre 11 anni nel mercato di Viterbo e della Tuscia: conosciamo ogni quartiere e ogni borgo.',
  },
  {
    icon: IconHandshake,
    titolo: 'Fiducia',
    testo:
      'Un rapporto diretto e personale con un unico referente, dalla prima visita al rogito.',
  },
  {
    icon: IconShield,
    titolo: 'Trasparenza',
    testo:
      'Valutazioni oneste, documentazione chiara e nessuna sorpresa lungo tutto il percorso.',
  },
  {
    icon: IconHeart,
    titolo: 'Assistenza completa',
    testo:
      'Ti accompagniamo in ogni fase: pratiche, mutuo e notaio. Un servizio sartoriale su misura.',
  },
]

export default function Home() {
  const evidenza = immobili.filter((i) => i.inEvidenza).slice(0, 6)
  const revealEvidenza = useScrollReveal()
  const revealTipi = useScrollReveal()
  const revealChi = useScrollReveal()
  const revealServizi = useScrollReveal()
  const revealProcesso = useScrollReveal()
  const revealZone = useScrollReveal()
  const revealValori = useScrollReveal()

  return (
    <>
      <Seo
        title="Agenzia Immobiliare a Viterbo"
        description="Studio Immobiliare Jet: compravendita e locazione di ville, appartamenti e immobili commerciali a Viterbo e nella Tuscia. Valutazioni gratuite e assistenza completa."
        image="/assets/properties/p10-0.jpg"
      />

      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <p className={`${styles.kicker} ${styles.s1}`}>Viterbo e Provincia</p>
          <h1 className={styles.heroTitle}>
            <span className={`${styles.line} ${styles.italic} ${styles.s2}`}>
              La casa dei tuoi sogni,
            </span>
            <span className={`${styles.line} ${styles.s3}`}>curata con passione</span>
          </h1>
          <div className={`${styles.heroCtas} ${styles.s4}`}>
            <Link to="/immobili" className="btn btn-primary">
              Cerca immobile <IconArrowRight width={18} height={18} />
            </Link>
            <Link to="/chi-siamo" className="btn btn-outline">
              Scopri chi siamo
            </Link>
          </div>
          <ul className={`${styles.heroTrust} ${styles.s4}`}>
            <li>
              <IconPin width={16} height={16} /> {AGENZIA.via}, {AGENZIA.citta}
            </li>
            <li>
              <IconPhone width={16} height={16} /> {AGENZIA.telefono}
            </li>
            <li>
              <IconAward width={16} height={16} /> Associata FIMAA
            </li>
          </ul>
        </div>

        <div className={`${styles.searchWrap} ${styles.s5}`}>
          <div className="container">
            <SearchBar variant="compact" />
          </div>
        </div>
      </section>

      {/* ============ ESPLORA PER TIPOLOGIA ============ */}
      <section className="section container" ref={revealTipi}>
        <div className={styles.centerHead}>
          <p className="eyebrow reveal">Cosa cerchi</p>
          <h2 className="section-title reveal" style={{ '--index': 1 }}>
            Esplora per tipologia
          </h2>
        </div>
        <div className={styles.tipi}>
          {TIPI.map((t, idx) => {
            const Icon = t.icon
            const n = countTipo(t.tipo)
            return (
              <Link
                key={t.tipo}
                to={`/immobili?tipo=${t.tipo}`}
                className={`${styles.tipo} reveal js-cursor-grow`}
                style={{ '--index': idx }}
              >
                <span className={styles.tipoIcon}>
                  <Icon width={28} height={28} />
                </span>
                <span className={styles.tipoLabel}>{t.label}</span>
                <span className={styles.tipoCount}>
                  {n} {n === 1 ? 'immobile' : 'immobili'}
                </span>
                <span className={styles.tipoArrow}>
                  <IconArrowRight width={18} height={18} />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ============ IMMOBILI IN EVIDENZA ============ */}
      <section className={styles.evidenzaBand} ref={revealEvidenza}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow reveal">La nostra selezione</p>
              <h2 className="section-title reveal" style={{ '--index': 1 }}>
                Immobili in evidenza
              </h2>
            </div>
            <Link
              to="/immobili"
              className={`${styles.headLink} reveal`}
              style={{ '--index': 2 }}
            >
              Vedi tutti gli immobili <IconArrowRight width={18} height={18} />
            </Link>
          </div>

          <div className={styles.grid}>
            {evidenza.map((imm, idx) => (
              <PropertyCard key={imm.id} immobile={imm} index={idx % 3} reveal />
            ))}
          </div>
        </div>
      </section>

      {/* ============ CHI SIAMO + STATISTICHE ============ */}
      <section className="section container" ref={revealChi}>
        <div className={styles.chiInner}>
          <div className={styles.chiText}>
            <p className="eyebrow reveal">Studio Immobiliare Jet</p>
            <h2 className={`${styles.chiTitle} reveal`} style={{ '--index': 1 }}>
              Un punto di riferimento nel cuore della Tuscia
            </h2>
            <p className={`${styles.chiBody} reveal`} style={{ '--index': 2 }}>
              Con sede in Via Genova 9 a Viterbo, Studio Immobiliare Jet opera da oltre
              un decennio nella compravendita e locazione di immobili residenziali e
              commerciali. Un'agenzia radicata nel territorio, guidata da{' '}
              {AGENZIA.referente}, che mette competenza, cortesia e conoscenza del
              mercato locale al servizio di ogni cliente.
            </p>
            <Link to="/chi-siamo" className="btn btn-ghost reveal" style={{ '--index': 3 }}>
              La nostra storia <IconArrowRight width={18} height={18} />
            </Link>
          </div>

          <div className={styles.stats}>
            {[
              { to: immobili.length, suffix: '', label: 'Immobili in vetrina' },
              { to: COMUNI.length, suffix: '', label: 'Comuni della Tuscia' },
              { to: 11, suffix: '+', label: 'Anni di esperienza' },
            ].map((s, idx) => (
              <div key={s.label} className="reveal" style={{ '--index': idx }}>
                <p className={styles.statNum}>
                  <AnimatedCounter to={s.to} suffix={s.suffix} duration={1600} />
                </p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ I NOSTRI SERVIZI ============ */}
      <section className={styles.serviziBand} ref={revealServizi}>
        <div className="container">
          <div className={styles.centerHead}>
            <p className="eyebrow reveal">Cosa facciamo</p>
            <h2 className="section-title reveal" style={{ '--index': 1 }}>
              I nostri servizi
            </h2>
            <p
              className="section-subtitle reveal"
              style={{ '--index': 2, margin: '0 auto' }}
            >
              Un servizio completo per chi vende, acquista o cerca casa nella provincia
              di Viterbo.
            </p>
          </div>
          <div className={styles.servizi}>
            {SERVIZI.map((s, idx) => {
              const Icon = s.icon
              return (
                <article
                  key={s.titolo}
                  className={`${styles.servizio} reveal`}
                  style={{ '--index': idx % 3 }}
                >
                  <span className={styles.servizioIcon}>
                    <Icon width={26} height={26} />
                  </span>
                  <h3 className={styles.servizioTitle}>{s.titolo}</h3>
                  <p className={styles.servizioText}>{s.testo}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ COME LAVORIAMO ============ */}
      <section className="section container" ref={revealProcesso}>
        <div className={styles.centerHead}>
          <p className="eyebrow reveal">Il metodo Jet</p>
          <h2 className="section-title reveal" style={{ '--index': 1 }}>
            Come lavoriamo
          </h2>
        </div>
        <div className={styles.processo}>
          {PROCESSO.map((p, idx) => {
            const Icon = p.icon
            return (
              <article
                key={p.n}
                className={`${styles.step} reveal`}
                style={{ '--index': idx }}
              >
                <span className={styles.stepNum}>{p.n}</span>
                <span className={styles.stepIcon}>
                  <Icon width={24} height={24} />
                </span>
                <h3 className={styles.stepTitle}>{p.titolo}</h3>
                <p className={styles.stepText}>{p.testo}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* ============ LE ZONE DELLA TUSCIA ============ */}
      <section className={styles.zoneBand} ref={revealZone}>
        <div className={`container ${styles.zoneInner}`}>
          <div className={styles.zoneText}>
            <p className="eyebrow reveal">Il territorio</p>
            <h2 className={`${styles.zoneTitle} reveal`} style={{ '--index': 1 }}>
              Operiamo in tutta la provincia di Viterbo
            </h2>
            <p className={`${styles.zoneBody} reveal`} style={{ '--index': 2 }}>
              Dal centro storico medievale di Viterbo ai borghi della Tuscia, fino alla
              costa di Tarquinia: seguiamo immobili in città e nei comuni limitrofi.
            </p>
          </div>
          <ul className={`${styles.chips} reveal`} style={{ '--index': 3 }}>
            {COMUNI.map((c) => (
              <li key={c}>
                <Link
                  to={`/immobili?comune=${encodeURIComponent(c)}`}
                  className={styles.chip}
                >
                  <IconPin width={14} height={14} />
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ PERCHÉ SCEGLIERCI ============ */}
      <section className="section container" ref={revealValori}>
        <div className={styles.centerHead}>
          <p className="eyebrow reveal">Perché sceglierci</p>
          <h2 className="section-title reveal" style={{ '--index': 1 }}>
            Il valore di un'agenzia radicata nel territorio
          </h2>
        </div>
        <div className={styles.valori}>
          {VALORI.map((v, idx) => {
            const Icon = v.icon
            return (
              <article
                key={v.titolo}
                className={`${styles.valore} reveal`}
                style={{ '--index': idx }}
              >
                <span className={styles.valoreIcon}>
                  <Icon width={26} height={26} />
                </span>
                <h3 className={styles.valoreTitle}>{v.titolo}</h3>
                <p className={styles.valoreText}>{v.testo}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* ============ CTA FINALE ============ */}
      <section className={styles.ctaFinal}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className={styles.ctaEyebrow}>Parliamone</p>
            <h2 className={styles.ctaTitle}>
              Hai trovato qualcosa che ti interessa?
              <br />
              Contattaci oggi.
            </h2>
            <p className={styles.ctaContacts}>
              <a href={AGENZIA.telefonoHref}>
                <IconPhone width={16} height={16} /> {AGENZIA.telefono}
              </a>
              <a href={AGENZIA.cellulareHref}>
                <IconPhone width={16} height={16} /> {AGENZIA.cellulare}
              </a>
            </p>
          </div>
          <Link to="/contatti" className="btn btn-gold">
            Richiedi informazioni <IconArrowRight width={18} height={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
