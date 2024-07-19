import { useSession } from "../../hooks/useSession"

const SellerDashboard = () => {
    const [auth, setAuth] = useSession();

    const handleLogout = () => {
        setAuth({
            role: null,
            token: null,
            data: null,
        });
    }

    return (
        <>
            <h1>Seller Dashboard</h1>
            <div>
                <pre>
                    {JSON.stringify(auth, null, 2)}
                </pre>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

export default SellerDashboard