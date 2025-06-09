import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Motion from "../UseEffect/Motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex fixed justify-between items-center pt-4 pb-2 mx-5 top-0 left-0 right-0 border-b-1 border-b-slate-500 text-slate-300 z-50">
      <div className="logo">
        <h1 style={{ fontFamily: "Manrope", fontWeight: 500 }} className="font-normal text-slate-300 text-xl">© I.H - 2024</h1>
      </div>
      <h1
        style={{ fontFamily: "Courier", fontWeight: 300 }}
        className="tracking-wide text-xl text-slate-300 hidden md:block"
      >
        WELCOME TO MY INTRODUCE
      </h1>

      <NavLink isOpen={isOpen} />
      <NavBtn isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
    </header>
  );
}

function NavLink({ isOpen }) {
  return (
    <nav
      className={`
        navLink flex justify-center items-center fixed min-h-full w-full top-0 left-0 bg-slate-800 text-slate-400 z-40 
        transition-transform ease-in-out duration-800 delay-100
        ${isOpen ? "translate-0" : "-translate-y-full"}
      `}
    >
      <ul className="flex flex-col items-center justify-center gap-8 text-6xl md:text-7xl lg:text-8xl">
        <Motion>
          <li className="hover:text-slate-300">
            <a href="#">About Me</a>
          </li>
        </Motion>
        <Motion>
          <li className="hover:text-slate-300">
            <a href="#">My Project</a>
          </li>
        </Motion>
        <Motion>
          <li className="hover:text-slate-300">
            <a href="#">What I Do</a>
          </li>
        </Motion>
        <Motion>
          <li className="hover:text-slate-300">
            <a href="#">Contact Me</a>
          </li>
        </Motion>
      </ul>
    </nav>
  );
}

function NavBtn({ isOpen, toggle }) {
  return (
    <button onClick={toggle} className="text-3xl z-50 cursor-pointer">
      {isOpen ? (
        <Motion>
          <IoCloseOutline />
        </Motion>
      ) : (
        <Motion>
          <CiMenuFries />
        </Motion>
      )}
    </button>
  );
}
