import React, { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'

const Home: React.FC = () => {
   const [userInfo] = useLocalStorage("userInfo", {});
   const navigator = useNavigate()

   useEffect(() => {
      if (Object.keys(userInfo).length === 0) navigator('/auth')
   }, [])
   return (
      <Fragment>
         <div>Home</div>
      </Fragment>
   )
}

export default Home