import { useState } from "react"
import { Fragment } from "react/jsx-runtime"
import { TaskCard } from "../components"
import type { taskInterface } from "../types"


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
    }, {
      taskTitle: "this is first taks",
      taskDescription: "this the description",
      taskStatus:false
    },
  ])

  return (
    <Fragment>
      <section className="w-full bg-green-100 h-screen flex justify-center items-center border border-red-500">
        <div className="shadow-xl bg-white w-[95%] h-[90%] flex justify-between items-center rounded-lg p-4 border border-gray-100 ">
          <div className="leftContainer taskContainer w-[50%] h-full">
            
            {tasks.map((singleObj:taskInterface) => (
              <Fragment>
                <TaskCard {...singleObj} />
              </Fragment>
            ))}

          </div>
          <div className="rightContainer taskContentSection w-[50%] border border-red-500 h-full">

            <div>
              <span>Task Title </span>
              <div>
                <p>this is such a large paragraph realy realy realy realy realy a tooooooo long and large and vast and so big and so bada paragarph </p>
              </div>
            </div> 

          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home;
