import { useState } from "react";
import { findSellerByEmailAndPassword, findUserByEmailAndPassword } from "../utilities/auth";
import { useSession } from "../hooks/useSession";
import { useNavigate, useSearchParams } from "react-router-dom";

const R_MAP = {
    "home": "/",
};

const Login = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [_, setAuth] = useSession();
    const [role, setRole] = useState("user");
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(false);

    const _formatRoleNameOnError = () => {
        return `${role.toString().charAt(0).toUpperCase()}${role.split("").splice(1, role.length).join("")}`;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (error) setError(false);

        try {
            const user = role == "user" ? findUserByEmailAndPassword(form.email, form.password) : findSellerByEmailAndPassword(form.email, form.password);

            if (!user) {
                setError(`${_formatRoleNameOnError()} not found`);
                return;
            }

            setAuth({
                role,
                token: `${role.toUpperCase()}_JWT_TOKEN`,
                data: user,
                cart_id: user.cart_id,
            });

            navigate(searchParams.get("r") ? R_MAP[searchParams.get("r")] : "/users");

        } catch(err) {
            setError(`${_formatRoleNameOnError()} not found`);
        }
    }

    const handleInput = ({ target: { name, value } }) => {
        setForm((f) => ({ ...f, [name]: value }));
    }

    const handleChangeRole = ({ target: { value } }) => {
        setRole(value);
    }

    return (
        <>
            {
                error && (
                    <div className="bg-red-100 text-red-800 p-4 rounded flex justify-between w-1/3">
                        <p>{error}</p>
                        <button onClick={() => setError(false)}>Close</button>
                    </div>
                )
            }
            <div className="mx-auto px-4 flex flex-col place-items-center mt-56">
                <select className="font-lato w-64 font-extrabold bg-[#1e90ff] rounded text-white right-2/4" value={role} onChange={handleChangeRole}>
                    <option className="text-[#1e90ff] bg-white" value="seller">Seller</option>
                    <option className="text-[#1e90ff] bg-white" value="user">User</option>
                </select>
                <form className="flex flex-col w-64 right-2/4 h-64 place-items-center justify-center gap-4 rounded font-lato font-extrabold bg-[#1e90ff] rounded border-gray-200 border-2" onSubmit={handleLogin}>
                    <div>
                        <input className="px-2" type="email" name="email" value={form.email} onInput={handleInput} placeholder="E-mail" />
                    </div>
                    <div>
                        <input className="px-2" type="password" name="password" value={form.password} onInput={handleInput} placeholder="Password" />
                    </div>
                    <div className="border-gray-200 border-2 rounded text-gray-200">
                        <button type="submit" className="px-5 py-2 hover:border-3 hover:text-lg hover:text-[#1e90ff] hover:bg-white text-white">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login