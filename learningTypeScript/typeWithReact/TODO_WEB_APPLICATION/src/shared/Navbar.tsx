import React, { useState } from 'react'
import { NavMenu } from '../icons'


export const Navbar = () => {

  const [navbarMenu, setNavbarMenu] = useState<boolean>(true)

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
        <div className='bg-gray-300 transition p-4 flex justify-evenly items-center'>
          <span>List</span>
          <span>Seaech</span>
        </div>
      ) : ""}
    </React.Fragment>
  )
}
