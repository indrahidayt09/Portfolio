import { IoLanguageOutline } from "react-icons/io5";
import Motion from "../UseEffect/Motion";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProfileImage = () => {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Glitch effect infinite dengan jeda 1 detik
      const glitch = gsap.timeline({ repeat: -1, repeatDelay: 5 });

      glitch.to(imgRef.current, {
        x: () => gsap.utils.random(-10, 10),
        y: () => gsap.utils.random(-10, 10),
        skewX: () => gsap.utils.random(-10, 10),
        skewY: () => gsap.utils.random(-10, 10),
        scale: () => gsap.utils.random(0.95, 1.05),
        opacity: () => gsap.utils.random(0.8, 1),
        duration: 0.1,
        ease: "power4.out",
      });

      glitch.to(imgRef.current, {
        clearProps: "all",
        duration: 0.1,
      });

      // Efek geser ✦ (kekanan)
      gsap.fromTo(
        iconRef.current,
        { x: -30 },
        {
          x: 30,
          ease: "none",
          scrollTrigger: {
            trigger: iconRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Efek geser tulisan "AS A FRONT END DEVELOPER" (kekiri)
      gsap.fromTo(
        textRef.current,
        { x: 50 },
        {
          x: -50,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      <div
        ref={iconRef}
        className="absolute md:bottom-0 right-0 text-slate-400 text-8xl md:text-8xl z-10 rotate-20"
      >
        ✦
      </div>
      <div className="relative">
        <img
          ref={imgRef}
          src="./public/assets/profile.png"
          alt="profile"
          className="w-20 md:w-50 hover:rotate-20 transition-transform duration-500"
        />
        <p
          ref={textRef}
          style={{ fontFamily: "Manrope", fontWeight: 200 }}
          className="absolute top-1 left-1 text-slate-500 text-xl md:text-2xl leading-3 md:leading-8 tracking-wider text-left"
        >
          AS A <br />
          FRONT <br />
          END <br />
          DEVELOP <br />
          ER
        </p>
      </div>
    </div>
  );
};

export const LanIcon = () => {
  return (
    <Motion>
      <div className="text-xl text-slate-400 hover:text-slate-300 p-2 border-1 border-slate-500 hover:border-slate-700 rounded-b-full hover:bg-slate-700">
        <IoLanguageOutline />
      </div>
    </Motion>
  );
};
