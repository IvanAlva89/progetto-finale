

const ProductCard = () => {
    return(
        <>
            <div className = "flex flex-col text-center gap-3 productCard hover:bg-white hover:cursor-pointer font-lato block max-w-sm p-6 bg-blue-100 border border-gray-200 rounded-lg shadow">
                <img className="item-center mix-blend-multiply" src="https://images.samsung.com/is/image/samsung/p6pim/it/2401/gallery/it-galaxy-s24-490120-sm-s921blbdeue-thumb-539378151" />
                <h2 className="mb-2 text-2xl font-black tracking-tight text-gray-900">Samsung Galaxy S24</h2>
                <span className="text-lg font-italic  text-blue-800 text-gray-900">Smarphone performante con un potente processore di ultima generazione</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Acquista ora</button>
            </div>
        </>
    )
}

export default ProductCard