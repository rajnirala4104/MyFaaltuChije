"use client"
import Spinner from '@/componentss/Spinner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Dashboard: React.FC = () => {

   const router = useRouter()
   const user = JSON.parse(localStorage.getItem('userInfo') as string);

   useEffect(() => {
      if (!user) router.push('/login')
   }, [])

   if (!user) return <Spinner />

   return (
      <div className="min-h-screen bg-gray-100 flex w-full">
         <main className="flex-1 p-8">
            <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
            <p className="mt-2 text-gray-600">Email: {user.email}</p>
            <div className="mt-8">
               <h2 className="text-2xl font-semibold">Overview</h2>
               <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="p-4 bg-white shadow rounded">
                     <h3 className="text-xl font-bold">Stats 1</h3>
                     <p className="mt-2 text-gray-600">Some data</p>
                  </div>
                  <div className="p-4 bg-white shadow rounded">
                     <h3 className="text-xl font-bold">Stats 2</h3>
                     <p className="mt-2 text-gray-600">Some data</p>
                  </div>
                  <div className="p-4 bg-white shadow rounded">
                     <h3 className="text-xl font-bold">Stats 3</h3>
                     <p className="mt-2 text-gray-600">Some data</p>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
};

export default Dashboard;
