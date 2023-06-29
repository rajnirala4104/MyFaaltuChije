import { TaskCardModal } from "../modal"
import { TaskCard } from "./TaskCard"

export const ShowTaskSection = ({showAllTodos}:{showAllTodos:TaskCardModal[]}) => {
  return (
   <>
    {
        showAllTodos.map((task, index) => <TaskCard key={index} taskContent={task.task}/>)
    }
   </>
  )
}
