import React, { Fragment } from 'react'
import { allImage } from '../assets'
import Facebook from '../icons/facebookIcon'
import Instagram from '../icons/instagranIcon'
import LinedIn from '../icons/linkedIn'

export const Footer = () => {
  return (
    <Fragment>
      <section className='flex flex-col bg-[#23212D] text-white h-[70vh] justify-between items-center'>
        <span className='bg-red-500 w-14 h-7 rounded-tr-full rounded-tl-full -translate-y-7'></span>
        <div className="mainSection flex  w-full justify-evenly  my-auto">
          <div className='flex flex-col '>
            <img src={allImage.footerLogo} className='cursor-pointer' alt="gatoes" />
            <img src={allImage.appleStore} className='my-4 cursor-pointer' alt="gatoes" />
            <img src={allImage.googlePlay} className='cursor-pointer' alt="gatoes" />
          </div>
          <div className='flex flex-col  space-y-2 '>
            <span className='text-gray-400 font-semibold '>DISCOVER GATOES</span>
            <span className='cursor-pointer'>About Us</span>
            <span className='cursor-pointer'>Become a partner</span>
            <span className='cursor-pointer'>Ride with us</span>
          </div>
          <div className='flex flex-col  space-y-2 '>
            <span className='text-gray-400 font-semibold '>HELP</span>
            <span className='cursor-pointer'>Contact us</span>
            <span className='cursor-pointer'>FAQs</span>
          </div>
          <div className='flex flex-col  space-y-2 '>
            <span className='text-gray-400 font-semibold '>LEGAL</span>
            <span className='cursor-pointer'>Term & Condition</span>
            <span className='cursor-pointer'>Refund & Cancellation</span>
            <span className='cursor-pointer'>Privacy Policy</span>
            <span className='cursor-pointer'>Cookie Policy</span>
          </div>
        </div>
        <div className="copyright flex justify-evenly  w-full items-center bg-[#1D1B27] py-2">
          <div className='flex justify-between w-[10%] items-center'>
            <Facebook />
            <Instagram />
            <LinedIn />
          </div>
          <div>
            <span className='text-[#716D82]'>&copy; 2024 Gatoes. All Rights Reserved</span>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
