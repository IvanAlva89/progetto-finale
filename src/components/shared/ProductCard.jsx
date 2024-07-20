

const ProductCard = () => {
    return(
        <>
            <div className = "productCard hover:bg-white hover:cursor-pointer block max-w-sm p-6 bg-blue-100 border border-gray-200 rounded-lg shadow">
                <img className="mix-blend-multiply" src="https://preview.colorlib.com/theme/onetech/images/featured_6.png" />
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Samsung Galaxy S24</h2>
                <span className="text-lg font-italic  text-blue-800 text-gray-900">Smarphone performante con un potente processore di ultima generazione</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Acquista ora</button>
            </div>
        </>
    )
}

export default ProductCard