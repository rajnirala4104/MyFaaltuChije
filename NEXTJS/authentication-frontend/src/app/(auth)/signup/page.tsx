"use client"

import { Spinner } from '@/components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Fragment, Suspense, useEffect } from 'react';

const SignupForm: React.FC = () => {

   const router = useRouter()

   useEffect(() => {
      const loggedUser = JSON.parse(localStorage.getItem('userInfo') as string);
      if (loggedUser) router.push('/dashboard')
   }, [])

   return (
      <Fragment>
         <Suspense fallback={<Spinner />}>
            <SignupForm />
         </Suspense>
      </Fragment>
   );
};

export default SignupForm;
