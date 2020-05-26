import React, { Component, Fragment} from 'react';
import { Redirect } from 'react-router-dom';

export default class Home extends Component {

    render() {
        return (
            <Fragment>
                <div>signed in correctly</div>
                <Redirect to={`/profile/${this.props.user.id}`} />
            </Fragment>)
    }
}