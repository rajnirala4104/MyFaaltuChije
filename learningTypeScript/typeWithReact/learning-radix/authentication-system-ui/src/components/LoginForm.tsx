import { Box, Button, Flex, Text } from '@radix-ui/themes'
import React, { Fragment, useEffect, useState } from 'react'
import * as Form from '@radix-ui/react-form';
import { Link, useNavigate } from 'react-router-dom';
import { _USER } from '../data/demoUserData.json'
import useLocalStorage from 'use-local-storage'
import { userInterface } from '../interfaces';

const LoginForm: React.FC = () => {
   document.title = "Login"

   const [hidePassword, setHidePassword] = useState<boolean>(true)
   const [wrongPassword, setWrongPassword] = useState<boolean>(false)
   const [userInfo, setUserInfo] = useLocalStorage<userInterface>("userInfo", {});
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
            user.email === email && user.password === password
         });
         setUserInfo(data)
         // window.location.reload();

      } catch (error) {
         alert("something went wrong")
      }
   }

   useEffect(() => {
      console.log(userInfo)
      if (userInfo.email || userInfo.password) {
         navigator('/')
      }
   }, [])

   return (
      <Fragment>
         <Flex align={'center'} justify={'center'} direction={'column'}>
            <Box>
               <Text className='text-white font-semibold text-center text-2xl my-2'>LoginForm</Text>
            </Box>
            <Box as='div' className='w-full my-2 border border-gray-600 p-4 rounded-md'>
               <Form.Root className="w-[260px]" onSubmit={formHandler}>
                  <Form.Field className="grid mb-[10px]" name="email">
                     <div className="flex items-baseline justify-between">
                        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Email</Form.Label>
                     </div>
                     <Form.Control asChild>
                        <input
                           className="px-3 py-2 border border-gray-600 rounded-md"
                           placeholder='name@example.com'
                           type="email"
                           required
                        />
                     </Form.Control>
                  </Form.Field>
                  <Form.Field className="grid mb-[10px]" name="email">
                     <div className="flex items-baseline justify-between">
                        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Password</Form.Label>
                     </div>
                     <div className='flex justify-between items-center'>
                        <Form.Control asChild className='w-[77%]'>
                           <input
                              className="px-3 py-2 border border-gray-600 rounded-md"
                              placeholder="password"
                              name="password"
                              type={hidePassword ? "password" : "text"}
                              required
                           />
                        </Form.Control>
                        <Button onClick={() => setHidePassword(!hidePassword)} className='h-[90%] w-[20%] rounded-[6px] hover:bg-gray-200 bg-white text-black cursor-pointer'>{hidePassword ? "Show" : "Hide"}</Button>
                     </div>
                  </Form.Field>
                  <Form.Submit asChild>
                     <button className="box-border hover:bg-gray-200 w-full text-black inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none  focus:outline-none mt-[10px]">
                        Login
                     </button>
                  </Form.Submit>
               </Form.Root>
            </Box>
            <Link to="/auth/register" className='underline text-slate-500 hover:text-white transition duration-300 hover:no-underline'>Register</Link>
         </Flex>
      </Fragment>
   )
}

export default LoginForm