"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { users } from '../data/user.json';
import Link from 'next/link';

const LoginForm: React.FC = () => {

   const [hidePassword, setHidePassword] = useState<boolean>(false)
   const router = useRouter()

   const allUsers = users

   /**
       * Handles the form submission event.
       * 
       * @param {React.FormEvent} e - The form submission event.
       * @return {void} This function does not return anything.
       */
   const handleSubmit = (e: React.FormEvent) => {
      // Prevent the default form submission behavior.
      e.preventDefault();

      // Create a new FormData object from the form data in the event target.
      const formData = new FormData(e.target as HTMLFormElement);

      // Convert the form data entries to an object using Object.fromEntries().
      const { email, password } = Object.fromEntries(formData.entries());

      // Check if email or password is missing, show an alert if so.
      if (!email || !password) {
         alert("Please enter email and password")
      }

      // Check if the user with provided credentials exists, show an alert if not.
      if (!allUsers.find(user => user.email === email && user.password === password)) {
         alert("Invalid credentials. Please try again.")
      }

      // Store the user's email, password, and name in the browser's local storage.
      const userInfo = {
         email,
         profilePic: allUsers.find(user => user.email === email)?.profilePic,
         password,
         name: allUsers.find(user => user.email === email)?.name
      };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      // Reload the window to reflect the changes.
      window.location.reload();
   };

   useEffect(() => {
      const loggedUser = JSON.parse(localStorage.getItem('userInfo') as string);
      if (loggedUser) router.push('/')
   }, [])

   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
         <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                     Password
                  </label>
                  <div className='flex justify-center items-center'>
                     <input
                        type={hidePassword ? "text" : "password"}
                        id="password"
                        name="password"
                        required
                        className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                     />
                     <span
                        onClick={() => setHidePassword(!hidePassword)}
                        className='w-[23%] ml-3 px-4 h-full py-2 cursor-pointer text-white bg-slate-800 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-black'>
                        {!hidePassword ? "Show" : "Hide"}
                     </span>
                  </div>

               </div>
               <div>
                  <button
                     type="submit"
                     className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                     Login
                  </button>
               </div>
            </form>
         </div>
         <div className='my-3'>
            <Link href={'/singup'}>
               <span className='text-blue-500 hover:text-blue-600 hover:underline'>don't have account</span>
            </Link>
         </div>
      </div>
   );
};

export default LoginForm;
