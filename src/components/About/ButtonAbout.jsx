import { Motion, MotionP } from "../../lib/UseEffect/Motion";
import { useNavigate } from "react-router-dom";

const ButtonAbout = () => {
  const navigate = useNavigate();
  return (
   
      <Motion strength={20} maxOffset={40}>
      <button
        onClick={() => navigate("/About")}
        className="w-40 h-40 rounded-full bg-black hover:bg-blue-900 text-white  items-center justify-center duration-100 cursor-pointer"
      >
         <MotionP strength={40} maxOffset={40}>
          <h1 className=" text-2xl">More !</h1>
        </MotionP>
      </button>
    </Motion>
  );
};

export default ButtonAbout;
