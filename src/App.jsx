import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import UserLayout from "./layouts/UserLayout";
import SellerLayout from "./layouts/SellerLayout";
import UserDashboard from "./pages/users/Dashboard";
import SellerDashboard from "./pages/sellers/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product"; // Importa ProductPage

import { useSession } from "./hooks/useSession";

const ProtectedRoute = ({ children, role }) => {
    const [auth] = useSession();

    if (auth.role && auth.role === role) {
        return children;
    }

    return <Navigate to="/login" />;
};

const RedirectToDashboardIfLogged = ({ children }) => {
    const [auth] = useSession();

    if (!auth?.role) {
        return children;
    }

    return <Navigate to={`/${auth.role}s`} />;
};

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="product/:productId" element={<Product />} /> {/* Aggiungi questa linea */}
                    <Route path="login" element={
                        <RedirectToDashboardIfLogged>
                            <Login />
                        </RedirectToDashboardIfLogged>
                    } />
                    <Route path="signup" element={
                        <RedirectToDashboardIfLogged>
                            <Register />
                        </RedirectToDashboardIfLogged>
                    } />
                </Route>
                <Route path="/users" element={
                    <ProtectedRoute role="user">
                        <UserLayout />
                    </ProtectedRoute>
                }>
                    <Route path="" element={<UserDashboard />} />
                </Route>
                <Route path="/sellers" element={
                    <ProtectedRoute role="seller">
                        <SellerLayout />
                    </ProtectedRoute>
                }>
                    <Route path="" element={<SellerDashboard />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
