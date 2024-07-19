import { Outlet } from "react-router-dom"
import SellerNavbar from "../components/shared/SellerNavbar"

const SellerLayout = () => {
    return (
        <>
            <SellerNavbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default SellerLayout