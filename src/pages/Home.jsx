import ProductCard from "../components/shared/ProductCard";
import "../assets/importCss/style.css";

const Home = () => {
  return (
    <>
      <div className="w-full h-misura-header-picture bg-cover bg-no-repeat bg-header-picture-2">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <button className="absolute left-1/3 bg-violet-200 hover:bg-violet-300 font-lato font-bold rounded-md px-7 py-3">
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
