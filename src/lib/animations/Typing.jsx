import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScrollTyping = ({ text, duration = 1, className = "" }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(el, { y: 50, opacity: 0 }, { y: -50, opacity: 0.2, duration });
  }, [duration]);

  return (
    <p ref={elRef} className={`type_text ${className}`}>
      {text}
    </p>
  );
};

export default ScrollTyping;
