import React, { useReducer } from "react";

//creating context api
const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
    const initialState = {
        cartProducts: []
    }

    const [myState, dispatch] = useReducer(myContextReducer, initialState)

    function myContextReducer(state, action) {
        switch (action.type) {
            case 'ADD_TO_CART':
                if(state.cartProducts.find((item) => item.productID === action.payload.id)){
                    return {
                        ...state, cartProducts: state.cartProducts.map((item) => item.productID === action.payload.id ? {
                            ...item, quantity: item.quantity++
                        }: item)
                    }
                }
                else{
                    return {
                        ...state, cartProducts: [...state.cartProducts, {
                            productID: action.payload.id,
                            quantity: 1,
                            price: action.payload.price
                        }
                        ]
                    }
                }
            default:
                break;
        }
    }

    return (
        <MainContext.Provider
            value={{
                myState,
                dispatch,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

export { MainContext, MainContextProvider };
