import { Box, Flex, Text } from '@radix-ui/themes'
import React, { Fragment } from 'react'
import * as Form from '@radix-ui/react-form';
import { Link } from 'react-router-dom';

const RegisterForm: React.FC = () => {

   document.title = "Register"

   return (
      <Fragment>
         <Flex align={'center'} justify={'center'} direction={'column'}>
            <Box>
               <Text className='text-white font-semibold text-center text-2xl my-2'>Registeration</Text>
            </Box>
            <Box as='div' className='w-full my-2 border border-gray-600 p-4 rounded-md'>
               <Form.Root className="w-[260px]">
                  <Form.Field className="grid mb-[10px]" name="email">
                     <div className="flex items-baseline justify-between">
                        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Name</Form.Label>
                     </div>
                     <Form.Control asChild>
                        <input
                           className="px-3 py-2 border border-gray-600 rounded-md"
                           placeholder='name@example.com'
                           type="text"
                           required
                        />
                     </Form.Control>
                  </Form.Field>
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
                        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Create Password</Form.Label>
                     </div>
                     <Form.Control asChild>
                        <input
                           className="px-3 py-2 border border-gray-600 rounded-md"
                           placeholder="Create Password"
                           type="password"
                           required
                        />
                     </Form.Control>
                  </Form.Field>
                  <Form.Field className="grid mb-[10px]" name="email">
                     <div className="flex items-baseline justify-between">
                        <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Confirm Password</Form.Label>
                     </div>
                     <Form.Control asChild>
                        <input
                           className="px-3 py-2 border border-gray-600 rounded-md"
                           placeholder="Confirm Password"
                           type="password"
                           required
                        />
                     </Form.Control>
                  </Form.Field>
                  <Form.Submit asChild>
                     <button className="box-border w-full text-black shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none     focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                        Create Account
                     </button>
                  </Form.Submit>
               </Form.Root>
            </Box>
            <Link to="/auth/login" className='underline text-slate-500 hover:text-white transition duration-300 hover:no-underline'>Login</Link>
         </Flex>
      </Fragment>
   )
}

export default RegisterForm