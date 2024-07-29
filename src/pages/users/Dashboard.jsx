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
            <h1 >User Dashboard</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>date</th>
                            <th>product</th>
                            <th>quantity</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.created_at}</td>
                                    <td>{order.product.name}</td>
                                    <td>{order.qnt}</td>
                                    <td>€{order.qnt * order.product.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Total</th>
                            <th>€{orders.reduce((acc, curr) => acc + (curr.qnt * curr.product.price), 0)}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

export default UserDashboard