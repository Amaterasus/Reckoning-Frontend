import React, { Component, Fragment} from 'react';
import { Route, Switch, Redirect, withRouter, Link } from "react-router-dom";
import { Button } from "semantic-ui-react"

import Home from "./Home"
import Profile from "./Profile"

class Authorised extends Component {

    render() {
        return (
            <Fragment>
                <button onClick={this.props.signOut}>sign out</button>
                <Button as={Link} to="/">Home</Button>
                <Button as={Link} to="/profile/1">Skye</Button>
                <Button as={Link} to="/profile/2">Tal</Button>
                <Switch>
                    <Route exact path="/">
                            <Home />
                    </Route>
                    <Route exact path="/profile/:id" render={(matchProps) => <Profile key={matchProps.match.params.id} {...matchProps} user={this.props.user} />} />
                    <Redirect to="/" />
                </Switch>
            </Fragment>)
    }
}

export default withRouter(Authorised)