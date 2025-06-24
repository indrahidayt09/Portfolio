import { useRef, useState, useEffect } from 'react';

export const Motion = ({
  children,
  className = '',
  maxOffset = 10, // Batas maksimal gerakan
  strength = 20,  // Sensitivitas stick
}) => {
  const containerRef = useRef(null);
  const [textTransform, setTextTransform] = useState({ x: 0, y: 0 });

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    let offsetX = ((x - centerX) / centerX) * strength;
    let offsetY = ((y - centerY) / centerY) * strength;

    // Batasi gerakan (clamp)
    offsetX = clamp(offsetX, -maxOffset, maxOffset);
    offsetY = clamp(offsetY, -maxOffset, maxOffset);

    setTextTransform({ x: offsetX, y: offsetY });
  };

  const resetTransform = () => {
    setTextTransform({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      className={`relative inline-block ${className}`}
    >
      <div
        className="transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${textTransform.x}px, ${textTransform.y}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}


export const MotionP = ({
  children,
  className = '',
  maxOffset = 10,
  strength = 20,
  smoothing = 0.1, // Semakin kecil, semakin lambat dan halus
}) => {
  const containerRef = useRef(null);
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [current, setCurrent] = useState({ x: 0, y: 0 });

  // Animasi smooth update tiap frame
  useEffect(() => {
    let frame;
    const update = () => {
      setCurrent((prev) => {
        const dx = (target.x - prev.x) * smoothing;
        const dy = (target.y - prev.y) * smoothing;
        return { x: prev.x + dx, y: prev.y + dy };
      });
      frame = requestAnimationFrame(update);
    };
    update();
    return () => cancelAnimationFrame(frame);
  }, [target, smoothing]);

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    let offsetX = ((mouseX - centerX) / centerX) * strength;
    let offsetY = ((mouseY - centerY) / centerY) * strength;

    offsetX = clamp(offsetX, -maxOffset, maxOffset);
    offsetY = clamp(offsetY, -maxOffset, maxOffset);

    setTarget({ x: offsetX, y: offsetY });
  };

  const handleMouseLeave = () => {
    setTarget({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
    >
      <div
        className="transition-transform"
        style={{
          transform: `translate(${current.x}px, ${current.y}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

