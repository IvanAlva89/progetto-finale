import { Link } from "react-router-dom"
import { useSession } from "../../hooks/useSession"

const PublicNavbar = () => {
    const [auth, setAuth] = useSession();

    const handleLogout = (e) => {
        e.preventDefault();

        setAuth({ 
            role: null,
            token: null,
            data: null
        });
    }

    return (
        <>
            <nav className="flex gap-4">
                <div className="py-2 px-4 flex justify-center">
                    <Link to="/">Home</Link>
                </div>
                <div className="py-2 px-4 flex justify-center">
                    <Link to="/search">Search</Link>
                </div>
                <div className="py-2 px-4 flex justify-center">
                    <Link to="/cart">Cart</Link>
                </div>
                {
                    auth?.role == "user" && (
                        <div className="py-2 px-4 flex justify-center">
                            <Link to="/users">User Dash</Link>
                        </div>
                    )
                }
                {
                    auth?.role == "seller" && (
                        <div className="py-2 px-4 flex justify-center">
                            <Link to="/sellers">Seller Dash</Link>
                        </div>
                    )
                }
                {
                    auth?.role == null ? (
                        <>
                            <div className="py-2 px-4 flex justify-center">
                                <Link to="/login">Login</Link>
                            </div>
                            <div className="py-2 px-4 flex justify-center">
                                <Link to="/signup">Signup</Link>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <div className="py-2 px-4 flex justify-center gap-2 ">
                                <span>Welcome</span> <Link to={`/${auth.role}s`}>{auth.data.first_name}</Link>
                            </div>
                            <div className="py-2 px-4 flex justify-center">
                                <a href="" onClick={handleLogout}>Logout</a>
                            </div>
                        </>
                    )
                }
            </nav>
        </>
    )
}

export default PublicNavbar