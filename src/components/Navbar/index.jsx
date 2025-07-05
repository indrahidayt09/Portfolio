import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MenuIcon } from "./NavbarIcon";
import { CloseIcon } from "./NavbarIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuContentRef = useRef(null);
  const menuPreviewImgRef = useRef(null);
  const menuOpenRef = useRef(null);
  const menuCloseRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const menuOverlay = menuOverlayRef.current;
    const menuContent = menuContentRef.current;
    const menuPreviewImg = menuPreviewImgRef.current;
    const menuOpen = menuOpenRef.current;
    const menuClose = menuCloseRef.current;
    const links = linkRefs.current;

    const cleanUpPreviewImg = () => {
      const previewImgs = menuPreviewImg.querySelectorAll("img");
      if (previewImgs.length > 3) {
        for (let i = 0; i < previewImgs.length - 3; i++) {
          menuPreviewImg.removeChild(previewImgs[1]);
        }
      }
    };

    const resetPreviewImg = () => {
      menuPreviewImg.innerHTML = "";
      const defaultPreviewImg = document.createElement("img");
      defaultPreviewImg.src = "./public/assets/navbar.png";
      defaultPreviewImg.className = "w-full h-full object-cover absolute";
      menuPreviewImg.appendChild(defaultPreviewImg);
    };

    const animateMenuToggle = (isOpening) => {
      gsap.to(isOpening ? menuOpen : menuClose, {
        x: isOpening ? -5 : 5,
        y: isOpening ? -10 : 10,
        rotation: isOpening ? -5 : 5,
        opacity: 0,
        delay: 0.25,
        duration: 0.5,
        ease: "power4.out",
      });

      gsap.to(isOpening ? menuClose : menuOpen, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        delay: 0.5,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const openMenu = () => {
      if (isAnimating || isOpen) return;
      setIsAnimating(true);

      gsap.to(container, {
        rotation: 10,
        x: 300,
        y: 450,
        duration: 1.25,
        scale: 1.5,
        ease: "power3.out",
      });

      animateMenuToggle(true);

      gsap.to(menuContent, {
        rotation: 0,
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.23,
        ease: "power3.out",
      });

      gsap.to(links, {
        y: "0%",
        opacity: 1,
        duration: 1,
        delay: 0.75,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(menuOverlay, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
        duration: 1.24,
        ease: "power3.out",
        onComplete: () => {
          setIsOpen(true);
          setIsAnimating(false);
        },
      });
    };

    const closeMenu = () => {
      if (isAnimating || !isOpen) return;
      setIsAnimating(true);

      gsap.to(container, {
        rotation: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.25,
        ease: "power3.out",
      });

      animateMenuToggle(false);

      gsap.to(menuContent, {
        rotation: -15,
        x: -100,
        y: -100,
        scale: 1.5,
        opacity: 0.25,
        duration: 1.25,
        ease: "power3.out",
      });

      gsap.to(menuOverlay, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%",
        duration: 1.25,
        ease: "power3.out",
        onComplete: () => {
          setIsOpen(false);
          setIsAnimating(false);
          gsap.set(links, { y: "120%" });
          resetPreviewImg();
        },
      });
    };

    const handleMenuToggle = () => {
      if (!isOpen) openMenu();
      else closeMenu();
    };

    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
      menuToggle.addEventListener("click", handleMenuToggle);
    }

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        if (isOpen || isAnimating) return;

        const imgSrc = link.getAttribute("data-img");
        if (!imgSrc) return;

        const previewImgs = menuPreviewImg.querySelectorAll("img");
        if (
          previewImgs.length > 0 &&
          previewImgs[previewImgs.length - 1].src.endsWith(imgSrc)
        )
          return;

        const newPreviewImg = document.createElement("img");
        newPreviewImg.src = imgSrc;
        newPreviewImg.className = "w-full h-full object-cover absolute";
        newPreviewImg.style.opacity = "0";
        newPreviewImg.style.transform = "scale(1.25) rotate(10deg)";

        menuPreviewImg.appendChild(newPreviewImg);
        cleanUpPreviewImg();

        gsap.to(newPreviewImg, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.25,
          ease: "power3.out",
        });
      });
    });

    gsap.set(links, { y: "120%" });
    resetPreviewImg();

    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener("click", handleMenuToggle);
      }
      links.forEach((link) => {
        link.removeEventListener("mouseover", () => {});
      });
    };
  }, [isOpen, isAnimating]);

  const addLinkToRefs = (el) => {
    if (el && !linkRefs.current.includes(el)) {
      linkRefs.current.push(el);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <nav className="fixed w-full p-10 flex justify-between items-center z-50">
        <div className="logo">
          <a
            href=""
            className="text-white relative no-underline text-base font-semibold"
          >
            &copy; IH.P 2024
          </a>
        </div>

        <div className="menu-toggle relative w-12 h-6 cursor-pointer">
          <div
            ref={menuOpenRef}
            id="menu-open"
            className="text-white relative no-underline text-base font-light select-none hover-target cursor-stick"
          >
            <MenuIcon />
          </div>
          <div
            ref={menuCloseRef}
            id="menu-close"
            className="text-white relative no-underline text-base font-light select-none opacity-0"
            style={{
              transform: "translateX(-5px) translateY(10px) rotate(5deg)",
            }}
          >
            <CloseIcon />
          </div>
        </div>
      </nav>

      <div
        ref={menuOverlayRef}
        className="menu-overlay fixed w-screen h-screen backdrop-blur-md bg-black/30 z-40"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        <div
          ref={menuContentRef}
          className="menu-content relative w-full h-full flex justify-center items-center"
          style={{
            transform:
              "translateX(-100px) translateY(-100px) scale(1.5) rotate(-15deg)",
            opacity: 0.25,
          }}
        >
          <div className="menu-items w-full p-10 flex gap-10">
            <div className="col-lg flex-[3] flex justify-center items-center">
              <div
                ref={menuPreviewImgRef}
                className="menu-preview-img relative w-[40%] h-full overflow-hidden"
              ></div>
            </div>
            <div className="col-sm flex-[2] py-10 flex flex-col gap-10">
              <div className="menu-links flex flex-col gap-2">
                <div
                  className="link pb-1.5 transition-colors duration-500"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
                >
                  <a
                    ref={addLinkToRefs}
                    href=""
                    className="text-white relative no-underline text-[3.5rem] font-light tracking-tight"
                    data-img="https://i.pinimg.com/736x/98/60/67/986067f09d14c6774872d6a97a4cc86f.jpg"
                  >
                    Vision
                  </a>
                </div>
                <div
                  className="link pb-1.5 transition-colors duration-500"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
                >
                  <a
                    ref={addLinkToRefs}
                    href=""
                    className="text-white relative no-underline text-[3.5rem] font-light tracking-tight"
                    data-img="https://i.pinimg.com/736x/98/60/67/986067f09d14c6774872d6a97a4cc86f.jpg"
                  >
                    Contact
                  </a>
                </div>
                <div
                  className="link pb-1.5 transition-colors duration-500"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
                >
                  <a
                    ref={addLinkToRefs}
                    href=""
                    className="text-white relative no-underline text-[3.5rem] font-light tracking-tight"
                    data-img="https://i.pinimg.com/736x/98/60/67/986067f09d14c6774872d6a97a4cc86f.jpg"
                  >
                    About
                  </a>
                </div>
                <div
                  className="link pb-1.5 transition-colors duration-500"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
                >
                  <a
                    ref={addLinkToRefs}
                    href=""
                    className="text-white relative no-underline text-[3.5rem] font-light tracking-tight"
                    data-img="https://i.pinimg.com/736x/98/60/67/986067f09d14c6774872d6a97a4cc86f.jpg"
                  >
                    Signals
                  </a>
                </div>
              </div>
              <div className="menu-socials flex flex-col gap-2">
                <div
                  className="socials pb-1.5 transition-colors duration-500"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
                >
                  <a
                    href=""
                    className="text-white relative no-underline text-base font-light"
                  >
                    Behance
                  </a>
                </div>
                <div
                  className="socials pb-1.5 transition-colors duration-500"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
                >
                  <a
                    href=""
                    className="text-white relative no-underline text-base font-light"
                  >
                    Dribble
                  </a>
                </div>
                <div
                  className="socials pb-1.5 transition-colors duration-500"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
                >
                  <a
                    href=""
                    className="text-white relative no-underline text-base font-light"
                  >
                    Likid
                  </a>
                </div>
                <div
                  className="socials pb-1.5 transition-colors duration-500"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
                >
                  <a
                    href=""
                    className="text-white relative no-underline text-base font-light"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-footer absolute bottom-0 w-full p-10 flex gap-10">
            <div className="col-lg flex-[3]">
              <a
                href=""
                className="text-white relative no-underline text-base font-light"
              >
                Run Sequence
              </a>
            </div>
            <div className="col-sm flex-[2] flex justify-between">
              <a
                href=""
                className="text-white relative no-underline text-base font-light"
              >
                Origin
              </a>
              <a
                href=""
                className="text-white relative no-underline text-base font-light"
              >
                Join
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
