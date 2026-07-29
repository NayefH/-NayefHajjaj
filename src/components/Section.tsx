import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

type SectionProps = {
  id: string;
  title?: string;
  eyebrow?: string;
  intro?: string;
  children?: ReactNode;
  direction?: "left" | "right";
};

function Section({
  id,
  title,
  eyebrow,
  intro,
  children,
  direction = "right",
}: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-visible");
      return;
    }

    node.style.opacity = "0";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animate(node, {
          opacity: [0, 1],
          x: [direction === "right" ? 20 : -20, 0],
          duration: 650,
          ease: "outExpo",
        });

        const projectCards = node.querySelectorAll(".project-card");
        if (projectCards.length) {
          animate(projectCards, {
            opacity: [0, 1],
            y: [20, 0],
            scale: [0.99, 1],
            duration: 600,
            delay: stagger(100, { start: 140 }),
            ease: "outExpo",
          });
        }

        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [direction]);

  return (
    <section
      id={id}
      ref={ref}
      className={`section section-${direction}`}
    >
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <div className="section-header">
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      {children && <div className="section-content">{children}</div>}
    </section>
  );
}

export default Section;
