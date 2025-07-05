import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PiCompassRoseThin } from "react-icons/pi";
import { Motion } from "../../lib/UseEffect/Motion";

gsap.registerPlugin(ScrollTrigger);

export const CircularText = () => {
  const textRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          rotation: 360,
          ease: "none",
          duration: 5,
          repeat: -1,
          transformOrigin: "center center",
        },
        {
          rotation: -360,
          duration: 500,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top center",
            end: "+=900vh",
            ease: "power1.out",

            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        iconRef.current,
        {
          rotation: -360,
          ease: "none",
          duration: 5,
          repeat: -1,
          transformOrigin: "center center",
        },
        {
          rotation: 360,
          duration: 500,
          scrollTrigger: {
            trigger: iconRef.current,
            start: "top center",
            end: "+=900vh",
            ease: "power1.out",

            scrub: 1,
          },
        }
      );
    }, textRef);

    return () => ctx.revert();
  });

  return (
    <Motion className="relative w-[180px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-auto mx-auto my-20 uppercase">
      {/* Gambar tengah */}
      <div
        ref={iconRef}
        className="absolute top-5 left-5 md:top-8 md:left-8 rotate p-5"
      >
        <PiCompassRoseThin className="size-26 md:size-37 lg:size-50 xl:size-60" />
      </div>

      {/* SVG Text Berputar */}
      <div ref={textRef} className="w-full h-full rotate-text relative top-0">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 150, 150
                 m -120, 0
                 a 120,120 0 1,1 240,0
                 a 120,120 0 1,1 -240,0"
            />
          </defs>
          <text fill="#010101 " fontSize="30" fontWeight="bold">
            <textPath
              style={{ fontFamily: "Outfit", fontWeight: 400 }}
              href="#circlePath"
              startOffset="0%"
            >
              ● I'm Indra Hidayat ● As A Front End Developer
            </textPath>
          </text>
        </svg>
      </div>
    </Motion>
  );
};
