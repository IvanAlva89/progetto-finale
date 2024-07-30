import { useEffect, useState } from "react";
import { useSession } from "../../hooks/useSession";
import { getOrderItemsByUserId } from "../../utilities/orders";
import { Memory } from "../../utilities/Memory";

const UserDashboard = () => {
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
        </>
    )
}

export default UserDashboard