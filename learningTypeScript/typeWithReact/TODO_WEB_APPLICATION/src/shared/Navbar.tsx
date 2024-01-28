import React, { useState } from 'react'
import { NavMenu } from '../icons'


export const Navbar = () => {

  const [navbarMenu, setNavbarMenu] = useState<boolean>(false)

  const navMenuResponsivenessHandler = () => {
    setNavbarMenu(!navbarMenu)
  }

  return (
    <React.Fragment>
      <header className='bg-[#00A3FF] h-14 px-3 flex justify-between items-center'>
        <div className="logo">
          <span className='text-3xl font-bold'>
            TODO
          </span>
        </div>
        <div className="menu lg:hidden">
          <div>
            <NavMenu eventHandler={navMenuResponsivenessHandler} classes={'cursor-pointer'} />
          </div>
        </div>
      </header>
      {navbarMenu ? (
        <div className='bg-blue-100 transition px-4 py-3 flex justify-end items-center'>
          <span className='cursor-pointer hover:underline *:underline-offset-4'>TaskList</span>
          <span className='bg-blue-300 ml-8 text-black p-2 rounded-md cursor-pointer hover:bg-blue-400 transition duration-200'>Seaech</span>
        </div>
      ) : ""}
    </React.Fragment>
  )
}
