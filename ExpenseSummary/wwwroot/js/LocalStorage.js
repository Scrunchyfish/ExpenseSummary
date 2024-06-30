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

// Culture to set currency
window.blazorCulture = {
    get: function () {
        return localStorage['BlazorCulture'];
    },
    set: function (value) {
        localStorage['BlazorCulture'] = value;
    }
};

// Save and load to local pc
window.FileSaveAs = (filename, fileContent) => {
    var link = document.createElement('a');
    link.download = filename;
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(fileContent);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

window.triggerFileInput = (element) => {
    element.click();
};

window.loadFromFile = (element) => {
    return new Promise((resolve, reject) => {
        const file = element.files[0];
        if (!file) {
            resolve(null);
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(e);
        reader.readAsText(file);
    });
};