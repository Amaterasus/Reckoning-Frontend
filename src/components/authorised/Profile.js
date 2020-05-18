import React, { Component, Fragment} from 'react';
import { Card, Container } from "semantic-ui-react"

import API from "../../API"

import GameCard from "../../Presentational/GameCard"
import UserDetails from "../../Presentational/UserDetails"
import ProfileGames from "./ProfileGames"

export default class Profile extends Component {

    state = {
        viewedProfile: {}
    }

    componentDidMount() {
        if (this.props.match.params.id !== this.props.user.id) {
            API.getUserData(this.props.match.params.id, localStorage.token)
            .then(data => this.setState({viewedProfile: data.user, games: data.games}))
        } else {
            this.setState({viewedProfile: this.props.user})
        }
    }

    render() {
        return (
            this.state.viewedProfile.id === this.props.user.id && this.props.user.games ? 
            <Fragment>
                <Container>
                    <UserDetails details={this.state.viewedProfile} mine={true} />
                    <ProfileGames myGames={this.props.user.games} />
                </Container>
            </Fragment> : 
            this.state.viewedProfile.id ?
            <Fragment>
                <Container>
                    <UserDetails details={this.state.viewedProfile} mine={false} />
                    <ProfileGames theirGames={this.state.games} compareMyGames={this.props.user.games} />
                </Container>
            </Fragment> : <div>loading</div>
            
            )
    }
}