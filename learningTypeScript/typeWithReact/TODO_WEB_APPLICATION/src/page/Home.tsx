import React, { useContext } from 'react'
import { TaskContainer, TaskInput, TaskPopupComp } from '../components'
import { TaskInfoProvider } from '../context'

export const Home = () => {

  const { taskPopup, setTaskPopup } = useContext(TaskInfoProvider)
  return (
    <React.Fragment>

      {taskPopup ? <TaskPopupComp /> : ""}

      <section className='w-full h-[90vh] flex justify-center items-center'>
        <div className="container  flex justify-start items-center mx-3 h-[95%] flex-col py-2">
          <div className='mt-2'>
            <TaskInput />
          </div>
          <div className='my-3 w-full h-full'>
            <TaskContainer />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
