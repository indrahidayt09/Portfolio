import ProjectList from "../../components/Project/Index";
import { IoIosArrowRoundForward } from "react-icons/io";

// GSAP
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const arrowRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      rotate: 45,
      ease: "power3.out",
      scrollTrigger: {
        trigger: arrowRef.current,
        scrub: 1,
        start: "top 70%",
      },
    });

    gsap.to(textRef.current, {
      y: 50,
      x: 20,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="px-6 lg:px-25 pt-0 md:pt-10">
      <div className="flex lg:flex-col justify-between items-center lg:items-start gap-2 py-10 z-90 relative pb-13">
        <h1
          ref={textRef}
          style={{ fontFamily: "Montserrat", fontWeight: 400 }}
          className="absolute top-0 text-2xl font-semibold max-w-xs text-justify uppercase text-black/70"
        >
          My Work Recent
        </h1>
        <IoIosArrowRoundForward
          ref={arrowRef}
          className="text-2xl md:text-3xl text-gray-600 absolute left-0 top-0 rotate-0"
        />
      </div>
      <ProjectList />
    </div>
  );
};

export default Project;
