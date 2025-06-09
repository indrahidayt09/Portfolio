import SocialIcon from "./Icon";

// Components
import MainIntro from "./MainIntro";
import { LanIcon } from "./HeroFragments";
import Desc from "./Desc";

export default function Hero() {
  return (
    <section className="text-white flex justify-center items-center pt-20 px-5 min-h-screen">
      <Container />
    </section>
  );
}

function Container() {
  return (
    <div className="relative flex flex-col justify-between items-center w-full min-h-screen my-auto">
      {/* Main Intro + CTA (mobile) */}
      <div className="flex justify-center items-center m-auto pr-23">
        <div>
          <MainIntro />
          {/* CTA Button (desktop only) */}
          
        </div>
      </div>

      {/* Language Icon */}
      <div className="absolute right-0">
        <LanIcon />
      </div>

      {/* Social Icon (currently hidden) */}
      <div className="absolute top-28 left-7 xl:left-0 lg:translate-y-1/2 hidden">
        <SocialIcon />
      </div>

      {/* Description (currently hidden) */}
      <div className="hidden absolute">
        <Desc />
      </div>
    </div>
  );
}
