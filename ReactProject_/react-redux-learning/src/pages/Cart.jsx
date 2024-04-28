import React, { Fragment, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { CartCard } from '../Components';

export const Cart = () => {

    // this is how you can access the state data
    const cartData = useSelector((state) => state.cart);

    return (
        <Fragment>
            <Suspense fallback={"loading..."}>
                <section>
                    <div className="cartProductContainer">
                        <div className="cartCard px-6">
                            {cartData.map((singleCartProductObject, index) => (
                                <Fragment key={index}>
                                    <CartCard {...singleCartProductObject} />
                                </Fragment>)
                            )}
                        </div>
                    </div>
                </section>
            </Suspense>
        </Fragment>
    )
}
