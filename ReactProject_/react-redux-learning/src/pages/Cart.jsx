import React, { Fragment, Suspense, useContext, useState } from 'react'
import { CartCard } from '../Components'
import { CartContaxt } from '../contaxts'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const { cart } = useContext(CartContaxt)

    return (
        <Fragment>
            <Suspense fallback={"loading..."}>
                <section>
                    <div className="cartProductContainer">
                        <div className="cartCard px-6">
                            {cart.length === 0 ? (<div className='flex flex-col justify-center items-center w-full h-[80vh]'>
                                <span className='text-3xl font-bold font-sans'>Cart  is empty</span>
                                <Link className='text-orange-500 underline font-bold' to={'/'}>go to home</Link>
                            </div>) : cart.map(singleCardProductObject => (
                                <CartCard {...singleCardProductObject} />
                            ))}
                        </div>
                    </div>
                </section>
            </Suspense>
        </Fragment>
    )
}
