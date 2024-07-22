import data, { relations } from "./data";

// Select
const select = (from, where = null) => {
    const collection = data[from];

    const results = where == null ? collection : collection.filter(item => {
        const tests = [];
        Object.entries(where).forEach(([key, value]) => {
            tests.push(item[key] == value);
        });
        
        return tests.every(e => e);
    });

    if (!relations[from]) return results;

    return [...results].map(item => {
        const _relations = relations[from];

        _relations.forEach(({ label, collection, primary_key }) => {
            const primary_value = item[label];
            const value = data[collection]?.find(e => e[primary_key] == primary_value);

            if (value) {
                item[label] = value;
            }
        });

        return item;
    });
}

// Create
const create = (to, value) => {
    const item = {
        ...value,
        id: new Date().getTime().toString()
    };

    data[to].push(item);

    return item;
}

// Update
const updateById = (from, id, value) => {
    const collection = data[from];

    const itemIndex = collection.findIndex(e => e.id == id);

    if (itemIndex !== -1) {
        data[from][itemIndex] = {
            ...collection[itemIndex],
            ...value
        }
    }

    return data[from][itemIndex];
}

// Delete
const deleteById = (from, id) => {
    const collection = data[from];

    const itemIndex = collection.findIndex(e => e.id == id);

    const _item = data[from][itemIndex];

    if (itemIndex !== -1) {
        data[from].splice(itemIndex, 1);
    }

    return _item;
}

// Replace all
const replaceAll = (from, newData) => {
    data[from] = newData;
    return data[from];
}

export const db = {
    select,
    create,
    updateById,
    deleteById,
    replaceAll,
}