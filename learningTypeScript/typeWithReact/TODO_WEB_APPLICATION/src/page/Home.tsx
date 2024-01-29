import React from 'react'
import { TaskContainer, TaskInput } from '../components'

export const Home = () => {
  return (
    <React.Fragment>
      <section className='w-full h-[90vh] flex justify-center items-center'>
        <div className="container  flex justify-start items-center mx-3 h-[95%] flex-col py-2">
          <div className='mt-2'>
            <TaskInput />
          </div>
          <div className='my-3 w-full h-full border'>
            <TaskContainer />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
