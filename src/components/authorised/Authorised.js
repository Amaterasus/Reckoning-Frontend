import React, { Component, Fragment} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home"
import Profile from "./Profile"

export default class Authorised extends Component {

    render() {
        return (
            <Fragment>
                <button onClick={this.props.signOut}>sign out</button>
                <Switch>
                    <Route exact path="/">
                            <Home />
                    </Route>
                    <Route exact path="/profile/:id">
                        <Profile />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Fragment>)
    }
}