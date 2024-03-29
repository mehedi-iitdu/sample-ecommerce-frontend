import React, { useContext } from 'react'
import { MainContext } from '../contexts/MainContext';

export default function Product({ product }) {

    const { myState, dispatch}  = useContext(MainContext);

    function handleCartButtonClick(product) {
        dispatch({type: 'ADD_TO_CART', payload: product})
        //axios.post()
    }

    function handleRemoveCartButtonClick(product) {
        dispatch({type: 'REMOVE_FROM_CART', payload: product})
    }

    return (
        <div>
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src={product.image} alt={product.name} className="w-full h-full object-center object-cover group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
                {product.name}
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.price}
            </p>
            {myState.cartProducts.find((item) => item.productID === product.id) ?
                <button className="mt-4 w-full px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-red-800 text-white border-2 border-red-900 focus:outline-none"
                    onClick={() => {
                        handleRemoveCartButtonClick(product)
                    }}>
                    Remove From Cart
                </button> 
            :
                <button className="mt-4 w-full px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-gray-800 text-white border-2 border-gray-900 focus:outline-none"
                    onClick={() => {
                        handleCartButtonClick(product)
                    }}>
                    Add to Cart
                </button>
            }
        </div>
    )
}
