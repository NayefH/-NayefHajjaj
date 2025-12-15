import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Bewerbungsfoto from "./assets/Bewerbungsfoto.jpg";

// Hauptseite mit Hero, Portfolio-Abschnitten und Skill-Toggles.
function App() {
  // Skill-Liste mit Kurzbeschreibung für das ausklappbare Panel.
  const [openSkill, setOpenSkill] = useState<string | null>(null);

  const skills = [
    {
      name: "React",
      detail:
        "Hooks, Context, Suspense, Server Components und Performance Patterns.",
    },
    {
      name: "TypeScript",
      detail:
        "Strikte Typen, Utility Types, Zod-Schemas und DX-freundliche API-Modelle.",
    },
    {
      name: "CSS-Architektur",
      detail:
        "Layering, Design Tokens, themenfähige Komponenten und wartbare Utility-Mixe.",
    },
    {
      name: "Design Systems",
      detail:
        "Storybook, Doc-Driven Development, Komponentenbibliotheken und Tokens.",
    },
    {
      name: "Performance",
      detail:
        "Code-Splitting, kritische Pfade, Bildoptimierung, Lighthouse & Web-Vitals.",
    },
  ];

  // Öffnet oder schließt die Detailansicht pro Skill.
  const toggleSkill = (skillName: string) => {
    setOpenSkill((current) => (current === skillName ? null : skillName));
  };

  return (
    <div className="page">
      <Navbar />

      <main className="hero">
        <div className="hero-body">
          <p className="eyebrow">Portfolio</p>
          <h1>
            Hallo, ich bin Nayef, Frontend-Entwickler mit einem Auge für klare
            Interfaces.
          </h1>
          <p className="lede">
            Fokus auf reaktive UI, saubere Architektur und erlebbares Design.
            Die Seite ist noch im Aufbau, aber hier entsteht bald mehr.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Projekte ansehen
            </a>
            <a className="button ghost" href="#contact">
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        <aside className="hero-portrait" aria-label="Bewerbungsfoto">
          <div className="hexagon-frame">
            <img
              src={Bewerbungsfoto}
              alt="Nayef Hajjaj Portrait"
              className="hexagon-photo"
            />
          </div>
        </aside>
      </main>

      <Section
        id="about"
        eyebrow="Profil"
        title="Über mich"
        intro="Ich arbeite an digitalen Produkten, die schnell geladen werden, klar strukturiert sind und sich auf das Wesentliche fokussieren."
      >
        <p>
          In den letzten Jahren habe ich React und TypeScript in verschiedenen
          Projekten eingesetzt, um modulare UI-Komponenten zu entwickeln.
          Architektur, Barrierefreiheit und eine schlanke Developer Experience
          sind für mich zentrale Themen.
        </p>
      </Section>

      <Section
        id="projects"
        eyebrow="Arbeit"
        title="Ausgewählte Projekte"
        intro="Aktuell arbeite ich an diesen Beispielen. Jedes Projekt fokussiert auf Performance, klare UI und wiederverwendbare Komponenten."
      >
        <ul className="list">
          <li>
            SaaS Dashboard mit responsiven Cards, Chart-Komponenten und
            Zustand-Management per Zustand/Redux.
          </li>
          <li>
            Marketing Landingpage mit animierten Sections, Page-Transitions und
            modularen Content-Blokken.
          </li>
          <li>
            Design-System-Playground mit Tokens, Themenwechsel und Storybook
            Docs.
          </li>
        </ul>
      </Section>

      <Section
        id="skills"
        eyebrow="Stack"
        title="Skills & Fokus"
        intro="Ich arbeite bevorzugt mit React, TypeScript und modernen Build-Tools wie Vite."
      >
        <div className="pill-row">
          {skills.map((skill, index) => {
            const isOpen = openSkill === skill.name;
            const panelId = `skill-${index}`;

            return (
              <div
                className={`pill-card ${isOpen ? "open" : ""}`}
                key={skill.name}
              >
                <button
                  type="button"
                  className="pill pill-button"
                  onClick={() => toggleSkill(skill.name)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  {skill.name}
                  <span className="pill-indicator" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="pill-panel"
                    id={panelId}
                    role="region"
                    aria-label={skill.name}
                  >
                    {skill.detail}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Kontakt"
        title="Lass uns sprechen"
        intro="Schreib mir, wenn du ein Projekt mit Fokus auf UI und Performance starten möchtest."
      >
        <p>
          Ich bin erreichbar für Freelance-Anfragen, Sparring zu Frontend
          Architektur oder zur Optimierung bestehender Interfaces. Antworte
          gerne mit ein paar Stichpunkten zu deinem Vorhaben.
        </p>
        <div className="cta-row">
          <a className="button primary" href="mailto:hello@nayef.dev">
            Mail senden
          </a>
          <a className="button ghost" href="#projects">
            Projekte ansehen
          </a>
        </div>
      </Section>
    </div>
  );
}

export default App;
