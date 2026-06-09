import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import Immobili from './pages/Immobili.jsx'
import Dettaglio from './pages/Dettaglio.jsx'
import ChiSiamo from './pages/ChiSiamo.jsx'
import Contatti from './pages/Contatti.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/immobili" element={<Immobili />} />
          <Route path="/immobili/:id" element={<Dettaglio />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
