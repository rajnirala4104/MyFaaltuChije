import Link from 'next/link'
import React from 'react'

export default function DashboardSideBar() {
   return (
      <aside className="w-64 bg-white shadow-md min-h-screen">
         <div className="p-4">
            <Link href={"/dashboard"}>
               <h2 className="text-2xl font-bold">Dashboard</h2>
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
