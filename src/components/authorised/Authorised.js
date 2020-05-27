import React, { Component, Fragment} from 'react';
import { Route, Switch, Redirect, withRouter, Link } from "react-router-dom";
import { Button } from "semantic-ui-react"

import Home from "./Home"
import GroupFinder from "./GroupFinder"
import Profile from "./Profile"
import Search from "./Search"
import EditProfile from "./EditProfile"
import LoggedInNavBar from '../../Presentational/LoggedInNavBar';

class Authorised extends Component {

    render() {
        return (
            <Fragment>
                <LoggedInNavBar signOut={this.props.signOut} id={this.props.user.id} />
                <Switch>
                    <Route exact path="/">
                        <Home user={this.props.user} />
                    </Route>
                    <Route exact path="/profile/edit">
                        <EditProfile updateDetails={this.props.updateDetails} user={this.props.user} />
                    </Route>
                    <Route exact path="/groupfinder">
                        <GroupFinder />
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