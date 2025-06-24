import { IoLanguageOutline } from "react-icons/io5";
import {Motion} from "../../lib/UseEffect/Motion";

export const LanIcon = () => {
  return (
    <Motion>
      <div className="text-xl text-[#b3b3b3] hover:text-slate-300 p-2 border-1 border-slate-500 hover:border-slate-700 rounded-b-full hover:bg-slate-700">
        <IoLanguageOutline />
      </div>
    </Motion>
  );
};
