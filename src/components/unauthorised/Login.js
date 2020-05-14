import React, { Component } from 'react';

import LoginForm from "../../Presentational/LoginForm"

import API from "../../API"

export default class Login extends Component {

    state = {
        
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })

    }

    handleLogin = e => {
        e.preventDefault()

        API.login(this.state).then(data => this.props.signIn(data))
    }

    render() {
        return <LoginForm handleChange={this.handleChange} handleSubmit={this.handleLogin} username={this.state.username} password={this.state.password} />
    }
}