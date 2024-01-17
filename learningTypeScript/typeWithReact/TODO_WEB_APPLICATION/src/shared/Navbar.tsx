import React from 'react'
import { NavMenu } from '../icons'


export const Navbar = () => {
  return (
    <React.Fragment>
      <header className='bg-[#00A3FF] h-14 px-3 flex justify-between items-center'>
        <div className="logo">
          <span className='text-3xl font-bold'>
            TODO
          </span>
        </div>
        <div className="menu">
          <div>
            <NavMenu classes={'cursor-pointer'} />
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}
