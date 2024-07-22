import { createContext, useEffect, useState } from "react";
import { Memory } from "../utilities/Memory";

export const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        role: null, // null || "user" || "seller"
        token: null, // null || "TOKEN_STRING"
        data: null, // null, || { ...user_info } || { ...seller_info }
        cart_id: null, // null || String
    });

    const handleSetAuth = (value) => {
        if (value?.role) {
            Memory.set("auth", value);
        } else {
            Memory.remove("auth");
        }
        
        setAuth(value)
    }

    useEffect(() => {
        const memory_auth = Memory.get("auth");

        setAuth(memory_auth);
    }, []);

    return (
        <SessionContext.Provider value={[auth, handleSetAuth]}>
            {children}
        </SessionContext.Provider>
    )
}