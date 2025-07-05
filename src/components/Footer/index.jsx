import { FaGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { Motion, MotionP } from "../../lib/UseEffect/Motion";
import ButtonAbout from "../About/ButtonAbout";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full min-h-screen bg-[url('./public/assets/footer2.png')] bg-cover bg-center relative">
      <div
        style={{ fontFamily: "Montserrat", fontWeight: 300 }}
        className="p-7 lg:p-10  text-white gap-5 flex flex-col justify-center backdrop-blur-xs lg:backdrop-blur-xs bg-white/8 border border-white/15 rounded-xl"
      >
        <h1 className="text-6xl md:text-8xl font-medium leading-15 lg:leading-27">
          Ready to <br /> Collaborate.
        </h1>
        <div className=" flex flex-col items-center justify-center md:flex-row gap-10 md:gap-20 relative">
          <div className="self-center flex flex-col md:flex-row gap-5 lg:gap-10">
            <p className="flex justify-center p-3 text-base border border-gray-200 rounded-full">
              +62 815 7480 831
            </p>
            <p className="py-3 px-6 border text-base border-gray-200 rounded-full mx-auto ">
              indrahidayatpermana09@gmail.com
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <Motion strength={20} maxOffset={40}>
              <button
                type="submit"
                className=" font-semibold w-40 h-13 text-black rounded-full bg-white  md:self-center"
              >
                <MotionP strength={40} maxOffset={40}>
                  Get In Touch
                </MotionP>
              </button>
            </Motion>
            <ButtonAbout />
          </div>

          <div className=" gap-5 hidden">
            <FaGithub className="size-8 text-white hover:text-blue-500" />
            <AiFillInstagram className="size-8 text-white hover:text-blue-500" />
            <FaYoutube className="size-8 text-white hover:text-blue-500" />
          </div>
        </div>
      </div>
      <div
        style={{ fontFamily: "Outfit", fontWeight: 300 }}
        className=" absolute bottom-6 text-white flex items-center justify-between md:px-18"
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
