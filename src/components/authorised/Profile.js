import React, { Component, Fragment} from 'react';
import { Card, Container } from "semantic-ui-react"

import API from "../../API"

import GameCard from "../../Presentational/GameCard"
import UserDetails from "../../Presentational/UserDetails"
import ProfileGames from "./ProfileGames"

const proxy = "https://cors-anywhere.herokuapp.com/"
const KEY = ""
const player_url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${KEY}&include_appinfo=true&steamid=`

export default class Profile extends Component {

    state = {
        viewedProfile: {}
    }

    // componentDidMount() {
    //     API.getUserData(this.props.match.params.id, localStorage.token)
    //     .then(data => this.setState({viewedProfile: data}))

    //     console.log("1")
    // }

    componentDidMount() {
        API.getUserData(this.props.match.params.id, localStorage.token)
        .then(data => this.setState({viewedProfile: data.user, games: data.games}))
        // this.fetchUserAndGamesData()
        // .then(userAndGames => this.setState(userAndGames))
    }

    fetchUserAndGamesData = () => {        
        return API.getUserData(this.props.match.params.id, localStorage.token)
        .then( async data => {
            const gamesData = await fetch(`${proxy}${player_url}${data.steamID64}`).then(res => res.json())

            return {
                viewedProfile: data,
                games: gamesData.response.games,
            }
        })
    }
    // && !this.state.games
    // data.response.games
    // componentDidUpdate() {
    //     if (this.state.viewedProfile.steamID64 !== undefined && !this.state.games){

    //     }
    // }

    fetchGames() {
        console.log("fetching games")
        // fetch(`${proxy}${player_url}${this.state.viewedProfile.steamID64}`)
        // .then(res => res.json())
        // .then(data => this.setState({games: data.response.games}))
    }

    renderGames() {
        return <Card.Group color="red" itemsPerRow={4}>{this.state.games.map(game => <GameCard details={game} />)}</Card.Group>
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
                    <ProfileGames viewedProfile={this.state.viewedProfile} compareMyGames={this.props.user.games} />
                </Container>
            </Fragment> : <div>loading</div>
            
            )
    }
}