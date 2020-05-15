import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect} from "react-router-dom";

import Login from "./Login"
import SingUp from "./Signup"
import Welcome from "./Welcome"

import LoggedOutNavBar from "../../Presentational/LoggedOutNavBar"


export default class UnAuthorised extends Component {

    render() {
        return (
            <Fragment>
                <LoggedOutNavBar />
                <Switch>
                    <Route exact path="/login">
                        <Login signIn={this.props.signIn} />
                    </Route>
                    <Route exact path="/signup">
                        <SingUp signIn={this.props.signIn} />
                    </Route>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Fragment>)
    }
}