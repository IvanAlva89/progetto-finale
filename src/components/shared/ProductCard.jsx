

const ProductCard = ({product}) => {
    return(
        <>
            <div className = "flex flex-col text-center gap-3 hover:bg-white hover:cursor-pointer font-lato block max-w-sm p-6 bg-blue-100 border border-gray-200 rounded-lg shadow">
                <img className="item-center mix-blend-multiply" src={product.cover_image} />
                <p className="font-bold font-lato ">{product.price}€</p>
                <h2 className="mb-2 text-2xl font-black tracking-tight text-gray-900">{product.name}</h2>
                <span className="text-lg font-italic  text-blue-800 text-gray-900">Smarphone performante con un potente processore di ultima generazione</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md px-7 py-3">Aggiungi al carrello</button>
            </div>
        </>
    )
}

export default ProductCard