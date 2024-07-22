import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../utilities/products";

const Home = () => {
  const products = getAllProducts();
  return (
    <>
      <div className=" relative w-full h-misura-header-picture bg-cover bg-no-repeat bg-header-picture-2">
        <h1 className="mx-auto px-4 text-6xl text-center text-white font-lato font-extrabold absolute top-1/4 right-2/4 leading-tight">Il futuro della tecnologia a<br />portata di tutti</h1>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <button className="absolute right-[70%] bottom-1/4 bg-violet-200 hover:bg-violet-300 font-lato font-bold rounded-md px-7 py-3">
            Shop Now
          </button>
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
          <div className="gap-3 flex p-6 rounded justify-center">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
