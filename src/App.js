import React, { Component, Fragment } from 'react';

import './App.css';

import Authorised from "./components/authorised/Authorised"
import UnAuthorised from "./components/unauthorised/UnAuthorised"

import API from "./API"


import {  withRouter } from 'react-router-dom';


class App extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate(localStorage.token)
      .then(async data => {
        localStorage.token = data.token
        await this.setState({
          user: {
            id: data.id,
            username: data.username,
            bio: data.bio,
            steamID64: data.steamID64,
            games: data.games,
            steam_avatar_url: data.avatar_url
          }
        })
      })
    }
  }

  signIn = ({id, username, bio, steamID64, games, avatar_url, token}) => {
    localStorage.token = token

    this.setState({
      user: {
        id,
        username,
        bio,
        steamID64,
        games,
        steam_avatar_url: avatar_url
      }
    })

  }

  updateDetails = ({bio}) => {

    this.setState({
      user: {
        ...this.state.user,
        bio: bio
      }
    })
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
      {this.state.user.id ? <Authorised updateDetails={this.updateDetails} user={this.state.user} signOut={this.signOut} /> : <UnAuthorised username={this.state.username} signIn={this.signIn} />}    
    </Fragment>)}

}

export default withRouter(App)