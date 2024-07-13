"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SignupForm: React.FC = () => {

   const router = useRouter()

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement);
      const { name, email, password, confirmPassword, profilePic } = Object.fromEntries(formData.entries())
      if (!name || !email || !password || !confirmPassword) alert("Please fill all the fields");
      if (password !== confirmPassword) alert("Passwords do not match");

      let finalProfile = profilePic ? profilePic : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
      localStorage.setItem('userInfo', JSON.stringify({ name, email, password, profilePic: finalProfile }));
      window.location.reload();

   };

   useEffect(() => {
      const loggedUser = JSON.parse(localStorage.getItem('userInfo') as string);
      if (loggedUser) router.push('/dashboard')
   }, [])

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                     Name
                  </label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     required
                     className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>
               <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                     Email
                  </label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     required
                     className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>
               <div>
                  <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700">
                     Profile Pic Link
                  </label>
                  <input
                     type="text"
                     id="profilePic"
                     name="profilePic"
                     required
                     className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>

               <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                     Password
                  </label>
                  <input
                     type="password"
                     id="password"
                     name="password"
                     required
                     className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>
               <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                     Confirm Password
                  </label>
                  <input
                     type="password"
                     id="confirmPassword"
                     name="confirmPassword"
                     required
                     className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
               </div>
               <div>
                  <button
                     type="submit"
                     className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                     Sign Up
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default SignupForm;
