export const Memory = {
    get: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
    set: (key, value) => {
        return localStorage.setItem(key, JSON.stringify(value));
    },
    remove: (key) => {
        return localStorage.removeItem(key);
    }
}