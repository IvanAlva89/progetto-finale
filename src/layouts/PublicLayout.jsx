import { Outlet } from "react-router-dom"
import PublicNavbar from "../components/shared/PublicNavbar"
import CartDrawer from "../components/shared/CartDrawer"
import { useCartDrawer } from "../hooks/useCartDrawer";

const PublicLayout = () => {
    const [isCartOpen] = useCartDrawer();

    return (
        <>
            <PublicNavbar />
            {
                isCartOpen && <CartDrawer />
            }
            <main className="pt-12">
                <Outlet />
            </main>
        </>
    )
}

export default PublicLayout