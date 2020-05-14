const BASE_URL = "http://localhost:3000/"
const LOGIN_URL = `${BASE_URL}login`
const VALIDATE_URL = `${BASE_URL}validate`


const get = (url, token) => {
    const configObject = {
        headers: {
            "Authorization": token
        }
    }

    return fetch(url, configObject)
}

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


export default { login, validate}