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
      .then(data => {
        localStorage.token = data.token
        this.setState({
          user: {
            id: data.id,
            username: data.id,
            bio: data.bio
          }
        })
      })
    }

  }

  signIn = ({id, username, bio, token}) => {
    localStorage.token = token
    this.setState({
      user: {
        id,
        username,
        bio
      }
    }, () =>  this.props.history.push(`/`))

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
      {this.state.user.id ? <Authorised signOut={this.signOut} /> : <UnAuthorised username={this.state.username} signIn={this.signIn} />}    
    </Fragment>)}

}


export default withRouter(App)