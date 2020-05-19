import React, { Component, Fragment} from 'react';
import { Route, Switch, Redirect, withRouter, Link } from "react-router-dom";
import { Button } from "semantic-ui-react"

import Home from "./Home"
import Profile from "./Profile"
import Search from "./Search"

class Authorised extends Component {

    render() {
        return (
            <Fragment>
                <Button as={Link} to={`/profile/${this.props.user.id}`}>Home</Button>
                <Button as={Link} to="/search">Search</Button>
                <Button onClick={this.props.signOut}>Sign out</Button>
                <Switch>
                    <Route exact path="/">
                            <Home />
                    </Route>
                    <Route exact path="/profile/:id" render={(matchProps) => <Profile key={matchProps.match.params.id} {...matchProps} user={this.props.user} />} />
                    <Route exact path="/search">
                        <Search />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Fragment>)
    }
}

export default withRouter(Authorised)