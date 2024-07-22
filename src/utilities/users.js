import { db } from "../db/lib"

/**
 * Get one user by id value
 * @param {string} user_id 
 * @returns {object|Error}
 */
export const getUserById = (user_id) => {
    return db.select("users", { id: user_id })[0];
}