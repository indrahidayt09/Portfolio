import { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealSection = forwardRef(({ children, offset = 100 }, ref) => {
  const localRef = useRef();

  useEffect(() => {
    const el = localRef.current;

    gsap.fromTo(
      el,
      { y: offset },
      {
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [offset]);

  return (
    <section
      ref={(node) => {
        localRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
    >
      {children}
    </section>
  );
});

export default RevealSection;
