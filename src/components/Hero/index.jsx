import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(
      textRef.current,
      {
        y: 400,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          scrub: 1.5,
          start: "center 60%",
          toggleActions: "play none none reverse",
        },
      },
      textRef
    );
  }, []);

  return (
    <div className="w-full min-h-[100vh] relative">
      <img
        src="./public/assets/hero.png"
        alt="Hero Image"
        className="object-cover w-full h-screen"
      />
      <h1
        ref={textRef}
        className="absolute text-white bottom-0 left-0 p-5 text-8xl md:text-9xl mix-blend-difference"
      >
        <span className="hidden md:block">AS A <br /> FRONT END DEVELOPER</span>
        <span className="block md:hidden">AS A <br /> FRONT <br /> END <br /> DEVE <br /> LOPER</span>
      </h1>
    </div>
  );
};
