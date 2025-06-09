import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorImagePreview = ({ mousePos, hoveredIndex, projects }) => {
  const cursorImgRef = useRef(null);

  useEffect(() => {
    gsap.to(cursorImgRef.current, {
      x: mousePos.x,
      y: mousePos.y,
      ease: "power3.out",
      duration: 2.5,
      scale: hoveredIndex !== null ? 1 : 0,
      opacity: hoveredIndex !== null ? 1 : 0,
    });
  }, [mousePos, hoveredIndex]);

  return (
    <div
      ref={cursorImgRef}
      className="cursor-img fixed top-0 left-0 h-40 w-40 rounded-md bg-cover bg-center z-[99] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 shadow-xl border border-white/20"
      style={{
        backgroundImage: hoveredIndex !== null ? `url(${projects[hoveredIndex].img})` : "none",
      }}
    />
  );
};

export default CursorImagePreview;
