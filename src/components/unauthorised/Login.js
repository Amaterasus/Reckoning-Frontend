import React, { Component } from 'react';

import LoginForm from "../../Presentational/LoginForm"

export default class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })

    }

    handleLogin = e => {
        e.preventDefault()

        const configObject = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch("http://localhost:3000/signin", configObject)
        .then(res => res.json())
        .then(data => console.log(data))
        // fetch("http://localhost:3000/users")
        // .then(res => res.json())
        // .then(data => console.log(data))
    }

    render() {
        return <LoginForm handleChange={this.handleChange} handleSubmit={this.handleLogin} username={this.state.username} password={this.state.password} />
    }
}