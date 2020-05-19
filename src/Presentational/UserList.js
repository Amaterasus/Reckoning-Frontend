import React, { Component, Fragment } from 'react';
import { Form, Button } from "semantic-ui-react"

import SearchUserItem from "./SearchUserItem"


export default class UserList extends Component {

    renderUsers = () => {
        return this.props.users.map(user => <SearchUserItem details={user} />)
    }

    render(){
        return (
            <Fragment>
                {this.renderUsers()}
            </Fragment>
        )
    }
}