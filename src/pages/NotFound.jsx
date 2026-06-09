import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { IconArrowRight } from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Pagina non trovata" description="La pagina che cerchi non esiste." />
      <div
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '1rem',
          padding: 'calc(var(--nav-height) + 2rem) 1.5rem 4rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            fontWeight: 700,
            color: 'var(--color-primary)',
            lineHeight: 1,
          }}
        >
          404
        </p>
        <h1 style={{ fontSize: 'var(--fs-h3)' }}>Pagina non trovata</h1>
        <p style={{ color: 'var(--color-mid)', maxWidth: '44ch' }}>
          L'indirizzo che hai inserito non esiste o è stato spostato. Torna alla home o
          esplora gli immobili disponibili.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            Torna alla home
          </Link>
          <Link to="/immobili" className="btn btn-ghost">
            Vedi gli immobili <IconArrowRight width={18} height={18} />
          </Link>
        </div>
      </div>
    </>
  )
}
