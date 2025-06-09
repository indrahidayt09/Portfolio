import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutText from "./AboutText";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const paragraphs = gsap.utils.toArray(".about-text");

      paragraphs.forEach((p, index) => {
        gsap.fromTo(
          p,
          { opacity: 0, y: 40 },
          {
            opacity: 10,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: p,
              start: "top 85%",
              end: "top 50%",
              scrub: true,
            },
          }
        );

        // Scroll keluar - opacity ke 0 lagi
        gsap.to(p, {
          opacity: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: p,
            start: "top 40%",
            end: "top 10%",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen  px-6 py-24 text-white flex flex-col gap-12 relative overflow-hidden"
    >
      <AboutText />

      <div className="flex flex-col gap-10 px-4">
        <p className="about-text text-lg md:text-4xl leading-10 max-w-full text-slate-500">
          I’m a freelance Front-End Developer based in Tasikmalaya with over a
          year of experience handling various web-based projects.
        </p>
        <p className="about-text text-lg md:text-4xl leading-10 max-w-full text-slate-500">
          I specialize in building fast, responsive, and modern interfaces using
          technologies like React.js and Next.js.
        </p>
        <p className="about-text text-lg md:text-4xl leading-10 max-w-full text-slate-500">
          With a background in design and a strong understanding of how websites
          work both visually and functionally, I aim to deliver digital
          solutions that are not only visually appealing but also effective and
          user-friendly.
        </p>
        <p className="about-text text-lg md:text-4xl leading-10 max-w-full text-slate-500">
          I'm comfortable working independently or within a team, and my
          self-taught journey has helped me become a problem-solver with strong
          adaptability and communication skills.
        </p>
      </div>
    </section>
  );
}
