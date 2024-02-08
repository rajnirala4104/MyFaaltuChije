import React, { useContext } from 'react'
import { taskInterface } from '../interfaces'
import { sliceingText } from '../utils'
import { TaskInfoProvider } from '../context'

export const SingleTaskCard: React.FC<taskInterface> = (props) => {

  const { taskPopup, setTaskPopup } = useContext(TaskInfoProvider)

  return (
    <React.Fragment>
      <div onClick={() => setTaskPopup(!taskPopup)} className='flex cursor-pointer hover:bg-green-100 transition duration-200 justify-between px-2 pr-4 rounded-md my-2 text-green-900 bg-white h-10 items-center'>
        <input type="checkbox" />
        {/* <span>#</span> */}
        <article className='mx-2 text-start'>
          <span className='text-start lg:hidden'>{props.title.length >= 20 ? `${sliceingText(props.title)}...` : props.title}</span>
          <span className='text-start hidden lg:inline'>{props.title}</span>
        </article>
        <div>
          {props.status}
        </div>
      </div>
    </React.Fragment>
  )
}
