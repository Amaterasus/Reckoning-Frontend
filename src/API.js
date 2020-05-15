const BASE_URL = "http://localhost:3000/"
const LOGIN_URL = `${BASE_URL}login`
const VALIDATE_URL = `${BASE_URL}validate`
const REGISTER_URL = `${BASE_URL}register`
const GET_USER_URL = `${BASE_URL}users/`


const get = (url, token) => {
    const configObject = {
        headers: {
            "Authorization": token
        }
    }

    return fetch(url, configObject)
}

const getUserData = (id, token) => get(`${GET_USER_URL}/${id}`, token).then(res => res.json())

const validate = token => get(VALIDATE_URL, token).then(res => res.json())


const post = (url, body) => {
    const configObject = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
    return fetch(url, configObject)
}

const login = body => post(LOGIN_URL, body).then(res => res.json())

const register = body => post(REGISTER_URL, body).then(res => res.json())

const authorisedFetch = (url, { body, headers, method }) => {
    return fetch(url, {
        method,
        headers: {
            ...headers,
            "Authorization": localStorage.getItem('token'),
        },
        body: JSON.stringify(body)
    })
}
export default { authorisedFetch, getUserData, login, validate, register}