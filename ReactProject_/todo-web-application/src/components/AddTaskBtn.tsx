import { useContext } from "react";
import { Fragment } from "react/jsx-runtime"
import { InputTaskPopupContext } from "../context";

const AddTaskBtn:React.FC = () => {
  const {isInputTaskOn, setIsInputTaskOn} = useContext(InputTaskPopupContext);
  return (
    <Fragment>
      <div className="py-6 px-4 h-[2rem] bg-green-300 rounded-lg flex justify-center items-center fixed bottom-[14%] left-[24%] cursor-pointer shadow-lg"
        onClick={() => setIsInputTaskOn(!isInputTaskOn)}
      >
        <span className="text-3xl text-center">+</span>
      </div>
    </Fragment>
  )
}

export default AddTaskBtn;
