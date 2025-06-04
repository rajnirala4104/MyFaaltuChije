import { Fragment } from "react/jsx-runtime"
import type { taskInterface } from "../types";

const TaskCard:React.FC<taskInterface> = (props) => {
  return (
    <Fragment>
      <div className="w-[97%] h-4 p-5 border border-black flex justify-start items-center my-2   rounded-md ">
        <input type="checkbox"/>
        <span className="mx-2 text-lg"> {props.taskTitle}</span>
      </div>
    </Fragment>
  )
}

export default TaskCard;
