import React, { Component, Fragment} from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Home from "./Home"
import Profile from "./Profile"

class Authorised extends Component {

    render() {
        return (
            <Fragment>
                <button onClick={this.props.signOut}>sign out</button>
                <Switch>
                    <Route exact path="/">
                            <Home />
                    </Route>
                    <Route exact path="/profile/:id" render={(matchProps) => <Profile {...matchProps} user_id={this.props.user_id} />} />
                    <Redirect to="/" />
                </Switch>
            </Fragment>)
    }
}

export default withRouter(Authorised)