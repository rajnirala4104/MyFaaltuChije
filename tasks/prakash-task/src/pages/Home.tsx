import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { ProductContainer } from '../components/ProductContainer';
import { ProductPopupFormContext } from '../contaxt';
import { ProductPopupForm } from '../components/ProductPopupForm';

export const Home: React.FC = () => {

   const navigator = useNavigate()

   useEffect(() => {
      const loggedUser = localStorage.getItem("userInfo");
      if (!loggedUser) {
         navigator('/login')
      }
   }, [])

   const { productPopupFormOnOff, setProductPopupFormOnOff } = useContext(ProductPopupFormContext)

   return (
      <Fragment>
         <Navbar />
         {productPopupFormOnOff ? <ProductPopupForm /> : ""}
         <div className='w-full h-[35rem] flex flex-col justify-evenly items-center '>
            <div className='w-full'>
               <ProductContainer />
            </div>
            <div>
               <button
                  onClick={() => setProductPopupFormOnOff(!productPopupFormOnOff)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
               >
                  Add Product
               </button>
            </div>
         </div>
      </Fragment>
   )
}
