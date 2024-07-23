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
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Accedi al tuo account</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label for="role" className="block text-sm font-medium leading-6 text-gray-900">Accedi come</label>
                            <select id="role" value={role} onChange={handleChangeRole} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
                                <option value="">Accedi come...</option>
                                <option value="user">User</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>
                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Indirizzo Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" value={form.email} onInput={handleInput} type="email" autocomplete="email" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" value={form.password} onInput={handleInput} type="password" autocomplete="current-password" required className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Accedi</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500 flex gap-2 items-center">
                        Non hai un account?
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Registrati</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login