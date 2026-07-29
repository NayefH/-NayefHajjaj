import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

function CyberAtmosphere() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (
      !root ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ringOne = root.querySelector(".data-ring--one");
    const ringTwo = root.querySelector(".data-ring--two");
    const scanBeam = root.querySelector(".scan-beam");
    const dataBits = root.querySelectorAll(".data-stream span");
    const nodes = root.querySelectorAll(".data-node");
    const coordinates = root.querySelectorAll(".hud-coordinate");

    const animations = [
      ringOne
        ? animate(ringOne, {
            rotate: [0, 360],
            duration: 24000,
            loop: true,
            ease: "linear",
          })
        : null,
      ringTwo
        ? animate(ringTwo, {
            rotate: [360, 0],
            duration: 32000,
            loop: true,
            ease: "linear",
          })
        : null,
      scanBeam
        ? animate(scanBeam, {
            y: ["-15vh", "115vh"],
            duration: 7200,
            loop: true,
            ease: "linear",
          })
        : null,
      animate(dataBits, {
        opacity: [0.12, 0.8],
        x: [0, 18],
        duration: 1400,
        delay: stagger(170),
        loop: true,
        alternate: true,
        ease: "inOutSine",
      }),
      animate(nodes, {
        opacity: [0.25, 0.95],
        scale: [0.72, 1.18],
        duration: 1800,
        delay: stagger(280),
        loop: true,
        alternate: true,
        ease: "inOutSine",
      }),
      animate(coordinates, {
        opacity: [0.25, 0.7],
        duration: 2200,
        delay: stagger(700),
        loop: true,
        alternate: true,
        ease: "inOutSine",
      }),
    ].filter(Boolean);

    return () => {
      animations.forEach((animation) => animation?.cancel());
    };
  }, []);

  return (
    <div className="cyber-atmosphere" ref={rootRef} aria-hidden="true">
      <div className="cyber-grid" />
      <div className="scan-beam" />

      <div className="data-ring data-ring--one">
        <span className="data-node data-node--one" />
        <span className="data-node data-node--two" />
        <span className="data-node data-node--three" />
      </div>

      <div className="data-ring data-ring--two">
        <span className="data-node data-node--one" />
        <span className="data-node data-node--two" />
      </div>

      <div className="data-stream data-stream--left">
        {["101", "001", "S9", "NET", "011", "A2"].map((bit) => (
          <span key={bit}>{bit}</span>
        ))}
      </div>
      <div className="data-stream data-stream--right">
        {["SYS", "110", "C4", "010", "LNK", "01"].map((bit) => (
          <span key={bit}>{bit}</span>
        ))}
      </div>

      <span className="hud-coordinate hud-coordinate--one">
        N 52.5200 / E 13.4050
      </span>
      <span className="hud-coordinate hud-coordinate--two">
        NETWORK // ONLINE
      </span>
    </div>
  );
}

export default CyberAtmosphere;
