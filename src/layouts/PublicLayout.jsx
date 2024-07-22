import { Outlet } from "react-router-dom"
import PublicNavbar from "../components/shared/PublicNavbar"

const PublicLayout = () => {
    return (
        <>
            <PublicNavbar />
            <main className="pt-12">
                <Outlet />
            </main>
        </>
    )
}

export default PublicLayout