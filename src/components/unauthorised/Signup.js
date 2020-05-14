import React, { Component } from 'react';

import SignUpForm from "../../Presentational/SignUpForm"

export default class SignUp  extends Component {

    state = {

    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })

    }

    render() {
        return <SignUpForm handleChange={this.handleChange} />
    }
}