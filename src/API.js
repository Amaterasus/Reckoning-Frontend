const BASE_URL = "http://localhost:3000/"
const LOGIN_URL = `${BASE_URL}login`
const VALIDATE_URL = `${BASE_URL}validate`
const REGISTER_URL = `${BASE_URL}register`
const GET_USER_URL = `${BASE_URL}users/`
const AVATAR_URL = `${BASE_URL}avatar/`
const SEARCH_URL = `${BASE_URL}search/`
const UPDATE_PASSWORD_URL = `${BASE_URL}updatepassword/`
const UPDATE_DETAILS_URL = `${BASE_URL}updatedetails/`


const get = (url, token) => {
    const configObject = {
        headers: {
            "Authorization": localStorage.token
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
            "Content-Type": "application/json",
            "Authorization": localStorage.token

        },
        body: JSON.stringify(body)
    }
    return fetch(url, configObject)
}

const getAvatar = body => post(AVATAR_URL, body).then(res => res.json())

const search = body => post(SEARCH_URL, body).then(res => res.json())

const login = body => post(LOGIN_URL, body).then(res => res.json())

const register = body => post(REGISTER_URL, body).then(res => res.json())

const updatePassword = body => post(UPDATE_PASSWORD_URL, body).then(res => res.json())

const updateDetails = body => post(UPDATE_DETAILS_URL, body).then(res => res.json())

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
export default { updateDetails, updatePassword, getUserData, authorisedFetch, search, getAvatar, getUserData, login, validate, register}