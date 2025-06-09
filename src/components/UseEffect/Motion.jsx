import { useRef, useState } from 'react';

export default function Motion({
  children,
  className = '',
  variant = 'glass',
  circleSize = 128,
  blurSize = 4,
}) {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [textTransform, setTextTransform] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / 20;
    const deltaY = (y - centerY) / 20;

    setCoords({ x, y });
    setTextTransform({ x: deltaX, y: deltaY });
  };

  const radius = circleSize / 2;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setTextTransform({ x: 0, y: 0 });
      }}
      className={`relative inline-block ${className}`}
    >
      {isHovering && variant === 'glass' && (
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: coords.y - radius,
            left: coords.x - radius,
            width: circleSize,
            height: circleSize,
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: `blur(${blurSize}px)`,
            WebkitBackdropFilter: `blur(${blurSize}px)`,
            transition: 'top 0.05s ease, left 0.05s ease',
          }}
        />
      )}

      <div
        className="relative z-10 transition-transform duration-75"
        style={{
          transform: `translate(${textTransform.x}px, ${textTransform.y}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
