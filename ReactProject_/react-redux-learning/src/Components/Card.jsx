import React, { Fragment, useContext } from 'react'
import { CartContaxt } from '../contaxts'

export const Card = (props) => {

    const { cart, setCart } = useContext(CartContaxt)
    return (
        <Fragment>
            <div className=' flex flex-col justify-between py-3 items-center border border-black rounded-md w-[20rem] h-[26rem] mb-2'>
                <div className='w-[80%] mb-3 flex justify-between py-2 items-center flex-col border border-blue-500'>
                    <div className="img  flex justify-center items-center w-[90%]">
                        <img src={props.image} loading='lazy' className='w-[50%]' alt={props.image} />
                    </div>
                </div>
                <div className="content flex w-[100%] px-2 justify-between items-center">
                    <div className="title w-[80%] py-4">
                        <span className='text-center font-bold'>{props.title}</span>
                    </div>
                    <div>
                        <span className='text-2xl font-bold'>${props.price}</span>
                    </div>
                </div>
                <div className="btns flex justify-between  w-full">
                    <div className="buyNowBtn w-full flex justify-center items-center  ">
                        <span className='bg-orange-400 w-[100%] text-center mx-2 text-black rounded-md cursor-pointer font-bold p-2 hover:bg-orange-300 transition duration-200'>Buy Now</span>
                    </div>
                    <div
                        className="addToCart w-full flex justify-center items-center">
                        <span
                            onClick={() => setCart([props, ...cart])}
                            className='bg-orange-400 w-[100%] text-center mx-2 text-black rounded-md cursor-pointer font-bold p-2 hover:bg-orange-300 transition duration-200'>Add to Cart</span>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}
