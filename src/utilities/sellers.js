import { db } from "../db/lib"

/**
 * Get one seller by id value
 * @param {string} seller_id 
 * @returns {object|Error}
 */
export const getSellerById = (seller_id) => {
    return db.select("sellers", { id: seller_id })[0];
}

/**
 * Create new seller
 * @param {string} email 
 * @param {string} password 
 */
export const createNewSeller = ({ email, password, first_name, last_name, name }) => {
    const sellers = db.select("sellers", { email });

    if (sellers.length != 0) {
        return {
            success: false,
            message: "Venditore già registrato"
        };
    }

    const seller = db.create("sellers", { email, password, first_name, last_name, name });

    return seller;
} 