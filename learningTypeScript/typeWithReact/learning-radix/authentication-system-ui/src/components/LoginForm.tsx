import { Box, Flex, Text, Tooltip } from '@radix-ui/themes'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { _USER } from '../data/demoUserData.json'
import useLocalStorage from 'use-local-storage'
import { userInterface } from '../interfaces';
import MessageBox from './MessageBox';
import { MessageBoxContext } from '../contexts';

const LoginForm: React.FC = () => {
   document.title = "Login"

   const [hidePassword, setHidePassword] = useState<boolean>(true)
   const [wrongPassword, setWrongPassword] = useState<boolean>(false)
   const [wrongEmail, setWrongEmail] = useState<boolean>(false)
   const [userInfo, setUserInfo] = useLocalStorage<userInterface>("userInfo", {});

   const { setShowMessageBox } = useContext(MessageBoxContext)

   const navigator = useNavigate()

   const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const { email, password } = Object.fromEntries(formData);

      try {
         if (!email || !password) {
            alert("fill the inputs")
         }

         const data = _USER.find((user) => {
            if (user.email !== email) {
               setWrongEmail(true)
               setShowMessageBox(true)
               return;
            }

            if (user.email === email && user.password !== password) {
               setWrongPassword(true)
               setShowMessageBox(true)
               return;
            }

            if (user.email === email && user.password === password) {
               setWrongPassword(false)
               return user.email === email && user.password === password
            }
         });

         setUserInfo(data)
         if (userInfo.email || userInfo.password) {
            window.location.reload();
         }
      } catch (error) {
         console.error("something went wrong")
      }
   }

   useEffect(() => {
      // console.log(Object.keys(userInfo))
      if (Object.keys(userInfo).length !== 0) {
         navigator('/')
      }
   }, [])

   return (
      <Fragment>
         <Flex align={'center'} justify={'center'} direction={'column'}>
            <Box>
               <Text className='text-white font-semibold text-center text-2xl my-2'>Login</Text>
            </Box>
            <Box as='div' className='w-full my-2 border border-gray-600 p-4 rounded-md'>
               <form className="w-[260px] " onSubmit={formHandler}>
                  <div className="grid mb-[10px]">
                     <div className="flex items-baseline justify-between">
                        <label className={`text-[15px] font-medium leading-[35px] text-white`}>Email</label>
                     </div>
                     <div className=' '>
                        {wrongEmail ? <MessageBox message='Email Galat hai dost' title='Wrong Email' /> : null}
                        <input
                           className="px-3 py-2 w-full border border-gray-600 rounded-md"
                           placeholder='name@example.com'
                           name='email'
                           type="email"
                           required
                        />
                     </div>
                  </div>
                  <div className="grid mb-[10px]">
                     <div className="flex items-baseline justify-between">
                        <label className={`text-[15px] font-medium leading-[35px] text-white`}>Password</label>
                     </div>
                     <div className='flex justify-between items-center '>
                        <div className='w-[77%] relative top-0'>
                           {wrongPassword ? <MessageBox title='Wrong Password' message='Apne Ex ka number to nhi bhoolte kabhi' /> : null}
                           <input
                              className="px-3 py-2 w-full border border-gray-600 rounded-md"
                              placeholder="password"
                              name="password"
                              type={hidePassword ? "password" : "text"}
                              required
                           />
                        </div>
                        <button onClick={() => setHidePassword(!hidePassword)} className='font-medium h-[90%] w-[20%] rounded-[6px] hover:bg-gray-200 bg-white text-black cursor-pointer'>{hidePassword ? "Show" : "Hide"}</button>
                     </div>
                  </div>
                  <div>
                     <button
                        className="box-border hover:bg-gray-200 w-full text-black inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none  focus:outline-none mt-[10px]"
                     >
                        Login
                     </button>
                  </div>
               </form>
            </Box>
            <Tooltip content="If you don't have an account click here" >
               <Link to="/auth/register" className='underline text-slate-500 hover:text-white transition duration-300 hover:no-underline'>Register</Link>
            </Tooltip>
         </Flex>
      </Fragment>
   )
}

export default LoginForm