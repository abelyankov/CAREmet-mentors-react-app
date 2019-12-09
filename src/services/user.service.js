import { authHeader } from '../helpers';
import {firebaseAuth} from "../firebase/FireBaseConnectr";
import {baseUrl} from "../constants/constants";

export const userService = {
    login: firebaseLogin,
    logout,
    register,
    getAll,
    getById,
    apiLogin,
    update,
    delete: _delete
};

function firebaseLogin(username, password) {
    return firebaseAuth().signInWithEmailAndPassword(username, password)
}

function apiLogin(token) {
    console.log(token);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            'Authorization' : token
        }
    };

    return fetch(baseUrl + "login", {
        method: "POST",
        headers: {
            'Authorization' : token
        }
    }).then(res => res.json())

}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(baseUrl + "register", requestOptions).then(res => res.json());
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {

    return response.then(res => res.json()).catch(error =>

        error);

    // return response.then(text => {
    //     const data = text && JSON.parse(text);
    //     if (!response.ok) {
    //         if (response.status === 401) {
    //             // auto logout if 401 response returned from api
    //             logout();
    //             window.location.reload(true);
    //         }
    //
    //         const error = (data && data.message) || response.statusText;
    //         return Promise.reject(error);
    //     }
    //
    //     return data;
    // });
}