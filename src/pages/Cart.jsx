import { useCart } from "../hooks/useCart";

const Cart = () => {
    const [cart] = useCart();

    return (
        <div>
            <pre>
                {JSON.stringify(cart, null, 2)}
            </pre>
        </div>
    )
}

export default Cart