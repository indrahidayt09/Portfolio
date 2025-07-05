import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // untuk reset native scroll
    // kalau kamu pakai SmoothScroll dengan gsap.set, update juga di situ
  }, [pathname]);

  return null;
};

export default ScrollTop;
