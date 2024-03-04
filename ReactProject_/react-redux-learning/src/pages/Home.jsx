import React, { useEffect, useState } from 'react'
import { getAllTheProducts } from '../api/services/products'
import { Card } from '../Components'

export const Home = () => {

    const [products, setProducts] = useState([])

    const gettingProducts = async () => {
        const { data } = await getAllTheProducts()
        setProducts(data)
    }

    useEffect(() => {
        gettingProducts()
        return () => { }
    }, [])

    return (
        <div className="productContainer h-full flex flex-wrap justify-evenly items-center w-[100%]">
            {products.map(singleProductObject => <Card {...singleProductObject} key={singleProductObject.id} />)}
        </div>
    )
}
