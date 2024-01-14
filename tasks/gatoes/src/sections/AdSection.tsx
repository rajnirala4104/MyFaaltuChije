import React, { Fragment } from 'react'
import { allImage } from '../assets'

export const AddSection = () => {
  return (
    <Fragment>
      <section className='p-36 bg-gray-100 h-screen flex justify-center items-center'>
        <div className="mainContainer bg-[#ffdfdb] w-[100%] h-[400px] flex rounded-xl ">
          <div className="infos flex flex-col justify-center items-center ">
            <div className='w-[90%]'>
              <span className='text-[#F66754] text-4xl font-bold'>Have you got our App?</span>
              <p className='text-xl w-[80%] my-4'>Get yours now - available on the Apple app store and
                Google play store!</p>
              <div className='flex space-x-5 mt-3 '>
                <img src={allImage.appleStore} alt="apple store" />
                <img src={allImage.googlePlay} alt="google play store" />
              </div>
            </div>
          </div>
          <div className=" -mx-[6rem]">
            <img src={allImage.phones} className='-translate-y-14' alt="" />
          </div>
        </div>
      </section>
    </Fragment>
  )
}
