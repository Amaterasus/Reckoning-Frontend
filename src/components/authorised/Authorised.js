import React, { Component, Fragment} from 'react';
import { Route, Switch} from "react-router-dom";

import Home from "./Home"

export default class Authorised extends Component {

    render() {
        return (
            <Fragment>
                    <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Fragment>)
    }
}