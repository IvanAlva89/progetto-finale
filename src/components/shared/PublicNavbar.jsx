import { Link } from "react-router-dom"
import { useSession } from "../../hooks/useSession"
import CartButton from "../CartButton";
import { Memory } from "../../utilities/Memory";

const PublicNavbar = () => {
    const [auth, setAuth] = useSession();

    const handleLogout = (e) => {
        e.preventDefault();

        Memory.remove("orders");

        setAuth({ 
            role: null,
            token: null,
            data: null
        });
    }

    return (
        <>
            <nav className="fixed w-full bg-white flex justify-center items-center h-12 z-40">
                <div className="flex w-full max-w-[1480px] justify-between">
                    <div className="flex gap-4 items-center">
                        <div className="py-2 px-4 flex justify-center">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="py-2 px-4 flex justify-center">
                            <Link to="/search">Search</Link>
                        </div>
                    </div>
                    <div className="py-2 px-4 flex justify-center items-center">
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
                                    <div className="py-2 px-4 flex justify-center">
                                        <Link className="flex gap-2 items-center" to={`/${auth.role}s`}>
                                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/* !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}<path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>
                                            {auth.data.first_name}
                                        </Link>
                                    </div>
                                    <div className="py-2 px-4 flex justify-center">
                                        <a href="" onClick={handleLogout}>Logout</a>
                                    </div>
                                    {
                                        auth?.role == "user" && (
                                            <CartButton />
                                        )
                                    }
                                </>
                            )
                        }
                    </div>
                </div>
                
            </nav>
        </>
    )
}

export default PublicNavbar