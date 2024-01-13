import React from 'react'
import { Navbar } from '../components'
import { allImage } from '../assets'

export const Hero = () => {
  return (
    <section className='bg-[#ffeeec] h-screen'>
      <Navbar />
      <section className='flex justify-between items-center h-[89vh]'>
        <div className=' w-[50%] flex flex-col mx-auto'>
          <div className="title">
            <div className='text-4xl font-semibold'>
              Your favourite <span className='text-[#F66754]'>restaurants</span> and
              takeaways, <span className='text-[#119477]'>delivered to your door</span>
            </div>
          </div>
          <div className='bg-white p-8 rounded-lg flex flex-col justify-center items-start w-[100%] my-7 shadow-lg'>
            <span className='text-[18px] text-gray-800'>Enter your location to find local restaurants</span>
            <div className='flex justify-between items-center my-2'>
              <input className='p-3 mr-2 rounded-lg w-[30rem] bg-[#F4F4F8] outline-red-400' type="text" placeholder='Type or Search your location here...' />
              <button className='py-3 px-8 bg-[#F66754] rounded-lg text-white font-bold shadow-md hover:shadow-sm hover:bg-[#db4d4d]'>Search</button>
            </div>
          </div>
        </div>
        <div className=''>
          <img src={allImage.heroPic} alt="" />
        </div>
      </section>
    </section>
  )
}
