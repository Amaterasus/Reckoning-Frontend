import React, { Component } from 'react';

import API from "../../API"

import SignUpForm from "../../Presentational/SignUpForm"
import IsThisYou from "../../Presentational/IsThisYou"


export default class SignUp  extends Component {

    state = {
        user: {
            username: "",
            email: "",
            dob: "",
            password: "",
            password_confirmation: "",
            steamID64: ""
        },
        formSubmitted: false
    }

    handleSubmit = () => {
        API.getAvatar({steamID64: this.state.user.steamID64})
        .then(data => this.setState({
                user: {
                    ...this.state.user,
                    steam_avatar_url: data.steam_avatar_url
                },
                formSubmitted: true
        }))
    }

    registerUser = () => {
        API.register(this.state)
        .then(data => this.props.signIn(data))
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })

    }

    wrongSteamID = () => {
        this.setState({
            user: {
                ...this.state.user,
                steamID64: ""
            },
            formSubmitted: false
        })
    }

    render() {
        return (
            !this.state.formSubmitted ? 
            <SignUpForm details={this.state.user} handleSubmit={this.handleSubmit} handleChange={this.handleChange} /> : 
            <IsThisYou user={this.state.user} wrongSteamID={this.wrongSteamID} register={this.registerUser}/>)
    }
}