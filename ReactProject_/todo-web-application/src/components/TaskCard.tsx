import { Fragment } from "react/jsx-runtime"

const TaskCard:React.FC = () => {
  return (
    <Fragment>
      <div className="w-full h-4 border border-slate-700">
        <input type="checkbox"/>
        <span className="">Task Title</span>
      </div>
    </Fragment>
  )
}

export default TaskCard;
