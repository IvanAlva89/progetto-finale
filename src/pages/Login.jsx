import { useState } from "react";
import { findSellerByEmailAndPassword, findUserByEmailAndPassword } from "../utilities/auth";
import { useSession } from "../hooks/useSession";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

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
            });

            navigate("/users");

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
            <select value={role} onChange={handleChangeRole}>
                <option value="user">User</option>
                <option value="seller">Seller</option>
            </select>
            <form onSubmit={handleLogin}>
                <div>
                    <input type="email" name="email" value={form.email} onInput={handleInput} />
                </div>
                <div>
                    <input type="password" name="password" value={form.password} onInput={handleInput} />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}

export default Login