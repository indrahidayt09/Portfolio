import {Motion} from "../../lib/UseEffect/Motion";

export const MenuIcon = () => {
  return (
    
      <Motion strength={20} maxOffset={20} smoothing={1}>
        <div className="flex flex-col gap-2 items-start justify-center rounded-full w-20 h-10 ">
          <div className="w-[20px] h-[2px] bg-white "></div>
          <div className="w-[40px] h-[2px] bg-white "></div>
        </div>
      </Motion>
 
  );
};

export const CloseIcon = () => {
  return (
    <Motion strength={20} maxOffset={20}>
      <div className="flex flex-col gap-2 w-10 h-10 ">
        <div className="w-full h-[2px] bg-white  rotate-60"></div>
        <div className="w-full h-[2px] bg-white -rotate-45"></div>
      </div>
    </Motion>
  );
};
