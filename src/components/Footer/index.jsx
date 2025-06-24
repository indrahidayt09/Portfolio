import { FaGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { Motion, MotionP } from "../../lib/UseEffect/Motion";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center w-full min-h-screen bottom-0">
      <div
        style={{ fontFamily: "Outfit", fontWeight: 300 }}
        className="px-6 lg:px-10 pt-30 text-white gap-5 flex flex-col"
      >
        <h1 className="text-6xl md:text-7xl ">
          Ready to <br /> Collaborate.
        </h1>
        <div className=" flex flex-col items-center md:flex-row gap-10 md:gap-20 relative">
          <div className="self-center flex flex-col md:flex-row gap-5 lg:gap-10 pt-10">
            <p className="flex justify-center p-3  text-base border border-gray-500 rounded-full">
              +62 815 7480 831
            </p>
            <p className="py-3 px-6 border text-base border-gray-500 rounded-full mx-auto ">
              indrahidayatpermana09@gmail.com
            </p>
          </div>

          <Motion strength={20} maxOffset={40}>
            <button
              type="submit"
              className=" w-40 md:w-40 h-40 md:h-40 rounded-full bg-blue-600  md:self-center"
            >
              <MotionP strength={40} maxOffset={40}>
                Get In Touch
              </MotionP>
            </button>
          </Motion>
          <div className="flex gap-5">
            <FaGithub className="size-8 text-white hover:text-blue-500" />
            <AiFillInstagram className="size-8 text-white hover:text-blue-500" />
            <FaYoutube className="size-8 text-white hover:text-blue-500" />
          </div>
        </div>
      </div>
      <div
        style={{ fontFamily: "Outfit", fontWeight: 300 }}
        className="py-10 md:py-5 md:mt-10 text-white flex items-center justify-between md:px-18"
      >
        <h2>&copy; Indra Hidayat.2024</h2>
        <ul className="hidden md:flex md:gap-5 text-xs md:text-base">
          <li className="hover:text-gray-400 duration-75 text-xs md:text-base">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-gray-400 duration-75 text-xs md:text-base">
            <a href="/">About</a>
          </li>
          <li className="hover:text-gray-400 duration-75 text-xs md:text-base">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
