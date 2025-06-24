import ProjectList from "../../components/Project/Index";
import { IoIosArrowRoundForward } from "react-icons/io";

const Project = () => {


  return (
    <div className="px-6 lg:px-25 pt-5 py-25">
      <div className="flex lg:flex-col justify-between items-center lg:items-start gap-2 py-10 z-90 ">
        <h1
          style={{ fontFamily: "Sora", fontWeight: 400 }}
          className="text-4xl mb-2 text-[#1c1d20] "
        >
          That I have ever made
        </h1>
        <div className="relative ">
          <IoIosArrowRoundForward className="text-2xl md:text-3xl text-gray-600 lg:absolute lg:-left-15 top-1  rotate-50 lg:rotate-0" />
          <p
            style={{ fontFamily: "Outfit", fontWeight: 400 }}
            className="mb-4 text-base text-[#1c1d20] opacity-95 max-w-100 "
          >
            I haven't worked on many projects yet, but this is the result of
            what I've learned so far. I hope you find it interesting.
          </p>
        </div>
      </div>
      <ProjectList />
    </div>
  );
};

export default Project;
