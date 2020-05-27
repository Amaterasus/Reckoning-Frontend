import React, { Component, Fragment } from 'react'

import GroupUserItem from "./GroupUserItem"


export default class GroupUserList extends Component {

    renderUsers = () => {
        return this.props.users.map(user => <GroupUserItem user={user} handleClick={this.props.handleClick} />)
    }

    render(){
        return (
            <Fragment>
                {this.renderUsers()}
            </Fragment>
        )
    }
}