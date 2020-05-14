import React, { Component, Fragment} from 'react';

export default class Home extends Component {

    render() {
        return (
            <Fragment>
                <div>signed in correctly</div>
                <button onClick={this.props.signOut}>sign out</button>
            </Fragment>)
    }
}