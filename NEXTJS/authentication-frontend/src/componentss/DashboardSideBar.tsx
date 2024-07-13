import Link from 'next/link'
import React from 'react'
import Spinner from './Spinner';

export default function DashboardSideBar() {

   const loggedUser = JSON.parse(localStorage.getItem('userInfo') as string);
   if (!loggedUser) { <Spinner /> }

   else {
      return (
         <aside className="w-[20rem] bg-white shadow-md min-h-screen">
            <div className="p-4">
               <Link href={"/profile"} className='flex justify-center items-center'>
                  <img src={loggedUser.profilePic} alt="Oops!!" className='w-10 h-10 rounded-full' />
                  <div>
                     <h2 className="text-xl font-bold mx-2 text-gray-600">{loggedUser.name}</h2>
                     <h3 className="text-[12px] mx-2 text-gray-500 underline">{loggedUser.email}</h3>
                  </div>
               </Link>
            </div>
            <nav className="p-4">
               <ul>
                  <li className=''>
                     <Link href="/" className="block py-2 text-gray-700 hover:bg-gray-200 rounded px-2">
                        Home
                     </Link>
                  </li>
                  <li className=''>
                     <Link href="/dashboard/profile" className="block py-2 text-gray-700 hover:bg-gray-200 rounded px-2">
                        Profile
                     </Link>
                  </li>
                  <li className=''>
                     <Link href="/dashboard/settings" className="block py-2 text-gray-700 hover:bg-gray-200 rounded px-2">
                        Settings
                     </Link>
                  </li>
               </ul>
            </nav>
         </aside>
      )
   }
}
