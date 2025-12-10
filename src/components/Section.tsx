import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  intro?: string;
  children?: ReactNode;
};

function Section({ id, title, eyebrow, intro, children }: SectionProps) {
  return (
    <section id={id} className="section">
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
