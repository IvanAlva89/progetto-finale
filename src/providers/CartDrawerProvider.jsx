import { createContext, useState } from "react";

export const CartDrawerContext = createContext(null);

export const CartDrawerProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <CartDrawerContext.Provider value={[isCartOpen, setIsCartOpen]}>
            {children}
        </CartDrawerContext.Provider>
    )
}