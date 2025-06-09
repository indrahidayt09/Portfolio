import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedCursor = ({ mousePos }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    gsap.to(cursorRef.current, {
      x: mousePos.x,
      y: mousePos.y,
      ease: "power2.out",
      duration: 0.3,
    });
  }, [mousePos]);

  return (
    <div
      ref={cursorRef}
      className="cursor-dot fixed top-0 left-0 h-8 w-8 rounded-full bg-white mix-blend-difference pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default AnimatedCursor;
