import { useEffect, useRef, useState } from "react";
import { useSession } from "../../hooks/useSession";
import { getOrderItemsByUserId } from "../../utilities/orders";
import { Memory } from "../../utilities/Memory";
import { Link, useLocation } from "react-router-dom";

const UserDashboard = () => {
    const location = useLocation();
    const [auth] = useSession();
    const [orders, setOrders] = useState(Memory.get("orders"));

    useEffect(() => {
        if (!orders) {
            setOrders(getOrderItemsByUserId(auth.data.id))
        }
    }, [auth])

    useEffect(() => {
        if (orders && orders.length > 0) Memory.set("orders", orders)
    }, [orders])

    return (
        <>
            <div className="flex flex-col items-center mx-auto">
                <div className="container flex" style={{ height: "calc(100vh - 3rem)" }}>
                    <div className="w-[250px] flex flex-col gap-4 border-r border-l h-full py-4">
                        <div>
                            <h4 className="text-center text-xl font-bold">User Panel</h4>
                        </div>
                        <div className="w-full flex flex-col">
                            <Link to="/users" className={`p-3 cursor-pointer hover:bg-gray-100 ${location.pathname == "/users" ? "bg-gray-50 " : ""}transition-all w-full flex items-center gap-2`}>
                                <svg className="w-[18px] fill-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">{/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6l0 167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5l0-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128l2.2 0z"/></svg>
                                <span>Orders</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-grow p-12 h-full overflow-y-auto">
                        <div className="py-6">
                            <h3 className="text-3xl font-bold mb-2">Orders</h3>
                            <p>All user orders</p>
                        </div>
                        <div className="inline-block min-w-full align-middle border-4 border-[#2196f3] shadow-md rounded-md">
                            <div className="overflow-hidden shadow-md">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="p-4 font-lato text-md font-black">id</th>
                                            <th className="p-4 font-lato text-md font-black">product</th>
                                            <th className="p-4 font-lato text-md font-black">date</th>
                                            <th className="p-4 font-lato text-md font-black">quantity</th>
                                            <th className="p-4 font-lato text-md font-black">price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-400 text-center">
                                        {
                                            orders && orders.map(order => (
                                                <tr key={order.id} className="hover:bg-blue-100 hover:text-black">
                                                    <td className="p-4 w-4 font-lato text-md font-black">{order.id}</td>
                                                    <td className="p-4 w-4 font-lato text-md font-black">{order.product.name}</td>
                                                    <td className="p-4 w-4 font-lato text-md font-black">{order.created_at}</td>
                                                    <td className="p-4 w-4 font-lato text-md font-black">{order.qnt}</td>
                                                    <td className="p-4 w-4 font-lato text-md font-black">€{order.qnt * order.product.price}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                    <tfoot className="hover:bg-blue-100">
                                        <tr>
                                            <th className="p-4 font-lato text-md font-black"></th>
                                            <th className="p-4 font-lato text-md font-black"></th>
                                            <th className="p-4 font-lato text-md font-black"></th>
                                            <th className="p-4 font-lato text-md font-black">Total</th>
                                            <th className="p-4 font-lato text-md font-black">€{orders && orders.reduce((acc, curr) => acc + (curr.qnt * curr.product.price), 0)}</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard