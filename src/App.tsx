import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import SkillStack from "./components/SkillStack";
import CyberAtmosphere from "./components/CyberAtmosphere";
import Bewerbungsfoto from "./assets/Bewerbungsfoto.jpg";

const projects = [
  {
    number: "01",
    type: "React PWA · Geolocation",
    title: "ChargeSpot",
    description:
      "Eine installierbare Web-App, die per Standortabfrage Ladestationen in der Nähe findet. Live-Daten zu Entfernung, Leistung und Öffnungszeiten sowie direkte Routenlinks machen die Suche schnell und unkompliziert.",
    result: "Live-Suche mit Overpass API",
    technologies: ["React", "TypeScript", "PWA"],
    accent: "cyan",
    url: "https://kaleidoscopic-arithmetic-efb8da.netlify.app/",
    preview: "/projects/chargespot.png",
    previewMode: "contain",
  },
  {
    number: "02",
    type: "Web Audio · Vanilla JavaScript",
    title: "Retro Drum Machine",
    description:
      "Eine interaktive TR-808-Drummachine im 8-Bit-Look. Acht Sounds lassen sich live spielen, zu Patterns arrangieren, speichern und als Songfolge mit frei wählbarem Tempo abspielen.",
    result: "8 Sounds · 4 Patterns · Song-Modus",
    technologies: ["JavaScript", "Web Audio", "NES.css"],
    accent: "pink",
    url: "https://retrodrummachine.netlify.app/",
    preview: "/projects/retro-drum-machine.png",
    previewMode: "cover",
  },
];

function App() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (
      !page ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const introAnimation = animate(page.querySelectorAll(".hero-animate"), {
      opacity: [0, 1],
      y: [18, 0],
      duration: 650,
      delay: stagger(80),
      ease: "outExpo",
    });

    const portrait = page.querySelector(".hexagon-frame");
    const portraitScan = page.querySelector(".portrait-scan");
    const statusDot = page.querySelector(".hero-status-dot");
    const portraitAnimation = portrait
      ? animate(portrait, {
          opacity: [0, 1],
          scale: [0.97, 1],
          y: [16, 0],
          duration: 700,
          delay: 180,
          ease: "outExpo",
        })
      : null;

    const portraitScanAnimation = portraitScan
      ? animate(portraitScan, {
          y: [-30, 430],
          opacity: [0, 0.65, 0],
          duration: 4200,
          loop: true,
          ease: "linear",
        })
      : null;

    const statusAnimation = statusDot
      ? animate(statusDot, {
          opacity: [0.35, 1],
          scale: [0.8, 1.25],
          duration: 1200,
          loop: true,
          alternate: true,
          ease: "inOutSine",
        })
      : null;

    return () => {
      introAnimation.cancel();
      portraitAnimation?.cancel();
      portraitScanAnimation?.cancel();
      statusAnimation?.cancel();
    };
  }, []);

  return (
    <div className="page" ref={pageRef}>
      <CyberAtmosphere />
      <Navbar />

      <main className="hero">
        <div className="hero-body">
          <p className="eyebrow hero-animate">
            <span className="hero-status-dot" aria-hidden="true" />
            Portfolio // Frontend Development
          </p>
          <h1 className="hero-animate">
            Hallo, ich bin Nayef, Entwickler mit einem Auge für Design und
            Geschwindigkeit.
          </h1>
          <p className="lede hero-animate">
            Ich setze Fokus auf reaktive UI, saubere Architektur und erlebbares
            Design. Dabei verbinde ich eine solide technische Basis mit
            animierten, barrierearmen Oberflächen.
          </p>
          <div className="hero-actions hero-animate">
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
            <span className="portrait-scan" aria-hidden="true" />
            <span
              className="portrait-corner portrait-corner--top"
              aria-hidden="true"
            />
            <span
              className="portrait-corner portrait-corner--bottom"
              aria-hidden="true"
            />
            <span className="portrait-label" aria-hidden="true">
              SUBJECT_01 // NH
            </span>
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
          Seit mehreren Jahren baue ich modulare Interfaces mit React, Java und
          TypeScript. Mir sind Barrierefreiheit, wartbare Architektur und eine
          schlanke Developer Experience wichtig. Ich bin offen für neue
          Technologien und eigne mir neue Werkzeuge schnell an, um moderne
          Lösungen anbieten zu können.
        </p>
      </Section>

      <Section
        id="projects"
        eyebrow="Selected Work"
        title="Projekte, die Wirkung zeigen"
        intro="Von der ersten Idee bis zum performanten Interface: drei ausgewählte Konzepte, die Produktdenken, visuelle Präzision und sauberen Code verbinden."
        direction="left"
      >
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-card--${project.accent}`}
              key={project.title}
            >
              <div className="project-visual">
                <span className="project-number" aria-hidden="true">
                  {project.number}
                </span>
                <img
                  className={`project-preview project-preview--${project.previewMode}`}
                  src={project.preview}
                  alt={`Vorschau von ${project.title}`}
                />
              </div>
              <div className="project-copy">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-result">
                  <span aria-hidden="true">↗</span>
                  {project.result}
                </div>
                <ul className="project-tags" aria-label="Technologien">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                {project.url && (
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live öffnen`}
                  >
                    Live-Projekt öffnen
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Stack in der Praxis"
        title="Was ich einsetze – und wofür"
        intro="Keine abstrakte Tool-Liste: Diese Fähigkeiten sind direkt in ChargeSpot und der Retro Drum Machine sichtbar."
      >
        <SkillStack />
      </Section>

      <Section
        id="contact"
        eyebrow="Kontakt"
        title="Die Direktverbindung"
        intro="Schreib mir, wenn du ein Projekt mit Fokus auf UI und Performance starten möchtest."
        direction="left"
      >
        <p>Ich bin erreichbar für Jobangebote.</p>
        <div className="cta-row">
          <a className="button primary" href="mailto:nayef_hajjaj@hotmail.de">
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
