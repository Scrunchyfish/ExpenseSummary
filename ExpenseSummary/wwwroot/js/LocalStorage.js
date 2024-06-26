window.localStorageManager = {
    setItem: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: function (key) {
        var item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },
    removeItem: function (key) {
        localStorage.removeItem(key);
    }
};

//culture to set currency
window.blazorCulture = {
    get: function () {
        return localStorage['BlazorCulture'];
    },
    set: function (value) {
        localStorage['BlazorCulture'] = value;
    }
};