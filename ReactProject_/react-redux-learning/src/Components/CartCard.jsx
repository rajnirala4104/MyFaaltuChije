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
                <div className="incrementAndDecrementBtn">
                    <div>
                        <span>-</span>
                        <span>+</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
