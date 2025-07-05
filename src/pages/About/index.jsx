import Project from "./Project";
import { CircularText } from "./Fragment";
import Summary from "./Summary";

const AboutPage = () => {
  return (
    <div className="bg-white ">
      <>
        <div className="bg-[url('./public/assets/footer.png')] bg-cover bg-center w-full min-h-screen relative flex flex-col items-center justify-center text-center">
          <div
            style={{ fontFamily: "Montserrat", fontWeight: 400 }}
            className="z-1 max-w-[60vw]"
          >
            <h2
              style={{ fontFamily: "Allura", fontWeight: 500 }}
              className="text-5xl text-white pb-3 "
            >
              Indra Hidayat
            </h2>
            <h2
              style={{ fontFamily: "Roslindale", fontWeight: 300 }}
              className=" text-7xl text-white font-semibold "
            >
              FRONT END DEVELOPER
            </h2>
            <p className="text-white">
              I'm not a college student, and I didn't take any formal education
              in IT. But for a long time, I've had a strong interest in
              technology— especially in building websites.
            </p>
          </div>

          <div className="absolute top-35 right-6 md:right-60 md:top-40 lg:top-55 xl:top-55 xl:right-60 hidden">
            <CircularText />
          </div>
          <div className="w-full h-screen bg-black/30 absolute inset-0 "></div>
        </div>
      </>
      <div className="bg-gradient-to-b from-white to-slate-100">
        <div className="pt-10 md:pt-40 lg:pt-30">
          <Summary />
        </div>
        <Project />
      </div>
    </div>
  );
};

export default AboutPage;
