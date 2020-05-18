import React, { Component, Fragment } from 'react';

import './App.css';

import Authorised from "./components/authorised/Authorised"
import UnAuthorised from "./components/unauthorised/UnAuthorised"

import API from "./API"


import {  withRouter } from 'react-router-dom';



const proxy = "https://cors-anywhere.herokuapp.com/"
const KEY = ""
const player_url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${KEY}&include_appinfo=true&steamid=`

class App extends Component {

  state = {
    user: {}
  }

  fetchUserGames() {
    return fetch(`${proxy}${player_url}${this.state.user.steamID64}`)
    .then(res => res.json())
    .then(data => this.setState({
      user: {
        ...this.state.user,
        games: data.response.games
      }
    }))
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate(localStorage.token)
      .then(async data => {
        localStorage.token = data.token
        console.log(data)
        await this.setState({
          user: {
            id: data.id,
            username: data.id,
            bio: data.bio,
            steamID64: data.steamID64
          }
        })

        this.fetchUserGames()
      })
    }

  }

  // componentDidUpdate() {
  //   console.log(this.state.user.games)
  // }


  signIn = async ({id, username, bio, steamID64, token}) => {
    console.log("Signing in!")
    console.log(steamID64)
    console.log(token)
    localStorage.token = token
    await this.setState({
      user: {
        id,
        username,
        bio,
        steamID64
      }
    })

    this.fetchUserGames()

  }

  signOut = () => {
    this.setState({
      user: {}
    })
    localStorage.removeItem("token")
  }

  render() {
    return (
    <Fragment>
      {this.state.user.id ? <Authorised user={this.state.user} signOut={this.signOut} /> : <UnAuthorised username={this.state.username} signIn={this.signIn} />}    
    </Fragment>)}

}


export default withRouter(App)