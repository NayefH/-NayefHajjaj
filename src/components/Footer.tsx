import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

const footerLinks = [
  { href: "#about", label: "Über mich" },
  { href: "#projects", label: "Projekte" },
  { href: "#skills", label: "Skills" },
];

function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const footer = footerRef.current;
    if (
      !footer ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const items = footer.querySelectorAll(".footer-animate");
    items.forEach((item) => {
      (item as HTMLElement).style.opacity = "0";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animate(items, {
          opacity: [0, 1],
          y: [14, 0],
          duration: 560,
          delay: stagger(80),
          ease: "outExpo",
        });

        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-main">
        <div className="footer-intro footer-animate">
          <p className="footer-kicker">
            <span className="footer-status" aria-hidden="true" />
          </p>

          <p>Frontend-Entwicklung mit React, TypeScript und JavaScript.</p>
        </div>

        <nav
          className="footer-nav footer-animate"
          aria-label="Footer-Navigation"
        >
          <p>Navigation</p>
          {footerLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-contact footer-animate">
          <p>Kontakt</p>
          <a href="mailto:nayef_hajjaj@hotmail.de">nayef_hajjaj@hotmail.de</a>
        </div>
      </div>

      <div className="footer-bottom footer-animate">
        <span>© {year} Nayef Hajjaj</span>
        <span className="footer-system">SYSTEM // ONLINE</span>
        <a href="#top">Nach oben ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
