import { Fragment } from "react"
import { TaskCardModal } from "../modal"
import { TaskCard } from "./TaskCard"

export const ShowTaskSection = ({ showAllTodos }: { showAllTodos: TaskCardModal[] }) => {
  return (
    <Fragment>
      <div className="flex flex-col justify-center ">
        {showAllTodos.map((singleDataObject, i) => (
          <Fragment key={i}>
            <TaskCard taskContent={singleDataObject} />
          </Fragment>
        ))}
      </div>
    </Fragment>
  )
}
