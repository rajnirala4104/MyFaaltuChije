import { Fragment } from "react/jsx-runtime"
import type { taskInterface } from "../types";
import { useContext } from "react";
import { ActiveTaskContext } from "../context";

const TaskCard:React.FC<taskInterface> = (props) => {
  
 const {activeTask} = useContext(ActiveTaskContext)

  return (
    <Fragment>
      <div className={`w-[94%] mx-auto h-4 p-5 bg-green-50 hover:bg-green-200 border border-transparent hover:border-green-300 hover:shadow-md translate-3 transition flex justify-start items-center mb-2 rounded-md -ml-[.25px] ${props.taskTitle === activeTask[0]?.taskTitle ? "bg-green-300":""}`}>
        {props.taskStatus ? (
          <>
            <input type="checkbox" checked/>
            <span className="mx-2 text-lg text-slate-600"> {props.taskTitle}</span>
          </>
        ):(
          <>
            <input type="checkbox" />
            <span className="mx-2 text-lg text-slate-600"> {props.taskTitle}</span>
          </>
        )}
       </div>
    </Fragment>
  )
}

export default TaskCard;
