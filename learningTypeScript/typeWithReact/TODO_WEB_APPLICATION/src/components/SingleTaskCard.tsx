import React from 'react'
import { SingleTaskCardProp } from '../interfaces'
import { sliceingText } from '../utils'

export const SingleTaskCard: React.FC<SingleTaskCardProp> = (props) => {
  return (
    <React.Fragment>
      <div className='flex justify-between px-2 pr-4 rounded-md my-2 text-green-900 bg-white h-8 items-center'>
        <input type="checkbox" />
        <article className='mx-2 text-wrap'>
          <span className='text-wrap'>{props.title.length >= 20 ? `${sliceingText(props.title)}...` : props.title}</span>
        </article>
        <div>
          {props.status}
        </div>
      </div>
    </React.Fragment>
  )
}
