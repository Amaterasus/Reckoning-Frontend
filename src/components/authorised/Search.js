import React, { Component, Fragment } from 'react';

import SearchForm from "../../Presentational/SearchForm"
import UserList from "../../Presentational/UserList"

import API from "../../API"

export default class Search extends Component {

    state = {
        username: "",
        users: []
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = () => {
        API.search(this.state)
        .then(data => this.setState({users: [...data]}))
    }

    render(){
        return (
            <Fragment>
                <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} username={this.state.username} />
                <UserList users={this.state.users} />
            </Fragment>
        )
    }
}