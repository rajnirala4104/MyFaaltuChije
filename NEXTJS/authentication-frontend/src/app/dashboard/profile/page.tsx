"use client"
import Spinner from '@/components/Spinner';
import React from 'react';

const ProfilePage: React.FC = () => {
   const user = JSON.parse(localStorage.getItem('userInfo') as string);

   if (!user) return <Spinner />

   return (
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-200">
         <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
            <div className="flex flex-col items-center justify-center space-y-6">
               <img
                  className="w-32 h-32 rounded-full shadow-lg"
                  src={user.profilePic}
                  alt="User avatar"
               />
               <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
               <p className="text-gray-600">{user.email}</p>
               <p className="text-center text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quam hic ab sed eligendi consectetur recusandae quis? Accusantium illo, labore quos, vitae sit vero voluptas iste modi aliquam optio accusamus earum, fugiat iure in ea eligendi omnis recusandae ullam? Magnam?</p>
               <div className='flex justify-center items-center'>
                  <button
                     onClick={() => alert("I'll build this funcionty later")}
                     className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                     Edit Profile
                  </button>
                  <button
                     onClick={() => {
                        localStorage.removeItem('userInfo');
                        window.location.reload();
                     }}
                     className="px-4 py-2 font-semibold text-white mx-3 bg-slate-800 rounded hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                     Log Out
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfilePage;
