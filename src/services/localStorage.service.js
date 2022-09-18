export function saveToken(token) {
    localStorage.setItem("token", token);
}

export function checkToken(token) {
    return localStorage.getItem("token");
}

export function storeUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function deconnectUser(navigate) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location = "http://localhost:5173/login";
}