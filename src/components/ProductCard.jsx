import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart"
import { useSession } from "../hooks/useSession";
import { addItemToCart } from "../utilities/carts";


const ProductCard = ({ product }) => {
    const [auth] = useSession();
    const [cart, setCart] = useCart();

    const addToCart = (product) => {
        const cart_item = addItemToCart({
            cart: auth.cart_id,
            product: product.id,
            user: auth.data.id,
            qnt: 1,
        });
        
        setCart(cart_item);
    }

    return(
        <>
            <div className = "flex flex-col text-center gap-3 hover:bg-white hover:cursor-pointer font-lato max-w-sm p-6 bg-blue-100 border border-gray-200 rounded-lg shadow">
                <img className="item-center mix-blend-multiply" src={product.cover_image} />
                <p className="font-bold font-lato ">{product.price}€</p>
                <h2 className="mb-2 text-2xl font-black tracking-tight text-gray-900">{product.name}</h2>
                <span className="text-lg font-italic text-gray-900">Smarphone performante con un potente processore di ultima generazione</span>
                {
                    auth?.role == "user" ? (
                        <button onClick={() => addToCart(product)} className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-7 py-3">Aggiungi al carrello</button>
                    ) : (
                        <Link to="/login?r=home" className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-7 py-3">Accedi per aggiungere al carrello</Link>
                    )
                }
            </div>
        </>
    )
}

export default ProductCard