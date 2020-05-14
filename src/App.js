import React, { Component, Fragment } from 'react';

import './App.css';

import Authorised from "./components/authorised/Authorised"
import UnAuthorised from "./components/unauthorised/UnAuthorised"


import {  withRouter } from 'react-router-dom';

class App extends Component {

  state = {
    
  }

  signIn = ({id, username, bio}) => {
    this.setState({
      id,
      username,
      bio
    }, () =>  this.props.history.push(`/`))

  }

  render() {
    return (
    <Fragment>
      {this.state.id ? <Authorised /> : <UnAuthorised username={this.state.username} signIn={this.signIn} />}    
    </Fragment>)}

}


export default withRouter(App)