import React, { Fragment } from 'react'
import { allImage } from '../assets'
import UserIcon from '../icons/UserIcon'

export const Navbar = () => {
  return (
    <Fragment>
      <header className='h-[6rem] flex justify-evenly items-center'>
        <div className="logo">
          <img src={allImage.logo} className='cursor-pointer' alt="" />
        </div>
        <div className="menus flex items-center">
          <ul className='flex items-center'>
            <li className='cursor-pointer hover:text-gray-700'>Partner With Us</li>
            <li className='mx-7 cursor-pointer hover:text-gray-700'>Ride With Us</li>
            <li className='flex items-center justify-between bg-white rounded-lg py-2 px-3 text-[#F66754] cursor-pointer shadow-lg hover:shadow-md '>
              <span className='mx-1'>
                <UserIcon />
              </span>
              Signup Or Login
            </li>
          </ul>
        </div>
      </header>
    </Fragment>
  )
}
