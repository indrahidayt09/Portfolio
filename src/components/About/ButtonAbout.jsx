import { Motion, MotionP } from "../../lib/UseEffect/Motion";
import { useNavigate } from "react-router-dom";

const ButtonAbout = () => {
  const navigate = useNavigate();
  return (
   
      <Motion strength={20} maxOffset={40}>
      <button
        onClick={() => navigate("/About")}
        className="w-40 h-13 rounded-full bg-white text-black  items-center justify-center duration-100 cursor-pointer"
      >
         <MotionP strength={40} maxOffset={40}>
          <h1 className=" text-xl font-medium">About!</h1>
        </MotionP>
      </button>
    </Motion>
  );
};

export default ButtonAbout;
