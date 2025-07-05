import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const textRef = useRef(null);
  const navigate = useNavigate();

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
    <div className="flex items-center justify-center bg-[url('./public/assets/hero.png')] bg-cover bg-center w-full min-h-screen">
      <div className="relative w-full h-screen">
        <h2
          style={{ fontFamily: "Roslindale", fontWeight: 500 }}
          className="absolute top-1/2 left-1/2 -translate-x-85 -translate-y-35 text-white text-9xl md:text-9xl uppercase mix-blend-difference max-w-xl leading-27 text-center "
        >
          Welcome To My Introduce
        </h2>
        <button
        onClick={() => navigate("/About")}
          style={{ fontFamily: "Montserrat", fontWeight: 300 }}
          className="absolute left-1/2 -translate-x-1/2 text-md bottom-13 text-white"
        >
          I would be truly delighted if you’d like to learn more about the
          journey that has shaped who I am today — you can find it on my{" "}
          <span className="underline hover:translate-y-2  cursor-pointer text-blue-600 hover:text-blue-800 font-semibold">
            About Me!
          </span>
          .
        </button>
      </div>
    </div>
  );
};
