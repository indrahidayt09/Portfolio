import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProfileImage } from "./HeroFragments";

gsap.registerPlugin(ScrollTrigger);

export default function MainIntro() {
  const textRef = useRef(null);
  const profileRef = useRef(null);
  const containerRef = useRef(null);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax naik
      gsap.fromTo(
        textRef.current,
        { y: 0 },
        {
          y: -0,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Efek horizontal scroll kiri-kanan
      gsap.fromTo(
        line1Ref.current,
        { x: -200 },
        {
          x: 200,
          ease: "none",
          scrollTrigger: {
            trigger: line1Ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        line2Ref.current,
        { x: 200 },
        {
          x: -200,
          ease: "none",
          scrollTrigger: {
            trigger: line2Ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        line3Ref.current,
        { x: -110 },
        {
          x: 110,
          ease: "none",
          scrollTrigger: {
            trigger: line3Ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Fade out container
      gsap.fromTo(
        containerRef.current,
        { y: 0, opacity: 10 },
        {
          y: 0,
          opacity: 0,
          ease: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 100%",
            end: "top 0%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center relative"
    >
      <div className="text-left ">
        <h1
          style={{ fontFamily: "Manrope", fontWeight: 300 }}
          ref={textRef}
          className="introText text-6xl font-semibold md:text-9xl flex flex-col leading-12 md:leading-26 text-slate-500"
        >
          <span ref={line1Ref}>HELLO I'M</span>
          <span ref={line2Ref} className="md:ml-30">
            INDRA HIDAYAT
          </span>
          <span ref={line3Ref} className="md:ml-70">
            PERMANA
          </span>
        </h1>
        <div ref={profileRef} className="absolute right-50 -top-20 -z-1">
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}
