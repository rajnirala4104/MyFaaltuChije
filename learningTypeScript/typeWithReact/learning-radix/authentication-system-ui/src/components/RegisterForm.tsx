import { Box, Flex, Text } from '@radix-ui/themes'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const RegisterForm: React.FC = () => {

   document.title = "Register"

   const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const fromData = new FormData(e.target as HTMLFormElement)
      const fromObject = Object.fromEntries(fromData);

      if (fromObject.confirmPassword !== fromObject.createPassword) {
         console.error("Passwords are not same")
      }

      console.log(fromObject)

   }

   return (
      <Fragment>
         <Flex align={'center'} justify={'center'} direction={'column'}>
            <Box>
               <Text className='text-white font-semibold text-center text-2xl my-2'>Registeration</Text>
            </Box>
            <Box as='div' className='w-full my-2 border border-gray-600 p-4 rounded-md'>
               <form className="w-[260px]" onSubmit={formHandler}>
                  <div className="grid mb-[10px]">
                     <div className="flex items-baseline justify-between">
                        <label className="text-[15px] font-medium leading-[35px] text-white">Name</label>
                     </div>
                     <div>
                        <input
                           className="px-3 py-2 w-full border border-gray-600 rounded-md"
                           name="name"
                           placeholder='example singh'
                           type="text"
                           required
                        />
                     </div>
                  </div>
                  <div className="grid mb-[10px]">
                     <div className="flex items-baseline justify-between">
                        <label className="text-[15px] font-medium leading-[35px] text-white">Email</label>
                     </div>
                     <div>
                        <input
                           className="px-3 py-2 w-full border border-gray-600 rounded-md"
                           name="email"
                           placeholder='name@example.com'
                           type="email"
                           required
                        />
                     </div>
                  </div>
                  <div className="grid mb-[10px]">
                     <div className="flex items-baseline justify-between">
                        <label className="text-[15px] font-medium leading-[35px] text-white">Create Password</label>
                     </div>
                     <div>
                        <input
                           className="px-3 py-2 w-full border border-gray-600 rounded-md"
                           name="createPassword"
                           placeholder="Create Password"
                           type="password"
                           required
                        />
                     </div>
                  </div>
                  <div className="grid mb-[10px]">
                     <div className="flex items-baseline justify-between">
                        <label className="text-[15px] font-medium leading-[35px] text-white">Confirm Password</label>
                     </div>
                     <div>
                        <input
                           className="px-3 py-2 w-full border border-gray-600 rounded-md"
                           name="confirmPassword"
                           placeholder="Confirm Password"
                           type="password"
                           required
                        />
                     </div>
                  </div>
                  <div>
                     <button className="box-border w-full text-black shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none     focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                        Create Account
                     </button>
                  </div>
               </form>
            </Box>
            <Link to="/auth/login" className='underline text-slate-500 hover:text-white transition duration-300 hover:no-underline'>Login</Link>
         </Flex>
      </Fragment>
   )
}

export default RegisterForm