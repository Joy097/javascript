function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getLocalStorage(key) {
    alert(localStorage.getItem(key));
}

function remLocalStorage(key) {
    localStorage.removeItem(key);
}

function clrLocalStorage(key) {
    localStorage.clearItem(key);
}