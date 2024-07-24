import React, { Fragment, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { Container, Flex } from '@radix-ui/themes'

const Authentication: React.FC = () => {

   const { pathname } = useLocation()
   const navigator = useNavigate()

   useEffect(() => {
      if (pathname === "/auth" || pathname === "/auth/") {
         navigator('/auth/login')
      }
   }, [])

   return (
      <Fragment>
         <Container size={"2"} height={"100vh"} >
            <Flex align={"center"} justify={"center"} height={"100%"} >
               {pathname === '/auth/login' ? <LoginForm /> : <RegisterForm />}
            </Flex>
         </Container>
      </Fragment>
   )
}

export default Authentication