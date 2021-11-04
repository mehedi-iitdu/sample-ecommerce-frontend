import React, { useState } from "react";

//creating context api
const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    return (
        <MainContext.Provider
            value={{
                cartProducts,
                setCartProducts,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

export { MainContext, MainContextProvider };
