import { IoLogoGithub } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import Motion from '../UseEffect/Motion';


export default function SocialIcon() {
  return (
    <div className="flex lg:flex-col gap-1 text-xl md:text-2x">
     <Motion
        variant="glass"
        circleSize={50}
        blurSize={2}
      >
        <div className="text-slate-400 hover:text-slate-700 lg:text-slate-400 lg:bg-slate-700  lg:hover:text-slate-400 p-1 cursor-pointer">
          <IoLogoGithub />
        </div>
     </Motion> 
    <Motion
        variant="glass"
        circleSize={50}
        blurSize={2}
    >
        <div className="text-slate-400 hover:text-slate-700 lg:text-slate-400 lg:bg-slate-700  lg:hover:text-slate-400 p-1 cursor-pointer">
          <FaSquareInstagram />
        </div>
    </Motion>
    <Motion
        variant="glass"
        circleSize={50}
        blurSize={2}
    >
        <div className="text-slate-400 hover:text-slate-700 lg:text-slate-400 lg:bg-slate-700  lg:hover:text-slate-400 duration-75 p-1 cursor-pointer">
          <IoLogoYoutube />
        </div>
    </Motion>
    </div>
  )
}