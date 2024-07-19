import { db } from "../db/lib"

/**
 * Get all item from user cart
 * @param {string} user_id 
 * @returns {object[]}
 */
export const getUserCartItems = (user_id) => {
    return db.select("cart_items", { user: user_id });
}

/**
 * Update cart item quantity
 * @param {string} cart_item_id 
 * @param {number} qnt 
 * @returns {object}
 */
export const updateCartItemQntById = (cart_item_id, qnt) => {
    return db.updateById("cart_items", cart_item_id, { qnt });
}

/**
 * Delete item from user cart
 * @param {string} cart_item_id 
 * @returns {object}
 */
export const deleteCartItem = (cart_item_id) => {
    return db.deleteById("cart_items", { id: cart_item_id });
}