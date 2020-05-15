import React, { Component, Fragment} from 'react';
import { Card } from "semantic-ui-react"

import API from "../../API"

import GameCard from "../../Presentational/GameCard"

const proxy = "https://cors-anywhere.herokuapp.com/"
const KEY = ""
const player_url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${KEY}&include_appinfo=true&steamid=`

export default class Profile extends Component {

    state = {
        viewedProfile: null,
        games: []
    }

    // componentDidMount() {
    //     API.getUserData(this.props.match.params.id, localStorage.token)
    //     .then(data => this.setState({viewedProfile: data}))

    //     console.log("1")
    // }

    componentDidMount() {
        this.fetchUserAndGamesData()
        .then(userAndGames => this.setState(userAndGames))
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
    componentDidUpdate() {
        if (this.state.viewedProfile.steamID64 !== undefined && !this.state.games){

        }
    }

    fetchGames() {
        console.log("fetching games")
        console.log(this.state.viewedProfile.steamID64)
        fetch(`${proxy}${player_url}${this.state.viewedProfile.steamID64}`)
        .then(res => res.json())
        .then(data => this.setState({games: data.response.games}))
    }

    renderGames() {
        return <Card.Group color="red" itemsPerRow={4}>{this.state.games.map(game => <GameCard details={game} />)}</Card.Group>
    }

    render() {
        return (
            <Fragment>
                {/* {this.state.viewedProfile.steamID64 !== undefined ? this.fetchGames() : null} */}
                {this.renderGames() }
            </Fragment>)
    }
}