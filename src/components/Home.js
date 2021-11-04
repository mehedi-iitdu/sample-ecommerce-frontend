import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Product'

export default function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products').then((response) => {
            setProducts(response.data.data);
        })
    }, [])

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product, index) => {
                        return (
                            <div className="group" key={index}>
                                <Product product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
