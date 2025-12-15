import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

// Wiederverwendbarer Abschnitts-Wrapper mit optionalem Eyebrow und Intro.
type SectionProps = {
  id: string;
  title?: string;
  eyebrow?: string;
  intro?: string;
  children?: ReactNode;
  direction?: "left" | "right";
};

function Section({ id, title, eyebrow, intro, children, direction = "right" }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${visible ? "visible" : "hidden"} section-${direction}`}
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
