import ProductCard from "../components/shared/ProductCard"
import '../assets/importCss/style.css'

const Home = () => {
    return (
        <>
            <div className="w-full h-misura-header-picture bg-cover bg-no-repeat bg-header-picture-2">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <button className="absolute left-1/3 bg-violet-200 hover:bg-violet-300 font-lato font-bold rounded-md px-7 py-3">Shop Now</button>
                </div>
            </div>
            <div className="w-full flex flex-row gap-5 justify-center items-center my-5">
                <ProductCard />     
                <ProductCard />     
                <ProductCard />     
            </div>
        </>
    )
}

export default Home