import { Link } from "react-router-dom"

const SellerNavbar = () => {
    return (
        <>
            <nav className="flex gap-4">
                <div className="py-2 px-4 flex justify-center">
                    <Link to="/">Home</Link>
                </div>
            </nav>
        </>
    )
}

export default SellerNavbar