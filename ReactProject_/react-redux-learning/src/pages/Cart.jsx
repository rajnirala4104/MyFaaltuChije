import React, { Fragment, Suspense } from 'react'

export const Cart = () => {

    return (
        <Fragment>
            <Suspense fallback={"loading..."}>
                <section>
                    <div className="cartProductContainer">
                        <div className="cartCard px-6">

                        </div>
                    </div>
                </section>
            </Suspense>
        </Fragment>
    )
}
