import { db } from "../db/lib"

/**
 * Get all orders
 * @returns {object[]}
 */
export const getAllOrderItems = () => {
    return db.select("order_items", null);
}

/**
 * Get just one order item by ID value
 * @param {string} id 
 * @returns {object}
 */
export const getOrderItemsById = (id) => {
    return db.select("order_items", { id })[0];
}

/**
 * Get all order items by user ID value
 * @param {string} user_id 
 * @returns {object[]}
 */
export const getOrderItemsByUserId = (user_id) => {
    return db.select("order_items", { user: user_id });
}

