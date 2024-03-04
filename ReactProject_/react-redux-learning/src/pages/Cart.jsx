import React, { Fragment, Suspense, useContext } from 'react'
import { CartCard } from '../Components'
import { CartContaxt } from '../contaxts'

export const Cart = () => {

    const { cart } = useContext(CartContaxt)

    return (
        <Fragment>
            <Suspense fallback={"loading..."}>
                <section>
                    <div className="cartProductContainer">
                        <div className="cartCard px-6">
                            {cart.map(singleCardProductObject => <CartCard {...singleCardProductObject} />)}
                        </div>
                    </div>
                </section>
            </Suspense>
        </Fragment>
    )
}
