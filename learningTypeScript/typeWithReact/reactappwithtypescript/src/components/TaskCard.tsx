import { Fragment } from "react"
import { TaskCardModal } from "../modal"
export const TaskCard = ({taskContent}:{taskContent:TaskCardModal}) => {
  console.log(taskContent)
  return (
    <Fragment>
      <div className=" flex justify-between w-[100%] bg-gray-200 m-2 px-2 rounded-md h-[2rem] items-center">
        <span>{taskContent.task}</span>
        <span>{taskContent.isDone === false ? "not completed":"completed"}</span>
      </div>
    </Fragment>
  )
}
