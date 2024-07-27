import { useCart } from "../../hooks/useCart";
import { useCartDrawer } from "../../hooks/useCartDrawer";
import { Link } from "react-router-dom"; // Importa Link

const CartDrawer = () => {
    const [cart, __, removeItem, updateItemQnt] = useCart();
    const [_, setIsCartOpen] = useCartDrawer();

    const removeFromCart = (id) => {
        removeItem(id);
    }

    const changeQnt = (id, type) => {
        updateItemQnt(id, type);
    } 

    return (
        <div className="relative z-50 overflow-hidden">
            <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div className="pointer-events-auto w-screen max-w-md">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h2
                                            className="text-lg font-medium text-gray-900"
                                            id="slide-over-title"
                                        >
                                            Shopping cart
                                        </h2>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button 
                                                onClick={() => setIsCartOpen(false)}
                                                type="button"
                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                            >
                                                <span className="absolute -inset-0.5" />
                                                <span className="sr-only">
                                                    Close panel
                                                </span>
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {cart.map((item) => (
                                        <div key={item.id} className="mt-8">
                                            <div className="flow-root">
                                                <ul
                                                    role="list"
                                                    className="-my-6 divide-y divide-gray-200"
                                                >
                                                    <li className="flex py-6">
                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <img
                                                                src={
                                                                    item.product
                                                                        .cover_image
                                                                }
                                                                alt={
                                                                    item.product
                                                                        .name
                                                                }
                                                                className="h-full w-full object-cover object-center"
                                                            />
                                                        </div>

                                                        <div className="ml-4 flex flex-1 flex-col">
                                                            <div>
                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                    <h3>
                                                                        <Link to={`/product/${item.id}`}> {/* Collega alla ProductPage */}
                                                                            {
                                                                                item
                                                                                    .product
                                                                                    .name
                                                                            }
                                                                        </Link>
                                                                    </h3>
                                                                    <p className="ml-4">
                                                                        €{" "}
                                                                        {
                                                                            item
                                                                                .product
                                                                                .price
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                <p className="text-gray-500">
                                                                    Qty{" "}
                                                                    <span className="flex ml-2 gap-2">
                                                                        <button onClick={() => changeQnt(item.id, "R")}>-</button>
                                                                        {item.qnt}
                                                                        <button onClick={() => changeQnt(item.id, "A")}>+</button>
                                                                    </span>
                                                                </p>

                                                                <div className="flex">
                                                                    <button
                                                                        onClick={() => removeFromCart(item.id)}
                                                                        type="button"
                                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                    >
                                                                        Rimuovi
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotale</p>
                                        <p>
                                            €{" "}
                                            {cart.reduce(
                                                (a, c) =>
                                                    a + c.product.price * c.qnt,
                                                0
                                            )}
                                        </p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">
                                        Spedizione e tasse verranno calcolate al
                                        checkout.
                                    </p>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                        >
                                            Checkout
                                        </a>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            o
                                            <button
                                                onClick={() => setIsCartOpen(false)}
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Continua lo Shopping
                                                <span aria-hidden="true">
                                                    &rarr;
                                                </span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
