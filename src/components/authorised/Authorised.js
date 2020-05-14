import React, { Component, Fragment} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home"

export default class Authorised extends Component {

    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/">
                        <Home signOut={this.props.signOut} />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Fragment>)
    }
}