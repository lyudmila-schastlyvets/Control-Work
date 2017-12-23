const storage = {
    set: (key, val) => {
        localStorage.setItem(key, JSON.stringify(val))
    },
    get: (key) => JSON.parse(localStorage.getItem(key))
}

export { storage }