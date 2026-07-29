import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

const skillGroups = [
  {
    index: "01",
    title: "Frontend-Grundlagen",
    description: "Die Basis, auf der beide Projekte aufgebaut sind.",
    accent: "cyan",
    skills: [
      {
        name: "React",
        detail: "Damit ist die Oberfläche von ChargeSpot aufgebaut.",
        projects: ["ChargeSpot"],
      },
      {
        name: "TypeScript",
        detail: "Hält Standort-, Stations- und API-Daten übersichtlich.",
        projects: ["ChargeSpot"],
      },
      {
        name: "JavaScript ES6+",
        detail: "Steuert Sounds, Patterns und die Songfolge.",
        projects: ["Drum Machine"],
      },
      {
        name: "CSS",
        detail: "Für Layout, mobile Ansichten und alle UI-Zustände.",
        projects: ["ChargeSpot", "Drum Machine"],
      },
    ],
  },
  {
    index: "02",
    title: "Browser & Daten",
    description: "Funktionen, die direkt im Browser laufen.",
    accent: "pink",
    skills: [
      {
        name: "Geolocation API",
        detail: "Liest nach Freigabe den aktuellen Standort aus.",
        projects: ["ChargeSpot"],
      },
      {
        name: "Overpass API",
        detail: "Liefert Ladestationen aus OpenStreetMap.",
        projects: ["ChargeSpot"],
      },
      {
        name: "PWA",
        detail: "Macht ChargeSpot auf Geräten installierbar.",
        projects: ["ChargeSpot"],
      },
      {
        name: "HTML Audio API",
        detail: "Spielt die Drum-Samples ab und pausiert sie.",
        projects: ["Drum Machine"],
      },
    ],
  },
  {
    index: "03",
    title: "Interaktion & Veröffentlichung",
    description: "Alles rund um Bedienung, Build und Deployment.",
    accent: "purple",
    skills: [
      {
        name: "Sequencer-Logik",
        detail: "Verwaltet Patterns, Tempo und die Reihenfolge im Song.",
        projects: ["Drum Machine"],
      },
      {
        name: "Tastatursteuerung",
        detail: "Die Drum-Sounds reagieren auch auf die Zahlentasten.",
        projects: ["Drum Machine"],
      },
      {
        name: "Vite",
        detail: "Entwicklungsserver und Produktions-Build für ChargeSpot.",
        projects: ["ChargeSpot"],
      },
      {
        name: "Netlify",
        detail: "Dort sind beide Projekte öffentlich erreichbar.",
        projects: ["ChargeSpot", "Drum Machine"],
      },
    ],
  },
];

function SkillStack() {
  const stackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      stack.classList.add("is-ready");
      return;
    }

    const groups = stack.querySelectorAll(".skill-group");
    const items = stack.querySelectorAll(".skill-item");
    const lines = stack.querySelectorAll(".skill-group-line");
    const meta = stack.querySelector(".skill-stack-meta");

    groups.forEach((group) => {
      (group as HTMLElement).style.opacity = "0";
    });
    items.forEach((item) => {
      (item as HTMLElement).style.opacity = "0";
    });
    lines.forEach((line) => {
      (line as HTMLElement).style.transform = "scaleX(0)";
    });
    if (meta) (meta as HTMLElement).style.opacity = "0";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        stack.classList.add("is-ready");

        if (meta) {
          animate(meta, {
            opacity: [0, 1],
            y: [8, 0],
            duration: 480,
            ease: "outExpo",
          });
        }

        animate(groups, {
          opacity: [0, 1],
          y: [18, 0],
          scale: [0.99, 1],
          duration: 620,
          delay: stagger(100, { start: 80 }),
          ease: "outExpo",
        });

        animate(lines, {
          scaleX: [0, 1],
          duration: 650,
          delay: stagger(100, { start: 180 }),
          ease: "outExpo",
        });

        animate(items, {
          opacity: [0, 1],
          x: [-8, 0],
          duration: 480,
          delay: stagger(40, { start: 240 }),
          ease: "outExpo",
        });

        observer.disconnect();
      },
      { threshold: 0.18 },
    );

    observer.observe(stack);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-stack" ref={stackRef}>
      <div className="skill-stack-meta">
        <div className="skill-legend" aria-label="Projektlegende">
          <span>
            <i className="project-dot project-dot--charge" aria-hidden="true" />
            ChargeSpot
          </span>
          <span>
            <i className="project-dot project-dot--drum" aria-hidden="true" />
            Retro Drum Machine
          </span>
        </div>
        <span className="skill-animation-label">Animation: Anime.js</span>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article
            className={`skill-group skill-group--${group.accent}`}
            key={group.title}
          >
            <header className="skill-group-header">
              <span className="skill-group-index">{group.index}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </header>
            <div className="skill-group-line" aria-hidden="true" />
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li className="skill-item" key={skill.name}>
                  <div className="skill-item-copy">
                    <strong>{skill.name}</strong>
                    <p>{skill.detail}</p>
                  </div>
                  <div
                    className="skill-project-markers"
                    aria-label={`Eingesetzt in ${skill.projects.join(" und ")}`}
                  >
                    {skill.projects.map((project) => (
                      <span
                        className={
                          project === "ChargeSpot"
                            ? "skill-project skill-project--charge"
                            : "skill-project skill-project--drum"
                        }
                        title={project}
                        key={project}
                      >
                        {project === "ChargeSpot" ? "CS" : "DM"}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default SkillStack;
