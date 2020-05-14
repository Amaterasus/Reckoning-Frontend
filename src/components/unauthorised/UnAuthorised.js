import React, { Component, Fragment } from "react";
import { Route, Switch} from "react-router-dom";

import Login from "./Login"
import Singup from "./Signup"
import Welcome from "./Welcome"


export default class UnAuthorised extends Component {

    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/login">
                        <Login signIn={this.props.signIn} />
                    </Route>
                    <Route exact path="/signup">
                        <Singup />
                    </Route>
                    <Route path="/">
                        <Welcome />
                    </Route>
                </Switch>
            </Fragment>)
    }
}