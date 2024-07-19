import { useContext } from "react"
import { SessionContext } from "../providers/SessionProvider"

export const useSession = () => {
    return useContext(SessionContext);
}