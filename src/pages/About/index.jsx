import Project from "./Project";
import { CircularText } from "./Fragment";
import Summary from "./Summary";

const AboutPage = () => {
  return (
    <div className="bg-[#fff] ">
      <>
        <div className=" py-24 w-full flex flex-col gap-8 lg:gap-20 top-15 lg:top-0 lg:justify-center px-3 md:px-25 lg:px-35  relative">
          <h1
            style={{ fontFamily: "Montserrat", fontWeight: 500 }}
            className=" text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-10 md:leading-15 lg:leading-20 xl:leading-25 text-[#010101] uppercase "
          >
            <span className="text-nowrap">Drive by Curiosity</span> <br />
            Guided by <br /> Purpose
          </h1>

          <div className="w-full h-2 border-b bg-transparent hidden"></div>
          <div className="absolute top-35 right-6 md:right-60 md:top-40 lg:top-55 xl:top-55 xl:right-60">
            <CircularText />
          </div>
        </div>
      </>
      <div className="pt-20 md:pt-40 lg:pt-30">
        <Summary />
      </div>
      <Project />
    </div>
  );
};

export default AboutPage;
