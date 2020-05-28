import React, { Component, Fragment} from 'react';
import { Container } from "semantic-ui-react"

import API from "../../API"

import UserDetails from "../../Presentational/UserDetails"
import ProfileGames from "./ProfileGames"

export default class Profile extends Component {

    state = {
        viewedProfile: {}
    }

    componentDidMount() {
        if (parseInt(this.props.match.params.id) !== this.props.user.id) {
            API.getUserData(this.props.match.params.id, localStorage.token)
            .then(data => {
                console.log(data)
                return this.setState({viewedProfile: data.user, games: data.games})
            })
            console.log("fetching user data")
        } else {
            this.setState({viewedProfile: this.props.user})
            console.log("not fetching user data")
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
                    <ProfileGames otherGames={this.state.games.other} sharedGames={this.state.games.shared} />
                </Container>
            </Fragment> : <div>loading</div>
            
            )
    }
}