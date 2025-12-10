import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="page">
      <Navbar />

      <main className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>
          Hallo, ich bin Nayef, Frontend-Entwickler mit einem Auge fuer klare
          Interfaces.
        </h1>
        <p className="lede">
          Fokus auf reaktive UI, saubere Architektur und erlebbares Design. Die
          Seite ist noch im Aufbau, aber hier entsteht bald mehr.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            Projekte ansehen
          </a>
          <a className="button ghost" href="#contact">
            Kontakt aufnehmen
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
