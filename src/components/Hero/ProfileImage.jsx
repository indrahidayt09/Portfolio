import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowRoundBack } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

export const ProfileImage = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      arrowRef.current,
      { rotate: 45 },
      {
        rotate: 90,
        ease: "power3.out",
        scrollTrigger: {
          trigger: arrowRef.current,
          start: "top center",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <div className="relative">
      <div className="flex gap-8 w-full">
        <img
          src="./public/assets/profile.png"
          alt="profile"
          className="w-60 md:w-50 hover:rotate-20 transition-transform duration-500 z-90"
        />
        <div className="flex flex-col gap-3 md:gap-5">
          <p
            style={{
              fontFamily: "Montserrat",
              fontWeight: 300,
              lineHeight: "30px",
            }}
            className="text-[#B1B1B1] md:text-2xl md:leading-8 tracking-wider text-left"
          >
            AS A <br />
            FRONT <br />
            END <br />
            DEVELOP <br />
            ER
          </p>
          <IoIosArrowRoundBack ref={arrowRef} className="size-11 self-end" />
        </div>
      </div>
    </div>
  );
};