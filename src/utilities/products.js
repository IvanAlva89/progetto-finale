import { db } from "../db/lib"

/**
 * Get all products
 * @returns {object[]}
 */
export const getAllProducts = () => {
    return db.select("products", null);
}

/**
 * Get just one product by ID value
 * @param {string} id 
 * @returns {object}
 */
export const getProductById = (id) => {
    return db.select("products", { id })[0];
}

/**
 * Get all products by category ID value
 * @param {string} category_id 
 * @returns {object[]}
 */
export const getProductsByCategoryId = (category_id) => {
    return db.select("products", { category: category_id });
}

