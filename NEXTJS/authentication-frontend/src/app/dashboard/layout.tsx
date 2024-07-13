"use client"
import DashboardSideBar from '@/componentss/DashboardSideBar';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function DashboardLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {

   const router = useRouter()

   useEffect(() => {
      if (!localStorage.getItem('userInfo')) router.push('/login');
   })

   return (
      <div className='flex w-full'>
         <DashboardSideBar />
         {children}
      </div>
   );
}
