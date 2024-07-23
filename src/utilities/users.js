import { db } from "../db/lib"

/**
 * Get one user by id value
 * @param {string} user_id 
 * @returns {object|Error}
 */
export const getUserById = (user_id) => {
    return db.select("users", { id: user_id })[0];
}

/**
 * Create new user
 * @param {string} email 
 * @param {string} password 
 */
export const createNewUser = ({ email, password, first_name, last_name }) => {
    const users = db.select("users", { email });

    if (users.length != 0) {
        return {
            success: false,
            message: "Utente già registrato"
        };
    }

    const cart_id = new Date().getTime().toString();

    const user = db.create("users", { email, password, first_name, last_name, cart_id });

    return user;
} 