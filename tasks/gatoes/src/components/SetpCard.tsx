import React, { Fragment } from 'react'
import { steps } from '../data/StepsData'

export const SetpCard: React.FC<steps> = (props) => {
  const { step, img, description } = props
  return (
    <Fragment>
      <div className='flex flex-col justify-center items-center w-[30%]'>
        <div>
          <img src={img} className='w-[100%]' alt="" />
        </div>
        <div className='my-2'>
          <span className='text-gray-500 my-1 text-[17px]'>Step:{step}</span>
        </div>
        <div className='w-[90%]'>
          <p className='text-gray-900 text-center text-[19px]'>{description}</p>
        </div>
      </div>
    </Fragment>
  )
}
