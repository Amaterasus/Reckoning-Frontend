import React, { Component, Fragment} from 'react'

import { Button } from "semantic-ui-react"

import SearchForm from "../../Presentational/SearchForm"
import GroupUserList from "../../Presentational/GroupUserList"
import GroupDisplay from "../../Presentational/GroupDisplay"
import API from "../../API"
import ShowCommonGames from "../../Presentational/ShowCommonGames"

export default class GroupFinder extends Component {

    state = {
        group: [],
        username: "",
        users: [],
        games: null
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

    handleClick = user => {
        this.setState({
            group: [
                ...this.state.group,
                user
            ]
        })
    }

    findCommonGames = () => {
        API.findCommonGames(this.state.group.map(user => user.id))
        .then(data => this.setState({
            games: data
        }))
    }

    removeGames = () => {
        this.setState({
            games: null,
            group: []
        })
    }

    render() {
        return (
            <Fragment>
                {!this.state.games ?
                <Fragment> 
                    <br />
                    <GroupDisplay group={this.state.group} />
                    <br />
                    {this.state.group.length > 1 ? <Button onClick={this.findCommonGames}>Find Common Games</Button> : null}
                    <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                    <GroupUserList users={this.state.users} handleClick={this.handleClick} />
                </Fragment>
                : 
                <Fragment>
                    <Button onClick={this.removeGames}>Change teams</Button>
                    <br />
                    <ShowCommonGames games={this.state.games}/>
                </Fragment>}
            </Fragment>)
    }
}