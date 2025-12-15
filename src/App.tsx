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
      detail: "Hooks, Context, Suspense/Server Components und Komposition für robuste UI.",
    },
    {
      name: "TypeScript",
      detail: "Strikte Typen, Utility Types, Zod-Schemas und DX-freundliche API-Modelle.",
    },
    {
      name: "CSS-Architektur",
      detail: "Layering, Design Tokens, themenfähige Komponenten und wartbare Utility-Mixe.",
    },
    {
      name: "Design Systems",
      detail: "Storybook, Doc-Driven Development, Komponentenbibliotheken und Tokens.",
    },
    {
      name: "Performance",
      detail: "Code-Splitting, kritische Pfade, Bildoptimierung, Lighthouse & Web-Vitals.",
    },
    {
      name: "Accessibility",
      detail: "Semantik, Tastatur-UX, ARIA-Rollen, Fokus-Management und Screenreader-Checks.",
    },
    {
      name: "Testing",
      detail: "Unit- und Component-Tests mit Vitest/RTL, visuelles Testing und Playwright-E2E.",
    },
    {
      name: "Tooling",
      detail: "Vite, eslint/prettier, CI/CD-Pipelines und schlanke Devserver-Setups.",
    },
    {
      name: "Animationen",
      detail: "Flüssige Microinteractions, Framer Motion, Hardware-Acceleration und Timings.",
    },
  ];

  // Öffnet oder schließt die Detailansicht pro Skill.
  const toggleSkill = (skillName: string) => {
    setOpenSkill((current) => (current === skillName ? null : skillName));
  };

  return (
    <div className="page">
<<<<<<< HEAD
      <div className="bg-hex bg-hex-1" aria-hidden="true" />
      <div className="bg-hex bg-hex-2" aria-hidden="true" />
      <div className="bg-hex bg-hex-3" aria-hidden="true" />

=======
      <Analytics />
>>>>>>> 9bf2b1ceb8ca82520ba8dcb96ea8ea5299ba4f64
      <Navbar />

      <main className="hero">
        <div className="hero-body">
          <p className="eyebrow">Portfolio</p>
          <h1>
            Hallo, ich bin Nayef, Frontend-Entwickler mit einem Auge für klare,
            schnelle Interfaces.
          </h1>
          <p className="lede">
            Ich entwickle reaktive Oberflächen, die schnell laden, sauber
            strukturiert sind und sich lebendig anfühlen. Architektur,
            Performance und Zugänglichkeit sind für mich genauso wichtig wie
            Motion und Details.
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
        intro="Ich baue digitale Produkte, die schnell laden, klar strukturiert sind und sich auf das Wesentliche konzentrieren."
        direction="left"
      >
        <p>
          Seit mehreren Jahren arbeite ich mit React und TypeScript an modularen
          Interfaces. Barrierefreiheit, wartbare Architektur und eine schlanke
          Developer Experience sind mir wichtig, damit Teams zügig liefern und
          Nutzer:innen ein flüssiges Erlebnis bekommen.
        </p>
      </Section>

      <Section
        id="projects"
        eyebrow="Arbeit"
        title="Ausgewählte Projekte"
        intro="Beispiele, in denen Performance, klare UI und wiederverwendbare Komponenten im Fokus stehen."
        direction="right"
      >
        <ul className="list">
          <li>
            SaaS-Dashboard mit responsiven Cards, Chart-Komponenten, Live-Updates
            und State-Management per Zustand/Redux.
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
        direction="left"
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
        intro="Erzähl mir von deinem Vorhaben, wenn du ein Projekt mit Fokus auf UI, Performance und saubere Frontend-Architektur starten möchtest."
        direction="right"
      >
        <p>
          Ich bin erreichbar für Freelance-Anfragen, Sparring zu Frontend
          Architektur oder zur Optimierung bestehender Interfaces. Schick mir
          ein paar Stichpunkte – ich melde mich zeitnah.
        </p>
        <div className="cta-row">
          <a className="button primary" href="mailto:Nayef_hajjaj@hotmail.de">
            Mail senden
          </a>
          <a className="button ghost" href="https://github.com/NayefH">
            GitHub ansehen
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
