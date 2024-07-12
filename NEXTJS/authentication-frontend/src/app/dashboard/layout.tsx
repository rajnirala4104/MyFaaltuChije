import DashboardSideBar from '@/componentss/DashboardSideBar';
import React from 'react'

export default function DashboardLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div className='flex w-full'>
         <DashboardSideBar />
         {children}
      </div>
   );
}
