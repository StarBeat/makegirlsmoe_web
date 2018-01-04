export const userService = {
    userLogin,
    userLogout,
    userRegister
};

function userLogin(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({ 'userid':username, 'passwd':password })
    };

    return fetch('http://127.0.0.1:5000/user/login', requestOptions)
        .then(handleResponse)
        .then(handleStatue);
}

function userLogout() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: "include"
    };
    return fetch('http://127.0.0.1:5000/user/logout', requestOptions)
        .then(handleResponse)
        .then(handleStatue);
}

function userRegister(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({ 'userid':username, 'passwd':password })
    };

    return fetch('http://127.0.0.1:5000/user/signup', requestOptions)
        .then(handleResponse)
        .then(handleStatue);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}

function handleStatue(status) {
    if (!status.ok){
        return Promise.reject(status.message);
    }
    return status;
}