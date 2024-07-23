import { useContext } from "react"
import { CartDrawerContext } from "../providers/CartDrawerProvider"

export const useCartDrawer = () => {
    return useContext(CartDrawerContext);
}