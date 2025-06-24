import React, { useEffect, useState } from "react";

const StickyCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 bg-red-700 mix-blend-difference rounded-full pointer-events-none z-500 transition-transform duration-150 ease-out"
      style={{
        transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0)`,
      }}
    />
  );
};

export default StickyCursor;
