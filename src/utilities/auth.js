import { db } from "../db/lib"

/**
 * Check email and password for user login
 * @param {string} email 
 * @param {string} password 
 * @returns {object|Error} User info object
 */
export const findUserByEmailAndPassword = (email, password) => {
    return db.select("users", { email, password })[0];
}

/**
 * Check email and password for seller login
 * @param {string} email 
 * @param {string} password 
 * @returns {object|Error} User info object
 */
export const findSellerByEmailAndPassword = (email, password) => {
    return db.select("sellers", { email, password })[0];
}