import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutText() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = containerRef.current;
      const distance = marquee.scrollWidth / 5;

      // Animasi marquee dasar (infinite loop ke kiri)
      const baseAnimation = gsap.to(marquee, {
        x: `-=${distance}`,
        duration: 100,
        ease: "none", // Menggunakan "none" untuk linear murni
        repeat: -1,
      });

      // Efek percepatan saat scroll
      ScrollTrigger.create({
        trigger: marquee,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          // Hitung progress scroll (0-1)
          const scrollProgress = self.progress;

          // Accelerate hanya saat scroll ke bawah
          if (self.direction === 1) {
            // 1 = scroll down
            const acceleration = 2 + scrollProgress * 5; // 1x sampai 6x speed
            baseAnimation.timeScale(acceleration);
          } else {
            // Decelerate smooth saat scroll up
            gsap.to(baseAnimation, {
              timeScale: 1,
              duration: 1,
              ease: "power2.out",
            });
          }
        },
        onLeave: () => {
          baseAnimation.timeScale(1);
        },
        onEnterBack: () => {
          baseAnimation.timeScale(1);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className=" left-0 w-full overflow-hidden pointer-events-none">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap text-[12vw] md:text-[10vw] font-medium uppercase tracking-widest text-slate-600 will-change-transform"
      >
        <span className="mr-10 uppercase">
          about what i do
        </span>
        <span className="mr-10 uppercase">
          about what i do
        </span>
      </div>
    </div>
  );
}
