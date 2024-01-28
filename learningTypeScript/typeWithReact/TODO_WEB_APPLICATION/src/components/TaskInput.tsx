import React from 'react'
import { AddIcon } from '../icons'

export const TaskInput = () => {
  return (
    <React.Fragment>
      <section className='flex bg-green-400 py-4 px-4 rounded-lg shadow-lg'>
        <div className=" flex px-3 py-2 bg-white rounded-md shadow-md">
          <input className='bg-transparent text-green-950 placeholder:text-slate-500 outline-none mr-2' type="text" placeholder='Add New Todo...' />
          <span className='bg-slate-600 py-[4px] px-2 hover:bg-slate-800 transition duration-200 rounded-md text-white'>
            <AddIcon classes='text-2xl' />
          </span>
        </div>
      </section>
    </React.Fragment>
  )
}
