import React, { Fragment } from 'react'

export const CartCard = (props) => {

    return (
        <Fragment>
            <div className='w-full border border-black rounded-md flex flex-col mx-4 my-4'>
                <div className='border border-red-500 flex justify-between items-center'>
                    <div className=''>
                        <div className="image w-[20%]">
                            <img src={props.image} alt="" />
                        </div>
                    </div>
                    <div className="cartCardContent">
                        <div className="title">
                            <span>{props.title}</span>
                        </div>
                        <div className="pricee">
                            <span>{props.price}</span>
                        </div>
                    </div>
                </div>
                <div className="incrementAndDecrementBtn border border-black w-[10%] bg-gray-200 flex justify-center items-center">
                    <div className='flex w-full justify-evenly items-center text-2xl my-2'>
                        <button className='bg-orange-500 rounded-full w-6 h-6 flex justify-center items-center text-center cursor-pointer'>-</button>
                        <span>1</span>
                        <button className='bg-orange-500 rounded-full w-6 h-6 flex  justify-center items-center text-center cursor-pointer'>+</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
