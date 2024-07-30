import { Link, Outlet, useLocation } from "react-router-dom"
import UserNavbar from "../components/shared/UserNavbar"
import { useCartDrawer } from "../hooks/useCartDrawer";
import CartDrawer from "../components/shared/CartDrawer";

const UserLayout = () => {
    const location = useLocation();
    const [isCartOpen] = useCartDrawer();

    return (
        <>
            <UserNavbar />
            <main className="pt-12">
                {
                    isCartOpen && <CartDrawer />
                }
                <div className="flex flex-col items-center mx-auto">
                    <div className="container flex" style={{ height: "calc(100vh - 3rem)" }}>
                        <div className="w-[250px] flex flex-col gap-4 border-r border-l h-full py-4">
                            <div>
                                <h4 className="text-center text-xl font-bold">User Panel</h4>
                            </div>
                            <div className="w-full flex flex-col">
                                <Link to="/users" className={`p-3 cursor-pointer hover:bg-gray-100 ${location.pathname == "/users" ? "bg-gray-50 " : ""}transition-all w-full flex items-center gap-2`}>
                                    <svg className="w-[1rem] fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">{/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6l0 167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5l0-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128l2.2 0z"/></svg>
                                    <span>Orders</span>
                                </Link>
                                <Link to="/users/settings" className={`p-3 cursor-pointer hover:bg-gray-100 ${location.pathname == "/users/settings" ? "bg-gray-50 " : ""}transition-all w-full flex items-center gap-2`}>
                                    <svg className="w-[1rem] fill-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/*<!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}<path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
                                    <span>Settings</span>
                                </Link>
                                <Link to="/users/sample" className={`p-3 cursor-pointer hover:bg-gray-100 ${location.pathname == "/users/sample" ? "bg-gray-50 " : ""}transition-all w-full flex items-center gap-2`}>
                                    <svg className="w-[1rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">{/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L28.1 342.6C10.1 360.6 0 385 0 410.5L0 416c0 53 43 96 96 96l5.5 0c25.5 0 49.9-10.1 67.9-28.1L448 205.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32-96-96-32-32zM205.3 256L352 109.3 402.7 160l-96 96-101.5 0z"/></svg>
                                    <span>Sample</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-grow p-12 h-full overflow-y-auto">
                            <Outlet />        
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default UserLayout