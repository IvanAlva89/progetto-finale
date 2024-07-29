import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../utilities/products";
import { getAllCategories } from "../utilities/categories";
import { useRef } from "react";

const Home = () => {
    const products = getAllProducts();
    const categories = useRef(getAllCategories());

    return (
        <>
            <div className="flex flex-col justify-center relative w-full h-misura-header-picture bg-cover bg-no-repeat bg-header-picture-2">
                <div className="flex flex-col gap-8 absolute left-64 top-12">
                    <h1 className="px-4 text-6xl text-center text-white font-lato font-extrabold leading-tight">
                        Il futuro della tecnologia a<br />
                        portata di tutti
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <Link to="/search" className="bg-violet-200 hover:bg-violet-300 font-lato font-bold rounded-md px-7 py-3 ">
                            Vai alla Ricerca
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row gap-5 justify-center items-center my-5 container mx-auto px-4">
                <section className=" space-y-6">
                    <div className="gap-3 flex justify-between p-6 rounded ">
                        <div className="flex-1 bg-gray-200 p-4 rounded flex flex-col items-center">
                            <img
                                src="src/assets/prodotti/fast-delivery.png"
                                alt=""
                                className="w-12 h-12"
                            />
                            <h3>Fast Delivery</h3>
                            <p>Quick and reliable delivery service</p>
                        </div>
                        <div className="flex-1 bg-gray-200 p-4 rounded flex flex-col items-center">
                            <img
                                src="src/assets/prodotti/exclusive.png"
                                alt=""
                                className="w-12 h-12"
                            />
                            <h3>Exclusive Offers</h3>
                            <p>Special deals and promotions</p>
                        </div>
                        <div className="flex-1 bg-gray-200 p-4 rounded flex flex-col items-center">
                            <img
                                src="src/assets/prodotti/rebuild.png"
                                alt=""
                                className="w-12 h-12"
                            />
                            <h3>Rebuild</h3>
                            <p>Top-notch rebuilding services</p>
                        </div>
                        <div className="flex-1 bg-gray-200 p-4 rounded flex flex-col items-center">
                            <img
                                src="src/assets/prodotti/bot.png"
                                alt=""
                                className="w-12 h-12"
                            />
                            <h3>Support Bot</h3>
                            <p>24/7 customer support bot</p>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-col ">
                        <div>
                        <h3 className="flex font-lato justify-center text-5xl font-black">Categories: </h3>
                        <br />
                        </div>
                        <div className="flex gap-64 font-lato justify-center py-12 text-xl font-black ">
                        {
                            categories.current.map(c => (
                                <Link key={c.id} to={`/search?c=${c.name}`} className="hover:bg-blue-100 hover:rounded-full text-center w-28">{c.name}</Link>
                            ))
                        }
                        </div>
                    </div>
                    <div className="gap-3 flex p-6 rounded justify-center flex-wrap">
                        {products.map((product) => {
                            return (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            );
                        })}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
