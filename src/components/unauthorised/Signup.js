import React, { Component } from 'react';

import API from "../../API"

import SignUpForm from "../../Presentational/SignUpForm"
import IsThisYou from "../../Presentational/IsThisYou"


const proxy = "https://cors-anywhere.herokuapp.com/"
const KEY = ""
const player_url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${KEY}&steamids=`

// async function fetchAvatarUrl(steamID64) {
//     let url = ""
//     fetch(`${proxy}${player_url}${steamID64}`)
//     .then(res => res.json())
//     .then(data => url = data.response.players[0].avatarfull)
    
    
//     return url
// }

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
        if (this.state.user.steamID64.length === 17) {

            fetch(`${proxy}${player_url}${this.state.user.steamID64}`)
            .then(res => res.json())
            .then(data => this.setState({
                user: {
                    ...this.state.user,
                    steam_avatar_url: data.response.players[0].avatarfull
                },
                formSubmitted: true
            }))

            // API.register(this.state)
            // .then(data => this.props.signIn(data))
        }

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