// Components
import ButtonAbout from "./ButtonAbout";
import Project from "../../pages/About/Project";
import { IoIosArrowRoundForward } from "react-icons/io";

// GSAP
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in (naik dari bawah)
      gsap.fromTo(
        ".fade-in",
        { y: 150 },
        {
          y: -100,
          duration: 1,
          scrollTrigger: {
            trigger: ".fade-in",
            start: "top bottom",
            scrub: 1,
          },
        }
      );

      // Fade-out (naik sedikit tapi makin pudar)
      gsap.fromTo(
        ".fade-in2",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".fade-in2",
            start: "top bottom",
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-section scroll-smooth w-full min-h-screen bg-white relative flex flex-col justify-center"
    >
   
      <div className="flex flex-col lg:flex-row gap-10 px-10 lg:px-25 pt-20 pb-10 relative">
        <h1
          style={{ fontFamily: "Outfit", fontWeight: 400 }}
          className=" text-6xl lg:text-7xl text-[#1c1d20]  max-w-200"
        >
          I'm open to collaborating whether remotely or face to face.
        </h1>
        <div className="flex flex-row lg:flex-col gap-10 lg:gap-15">
          <div className="">
            <IoIosArrowRoundForward className="size-7 text-gray-600 lg:absolute lg:right-35 top-38   rotate-50 lg:rotate-200" />

            <p
              style={{ fontFamily: "Outfit", fontWeight: 400 }}
              className=" text-base text-[#1c1d20] "
            >
              There's a saying: "You can't love what you don't know." Click the
              button below to get to know me better, hehe...
            </p>
          </div>
          <div className="self-center fade-in">
            <ButtonAbout />
          </div>
        </div>
      </div>
              <Project />

    </section>
  );
}
