import React, { Component } from 'react';

import API from "../../API"

import SignUpForm from "../../Presentational/SignUpForm"

export default class SignUp  extends Component {

    state = {

    }

    handleSubmit = () => {
        if (this.state.steamID64.length === 17) {
            API.register(this.state)
        }

    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })

    }

    render() {
        return <SignUpForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
    }
}