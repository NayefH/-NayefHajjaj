import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import SkillStack from "./components/SkillStack";
import CyberAtmosphere from "./components/CyberAtmosphere";
import Footer from "./components/Footer";
import Bewerbungsfoto from "./assets/Bewerbungsfoto.jpg";

const projects = [
  {
    number: "01",
    type: "React PWA · Geolocation",
    title: "ChargeSpot",
    description:
      "ChargeSpot zeigt Ladestationen in der Nähe. Die App nutzt den aktuellen Standort, lädt Daten aus OpenStreetMap und öffnet bei Bedarf direkt die Route. Sie lässt sich außerdem als PWA installieren.",
    result: "Standortsuche mit Live-Daten",
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
      "Die Retro Drum Machine ist ein kleiner Step-Sequencer im 8-Bit-Look. Sounds lassen sich per Maus oder Tastatur spielen, auf acht Schritte verteilen und zu einer Songfolge zusammenbauen.",
    result: "8 Sounds · 4 Patterns · Songfolge",
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
    <div className="page" id="top" ref={pageRef}>
      <CyberAtmosphere />
      <Navbar />

      <main className="hero">
        <div className="hero-body">
          <p className="eyebrow hero-animate">
            <span className="hero-status-dot" aria-hidden="true" />
            Portfolio // Frontend Development
          </p>
          <h1 className="hero-animate">
            Hi, ich bin Nayef. Ich entwickle Anwendungen, die gut aussehen und
            zuverlässig funktionieren.
          </h1>
          <p className="lede hero-animate">
            Am liebsten arbeite ich mit React, TypeScript und JavaScript. Dabei
            achte ich darauf, dass die Oberfläche verständlich bleibt, auf
            verschiedenen Geräten funktioniert und nicht unnötig kompliziert
            wird.
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
        intro="Ich mag Projekte, bei denen Gestaltung und Technik zusammenkommen."
      >
        <p>
          Beim Programmieren probiere ich gern neue Ideen aus und arbeite mich
          schnell in unbekannte Werkzeuge ein. Wichtig sind mir übersichtlicher
          Code, eine gute Bedienung und Details, die eine Seite angenehm machen.
          Meine aktuellen Projekte entstehen vor allem mit React, TypeScript,
          JavaScript und CSS.
        </p>
      </Section>

      <Section
        id="projects"
        eyebrow="Projekte"
        title="Zwei Projekte von mir"
        intro="ChargeSpot und die Retro Drum Machine zeigen zwei unterschiedliche Seiten meiner Arbeit: eine praktische App mit Live-Daten und ein spielerisches Musik-Tool."
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
                    Projekt öffnen
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
        eyebrow="Stack"
        title="Was ich dabei benutzt habe"
        intro="Die wichtigsten Werkzeuge und Funktionen aus ChargeSpot und der Retro Drum Machine, jeweils mit dem Projekt, in dem sie vorkommen."
      >
        <SkillStack />
      </Section>

      <Section
        id="contact"
        title="Kontakt"
        intro="Du hast eine Stelle, ein Projekt oder einfach eine Frage? Schreib mir gern."
        direction="left"
      >
        <p>Am einfachsten erreichst du mich per E-Mail.</p>
        <div className="cta-row">
          <a className="button primary" href="mailto:nayef_hajjaj@hotmail.de">
            Mail senden
          </a>
          <a className="button ghost" href="#projects">
            Projekte ansehen
          </a>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;
