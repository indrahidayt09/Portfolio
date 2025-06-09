import { useEffect, useState, useRef } from "react";
import Motion from "../UseEffect/Motion";

export default function CTAButton() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const buttonRef = useRef(null);
  const [startParallax, setStartParallax] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  // Logic scroll + overlay
  useEffect(() => {
    const handleScroll = () => {
      const rect = buttonRef.current?.getBoundingClientRect();
      const triggerPoint = window.innerHeight / 1.2;

      // Mulai efek parallax ketika sudah masuk viewport
      if (rect && rect.top < triggerPoint) {
        setStartParallax(true);
        const scrollOffset = window.scrollY;
        setOffsetY((scrollOffset - buttonRef.current.offsetTop) * 1.2); // pelan aja
      } else {
        setOffsetY(0);
      }

      // Logic overlay
      if (window.scrollY > 50) {
        setHasScrolled(true);
        setShowOverlay(false);
        setIsAtTop(false);
      } else if (window.scrollY <= 50 && hasScrolled) {
        setIsAtTop(true);
        const timeout = setTimeout(() => {
          if (isAtTop) {
            setShowOverlay(true);
          }
        }, 2000);
        return () => clearTimeout(timeout);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const initialTimeout = setTimeout(() => {
      if (!hasScrolled && isAtTop) {
        setShowOverlay(true);
      }
    }, 2000);

    return () => {
      clearTimeout(initialTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled, isAtTop]);

  return (
    <Motion>
      <div
        ref={buttonRef}
        style={{
          transform: `translateY(-${startParallax ? offsetY : 0}px)`,
          transition: "transform 0.1s ease-out",
        }}
        className="flex justify-end items-center relative"
      >
        {/* Overlay kosong */}
        {showOverlay && (
          <div className="absolute right-5 md:right-10 z-50" />
        )}

        {/* Button + Icon */}
        <div className="flex flex-col items-center gap-3 relative z-10">
          <a href="#about">
            <button className="border border-slate-400 rounded-full w-19 md:w-30 h-19 md:h-30 flex items-center justify-center cursor-pointer hover:border-slate-700 hover:text-slate-600 transition-colors duration-300 hover:bg-slate-700">
              <span className="text-2xl rotate-90 bounce-arrow">→</span>
            </button>
          </a>
        </div>
      </div>
    </Motion>
  );
}
