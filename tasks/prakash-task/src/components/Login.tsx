import React, { Fragment, useEffect, useState } from 'react'
import { login } from '../api/services/login';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {

   const navigator = useNavigate();

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');


   /*
   eve.holt@reqres.in
   pistol
   */


   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      // Add login logic here
      const response = await login({ email, password });
      localStorage.setItem('userInfo', JSON.stringify({
         token: response.data.token,
         email: email,
         password: "asdf" + password + "asdf"
      }));
      navigator('/')
   };

   const guestUserHandler = async () => {
      const response = await login({ email: "eve.holt@reqres.in", password: "pistol" });
      localStorage.setItem('userInfo', JSON.stringify({
         token: response.data.token,
         email: 'eve.holt@reqres.in',
         password: "pistol"
      }));
      navigator('/')
   }

   useEffect(() => {
      const loggedUser = localStorage.getItem("userInfo");
      if (loggedUser) {
         navigator('/')
      }
   }, [])

   return (
      <Fragment>
         <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
               <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
               <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                     />
                  </div>
                  <div className="mb-6">
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                     </label>
                     <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                     />
                  </div>
                  <div className="flex items-center justify-between">
                     <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     >
                        Login
                     </button>
                  </div>
               </form>
            </div>
            <button
               onClick={() => guestUserHandler()}
               className="text-2xl underline text-blue-500 hover:text-blue-400 hover:no-underline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
               Guest User
            </button>
         </div>
      </Fragment>
   )
}

export default Login
