import { createContext, useEffect, useState } from "react";
import { useSession } from "../hooks/useSession";
import { getUserCartItems, replaceAllCartItem } from "../utilities/carts";
import { getProductById } from "../utilities/products";
import { getUserById } from "../utilities/users";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [auth] = useSession();
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const cart_item = {
            ...item,
            product: getProductById(item.product),
            user: getUserById(item.user)
        }

        const i = cart.findIndex(({ product }) => {
            return product.id == cart_item.product.id
        });

        if(i != -1) {
            setCart((cart) => {
                cart[i].qnt += item.qnt;
                return cart;
            });
        } else {
            setCart([...cart, cart_item]);
        }
    }

    const removeFromCart = (item_id) => {
        const i = cart.findIndex((c) => c.id == item_id);

        if (i !== -1) {
            const t_cart = [...cart];
            t_cart.splice(i, 1);
            setCart(t_cart);
        }
    }

    const updateQnt = (item_id, mode) => {
        const i = cart.findIndex((c) => c.id == item_id);

        if (i !== -1) {
            setCart(() => {
                const t = [...cart];
                t[i].qnt += mode == "A" ? 1 : -1;
                return t;
            });
        }
    }
    
    useEffect(() => {
        if (auth?.role) {
            const cart_items = getUserCartItems(auth.data.id);
            setCart(cart_items);
        }
    }, [auth]);

    useEffect(() => {
        if (cart.length > 0) {
            replaceAllCartItem(cart.map(e => ({ ...e, product: e.product.id, user: e.user.id })));
        }
    }, [cart])

    return (
        <CartContext.Provider value={[cart, addToCart, removeFromCart, updateQnt]}>
            {children}
        </CartContext.Provider>
    )
}