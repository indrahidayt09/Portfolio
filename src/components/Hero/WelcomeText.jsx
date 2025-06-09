import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function WelcomeText() {
  const [hasTyped, setHasTyped] = useState(false);
  const [showTyping, setShowTyping] = useState(true);
  const containerRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const [startParallax, setStartParallax] = useState(false);

  // Ketik animasi sekali aja
  useEffect(() => {
    if (!hasTyped) {
      setShowTyping(true);
      setTimeout(() => {
        setShowTyping(false);
        setHasTyped(true);
      }, 3000);
    }
  }, [hasTyped]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      const triggerPoint = window.innerHeight / 1.5; // ketika elemen masuk 2/3 layar

      if (rect && rect.top < triggerPoint) {
        setStartParallax(true);
        const scrollOffset = window.scrollY;
        setOffsetY((scrollOffset - containerRef.current.offsetTop) * 0.3);
      } else {
        setOffsetY(0); // diem dulu sebelum masuk viewport
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        transform: `translateY(-${startParallax ? offsetY : 0}px)`,
        transition: "transform 0.1s ease-out",
      }}
      className="text-slate-400 text-2xl flex flex-col items-start"
    >
      <div>
        <h2 style={{ fontFamily: "Manrope", fontWeight: 100 }}>
          {showTyping ? (
            <Typewriter words={["WELCOME"]} cursor={true} typeSpeed={80} />
          ) : (
            "WELCOME"
          )}
        </h2>
        <h2
          style={{ fontFamily: "Courier", fontWeight: 200 }}
          className="whitespace-nowrap"
        >
          {showTyping ? (
            <Typewriter
              words={["TO MY INTRODUCE"]}
              cursor={true}
              typeSpeed={60}
              delaySpeed={1000}
            />
          ) : (
            "TO MY INTRODUCE"
          )}
        </h2>
      </div>
    </div>
  );
}



