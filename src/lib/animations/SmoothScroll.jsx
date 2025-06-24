import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      normalizeScroll: false,
      ease: "power4.out",
    });

    const handleKeyScroll = (e) => {
      const delta = 300; // jarak loncatan custom
      const smootherInstance = ScrollSmoother.get();
      const current = smootherInstance.scrollTop();

      if (e.key === "ArrowDown") {
        e.preventDefault();
        smootherInstance.scrollTo(current + delta, true, "power4.out", 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        smootherInstance.scrollTo(current - delta, true, "power4.out", 1);
      }
    };

    window.addEventListener("keydown", handleKeyScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyScroll);
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmoothScroll;
