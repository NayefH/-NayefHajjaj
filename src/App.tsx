import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Bewerbungsfoto from "./assets/Bewerbungsfoto.jpg";
import { Analytics } from "@vercel/analytics/next";

// Hauptseite mit Hero, Portfolio-Abschnitten und Skill-Toggles.
function App() {
  // Skill-Liste mit Kurzbeschreibung für das ausklappbare Panel.
  const [openSkill, setOpenSkill] = useState<string | null>(null);

  const skills = [
    {
      name: "React",
      detail:
        "Hooks, Context, Suspense/Server Components und Komposition für robuste UI.",
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
    {
      name: "Accessibility",
      detail:
        "Semantik, Tastatur-UX, ARIA-Rollen, Fokus-Management und Screenreader-Checks.",
    },
    {
      name: "Testing",
      detail:
        "Unit- und Component-Tests mit Vitest/RTL, visuelles Testing und Playwright-E2E.",
    },
    {
      name: "Tooling",
      detail:
        "Vite, eslint/prettier, CI/CD-Pipelines und schlanke Devserver-Setups.",
    },
    {
      name: "Animationen",
      detail:
        "Flüssige Microinteractions, Framer Motion, Hardware-Acceleration und Timings.",
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
            Hallo, ich bin Nayef, Frontend-Entwickler mit einem Auge für klare,
            schnelle Interfaces.
          </h1>
          <p className="lede">
            Fokus auf reaktive UI, saubere Architektur und erlebbares Design.
            Ich verbinde solide technische Basis mit animierten, barrierearmen
            Oberflächen.
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
        intro="Ich arbeite an digitalen Produkten, die schnell laden, klar strukturiert sind und sich auf das Wesentliche fokussieren."
      >
        <p>
          Seit mehreren Jahren baue ich modulare Interfaces mit React und
          TypeScript. Mir sind Barrierefreiheit, wartbare Architektur und eine
          schlanke Developer Experience wichtig, damit Teams schnell liefern
          können und Nutzer:innen ein flüssiges Erlebnis haben.
        </p>
      </Section>

      <Section
        id="projects"
        eyebrow="Arbeit"
        title="Ausgewählte Projekte"
        intro="Aktuell arbeite ich an Beispielen, die Performance, klare UI und wiederverwendbare Komponenten in den Mittelpunkt stellen."
      >
        <ul className="list">
          <li>
            SaaS-Dashboard mit responsiven Cards, Chart-Komponenten,
            Live-Updates und State-Management per Zustand/Redux.
          </li>
          <li>
            Marketing-Landingpage mit animierten Sections, Page-Transitions und
            modularen Content-Blöcken für schnelle Iteration.
          </li>
          <li>
            Design-System-Playground mit Tokens, Themenwechsel, themenfähigen
            Komponenten und Storybook-Dokumentation.
          </li>
        </ul>
      </Section>

      <Section
        id="skills"
        eyebrow="Stack"
        title="Skills & Fokus"
        intro="Unter anderem arbeite ich bevorzugt mit React, TypeScript und modernen Build-Tools wie Vite."
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
