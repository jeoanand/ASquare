import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {
  // Above-the-fold hero content: reveal on load, not on scroll.
  const heroTargets = gsap.utils.toArray(
    "section.hero > .wrap > *, section.hero-section > .wrap > *"
  );

  if (heroTargets.length) {
    gsap.from(heroTargets, {
      opacity: 0,
      y: 24,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.12,
      clearProps: "opacity,transform",
    });
  }

  // Every other content section: reveal as it scrolls into view.
  const sections = gsap.utils.toArray(
    "section.gutter:not(.hero-section)"
  );

  sections.forEach((section) => {
    const gridItems = section.querySelectorAll('[class*="-grid"] > *');
    const targets = gridItems.length ? gridItems : section;

    gsap.from(targets, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: "power2.out",
      stagger: gridItems.length ? 0.08 : 0,
      clearProps: "opacity,transform",
      scrollTrigger: {
        trigger: section,
        start: "top 82%",
        once: true,
      },
    });
  });
}
