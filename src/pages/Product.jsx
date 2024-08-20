import { useState } from "react";
import { useParams } from "react-router-dom"
import { getProductById } from "../utilities/products";
import { addItemToCart } from "../utilities/carts";
import { useCart } from "../hooks/useCart";
import { useSession } from "../hooks/useSession";
import { toast } from "react-toastify";

const ProductPage = () => {
    const params = useParams();
    const [_, setCart] = useCart();
    const [auth] = useSession();

    const [product] = useState(getProductById(params.productId));

    const addToCart = () => {
        const cart_item = addItemToCart({
            cart: auth.cart_id,
            product: product.id,
            user: auth.data.id,
            qnt: 1,
        }, { isOnlyGenerator: true });

        setCart(cart_item);
        toast.success(`${product.name} aggiunto al carrello`);
    }

    return (
        <>
         <div className="bg-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div style={{backgroundImage: `url('${product.cover_image}')`, backgroundPosition: 'center center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className={`h-[460px] rounded-lg mb-4`}>
                            {/* <img className="w-full h-full object-cover" src={product.cover_image} alt="Product Image" /> */}
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-full px-2">
                                <button onClick={addToCart} className="w-full bg-blue-100  text-gray-800 hover:text-white py-2 px-4 rounded-full font-bold hover:bg-[#2196F3] ">Aggiungi al carrello</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                        <p className="text-sm mb-4">
                            {product.subtitle}
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold">Price: </span>
                                <span>€{product.price}</span>
                            </div>
                            <div>
                                <span className="font-bold">Availability: </span>
                                <span>In Stock</span>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold">Product Description: </span>
                            <p className="text-sm mt-2">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductPage