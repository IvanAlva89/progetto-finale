import { Outlet } from "react-router-dom"
import UserNavbar from "../components/shared/UserNavbar"
import { useCartDrawer } from "../hooks/useCartDrawer";
import CartDrawer from "../components/shared/CartDrawer";

const UserLayout = () => {
    const [isCartOpen] = useCartDrawer();

    return (
        <>
            <UserNavbar />
            <main className="pt-12">
                {
                    isCartOpen && <CartDrawer />
                }
                <Outlet />
            </main>
        </>
    )
}

export default UserLayout