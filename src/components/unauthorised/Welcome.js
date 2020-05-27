import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';


export default class Welcome extends Component {

    render() {
        return (
            <Fragment>
                <div>YOU'RE WELCOME</div>
                <Redirect to="/login" />
            </Fragment>)
    }
}