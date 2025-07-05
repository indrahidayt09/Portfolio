import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Summary = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const arrowRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: 50 },

        {
          y: -50,

          ease: "power3.out",
          transformOrigin: "center center",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      gsap.to(arrowRef.current, {
        rotate: 45,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: "top 70%",
        },
      });

      gsap.to(textRef.current, {
        y: 50,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-6 lg:px-35  gap-8 pb-20"
    >
      {/* Kiri: Teks */}
      <div className="relative w-full lg:w-1/2">
        <IoIosArrowRoundForward
          ref={arrowRef}
          className="text-3xl text-gray-600 lg:absolute lg:-left-15  mb-3 "
        />
        <div ref={textRef} className="text-justify">
          <p
            style={{ fontFamily: "Montserrat", fontWeight: 500 }}
            className="pb-5 text-base text-[#1c1d20]  lg:max-w-2xs"
          >
            I'm not a college student, and I didn't take any formal education in
            IT. But for a long time, I've had a strong interest in technology—
            especially in building websites.
          </p>
          <p
            style={{ fontFamily: "Montserrat", fontWeight: 500 }}
            className="text-base text-[#1c1d20] pb-5  lg:max-w-2xs"
          >
            I learned everything on my own through the internet and various
            online courses. From there, I started to understand how websites
            work, learned to code, and kept trying new things. I believe that
            skills like these will be very useful in the future, and I want to
            keep growing in this field.
          </p>
          {/* <p
            style={{ fontFamily: "Montserrat", fontWeight: 500 }}
            className="text-base text-[#1c1d20]  lg:max-w-2xs"
          >
            I’m committed to continuously learning and improving my skills, no
            matter the challenges. For me, exploring the world of technology
            isn’t just a hobby—it’s part of a long-term journey. I believe that
            with consistency and a strong willingness to grow, I can create
            something meaningful and impactful—not just for myself, but for
            others as well.
          </p> */}
        </div>
      </div>

      {/* Kanan: Gambar */}
      <div className="w-full h-screen lg:w-[60vw] flex justify-center items-center overflow-hidden">
        <img
          ref={imageRef}
          src="../assets/navbar.png"
          alt="Profile"
          className=" w-full object-center object-cover scale-120 shadow-md"
        />
      </div>
    </div>
  );
};

export default Summary;
