import React from 'react'
import { useLocation } from 'react-router-dom'

export const NotFoundPage = () => {
  const { pathname } = useLocation()
  return (
    <React.Fragment>
      <section className='h-[80vh] flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <span className='text-[4rem]'>Oops!!</span>
          <span className='text-4xl'>404 <span className='text-red-500 font-extrabold'>error</span></span>
          <span><strong>{pathname}</strong> endpoint is Not Found</span>
        </div>
      </section>
    </React.Fragment>
  )
}
