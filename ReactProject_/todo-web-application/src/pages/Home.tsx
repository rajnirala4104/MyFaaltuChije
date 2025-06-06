import { useContext, useState } from "react"
import { Fragment } from "react/jsx-runtime"
import { DetailSection, TaskCard } from "../components"
import type { taskInterface } from "../types"
import AddTaskBtn from "../components/AddTaskBtn"
import { InputTaskPopupContext } from "../context"
import TaskInputPopup from "../components/TaskInputPopup"


const Home:React.FC = () => {
  
  const [tasks, setTask] = useState<taskInterface[]>([
    {
      taskTitle: "this is first taks",
      taskDescription: "this the description",
      taskStatus: false
    }, {
      taskTitle: "this is first taks",
      taskDescription: "this the description",
      taskStatus: false
    }, {
      taskTitle: "this is first taks",
      taskDescription: "this the description",
      taskStatus: true
    }
  ])

  const {isInputTaskOn} = useContext(InputTaskPopupContext);

  return (
    <Fragment>
      {isInputTaskOn ? <TaskInputPopup /> : ""}
      <section className="w-full bg-green-50 h-screen flex justify-center items-center ">
        <div className="shadow-xl bg-green-200 w-[95%] h-[90%] rounded-lg flex justify-center items-center p-4">
          <div className="leftContainer taskContainer w-[45%] h-full justify-start items-center flex-col overflow-auto relative top-0 left-0">
            {tasks.map((singleObj:taskInterface) => (
              <Fragment>
                <TaskCard {...singleObj} />
              </Fragment>
            ))}
            <AddTaskBtn />
          </div>
          <div className="rightContainer taskContentSection mx-2 w-[100%] h-full p-2 bg-green-50 rounded-lg">
            <DetailSection />
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home;
