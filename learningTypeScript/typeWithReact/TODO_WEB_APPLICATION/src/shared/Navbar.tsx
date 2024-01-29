import React, { useState } from 'react'
import { NavMenu } from '../icons'
import { Link } from 'react-router-dom'


export const Navbar = () => {

  const [navbarMenu, setNavbarMenu] = useState<boolean>(false)

  const navMenuResponsivenessHandler = () => {
    setNavbarMenu(!navbarMenu)
  }

  return (
    <React.Fragment>
      <header className='bg-green-400 h-14 px-3 flex justify-between items-center'>
        <div className="logo">
          <Link to={'/'} className='text-3xl text-green- font-bold'>
            TODO
          </Link>
        </div>
        <div className="menu lg:hidden">
          <div>
            <NavMenu eventHandler={navMenuResponsivenessHandler} classes={'cursor-pointer'} />
          </div>
        </div>
      </header>
      {navbarMenu ? (
        <div className='bg-green-100 transition px-4 py-3 flex justify-end items-center'>
          <Link to={'/list'} className='cursor-pointer hover:underline *:underline-offset-4'>TaskList</Link>
          <span className='bg-green-300 ml-8 text-black p-2 rounded-md cursor-pointer hover:bg-green-400 transition duration-200'>Seaech Task</span>
        </div>
      ) : ""}
    </React.Fragment>
  )
}
