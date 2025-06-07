import { useContext, useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime"
import { InputTaskPopupContext } from "../context";
import type { taskInterface } from "../types";

const TaskInputPopup:React.FC = () => {
  const {isInputTaskOn,setIsInputTaskOn} = useContext(InputTaskPopupContext);
  const [tasksArr, setTaskArr] = useState<taskInterface[]>(JSON.parse(localStorage.getItem('tasks') as string));
  const [formData, setFormData] = useState<taskInterface>({
    taskTitle: "",
    taskDescription: "",
    taskStatus: false
  });

  const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    
    setFormData(prev => ({
      ...prev, 
      [name]: value,
      taskStatus: false
    }))
  }

  const handleSubmit= (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskArr(prev => ([...prev, formData ]))
    handlerResetBtn()
    window.location.reload();
  }

  const handlerResetBtn = () => {
    setFormData({taskTitle:"", taskDescription:"",})
  }
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksArr));
  }, [tasksArr])

  return(
    <Fragment>
      <div className="w-full h-screen flex justify-center items-center bg-[rgba(0,0,0,.2)] backdrop-blur-sm absolute top left-0 z-1">
      <div className=" lg:w-[40%] lg:h-[90%] w-[90%] h-[90%] flex justify-center items-center relative">
          <span 
            onClick={() => setIsInputTaskOn(!isInputTaskOn)}
            className="absolute top-[2%] right-[3%] text-slate-800 cursor-pointer text-2xl">
            <i className="fa-solid fa-circle-xmark"></i>
          </span>
        <div className="lg:w-[80%] lg:h-[90%] w-full h-full bg-white rounded-xl flex justify-center items-center ">          
          <div className="w-full h-full p-2 flex justify-center items-center">
           <form onSubmit={handleSubmit} className="space-y-4 w-[70%] h-[80%]">
                <div className="">
                  <label htmlFor="task" className="block text-sm font-medium text-gray-700 mb-2">
                    Task
                  </label>
                  <input
                    type="text"
                    id="task"
                    name="taskTitle"
                    value={formData.taskTitle}
                    onChange={handlerInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Enter task name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="taskDescription"
                    rows={10}
                    value={formData.taskDescription}
                    onChange={handlerInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical"
                    placeholder="Enter task description"
                    required
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                  >
                    Create Task
                  </button>
          
                  <button
                    type="button"
                    onClick={handlerResetBtn}
                    className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
                  >
                    Reset
                  </button>
                </div>
              </form>        
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TaskInputPopup;
