import { db } from "../db/lib"

/**
 * Get all categories
 * @returns {object[]}
 */
export const getAllCategories = () => {
    return db.select("categories", null);
}