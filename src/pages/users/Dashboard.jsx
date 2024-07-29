import { useSession } from "../../hooks/useSession";
import { getOrderItemsByUserId } from "../../utilities/orders";

const UserDashboard = () => {
    const [auth, setAuth] = useSession();
    const orders = getOrderItemsByUserId(auth.data.id);

    const handleLogout = () => {
        setAuth({
            role: null,
            token: null,
            data: null,
        });
    }

    return (
        <>
            <h1 className="mb-6 font-semibold text-black font-lato font-black text-5xl py-20">User Dashboard</h1>
            <div className="flex flex-col max-w-4xl mx-auto">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle border-4 border-[#2196f3]">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-4 font-lato text-3xl font-black">id</th>
                                        <th className="p-4 font-lato text-3xl font-black">date</th>
                                        <th className="p-4 font-lato text-3xl font-black">product</th>
                                        <th className="p-4 font-lato text-3xl font-black">quantity</th>
                                        <th className="p-4 font-lato text-3xl font-black">price</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400 text-center">
                                    {
                                        orders.map(order => (
                                            <tr key={order.id} className="hover:bg-blue-100 hover:text-black">
                                                <td className="p-4 w-4 font-lato text-xl font-black">{order.id}</td>
                                                <td className="p-4 w-4 font-lato text-xl font-black">{order.product.name}</td>
                                                <td className="p-4 w-4 font-lato text-xl font-black">{order.created_at}</td>
                                                <td className="p-4 w-4 font-lato text-xl font-black">{order.qnt}</td>
                                                <td className="p-4 w-4 font-lato text-xl font-black">€{order.qnt * order.product.price}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                                <tfoot className="hover:bg-blue-100">
                                    <tr>
                                        <th className="p-4 font-lato text-3xl font-black"></th>
                                        <th className="p-4 font-lato text-3xl font-black"></th>
                                        <th className="p-4 font-lato text-3xl font-black"></th>
                                        <th className="p-4 font-lato text-3xl font-black">Total</th>
                                        <th className="p-4 font-lato text-3xl font-black">€{orders.reduce((acc, curr) => acc + (curr.qnt * curr.product.price), 0)}</th>
                                    </tr>
                                </tfoot>
                            </table>
                       </div>
                    </div>
                </div>
                <div>
                    <button onClick={handleLogout} className="text-blue-600 hover:underline font-lato text-lg hover:text-xl font-black pt-4 pl-4">Logout</button>
                </div>
            </div>
        </>
    )
}

export default UserDashboard