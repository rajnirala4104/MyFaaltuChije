import { useContext } from "react";
import { Fragment } from "react/jsx-runtime"
import { InputTaskPopupContext } from "../context";
import { XmarkIcon } from "../icons";

const TaskInputPopup:React.FC = () => {
  const {isInputTaskOn,setIsInputTaskOn} = useContext(InputTaskPopupContext);
  return(
    <Fragment>
      <div className="w-full h-screen flex justify-center items-center bg-[rgba(0,0,0,.2)] backdrop-blur-sm absolute top left-0 z-1">
        <div className="w-[80%] h-[90%] bg-white rounded-xl flex justify-center items-center relative">
          <span 
            onClick={() => setIsInputTaskOn(!isInputTaskOn)}
            className="absolute top-[5%] right-[5%] text-slate-800 text-2xl cursor-pointer ">X</span>
            <XmarkIcon />
        </div>
      </div>
    </Fragment>
  )
}

export default TaskInputPopup;
