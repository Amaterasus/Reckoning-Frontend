import React, { Component } from 'react';

import { Container, Card } from "semantic-ui-react"


import GameCard from "../../Presentational/GameCard"

const proxy = "https://cors-anywhere.herokuapp.com/"
const KEY = ""
const player_url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${KEY}&include_appinfo=true&steamid=`

export default class ProfileGames extends Component {

    state = {
        games: null
    }

    renderGames() {
        return <Card.Group  itemsPerRow={4}>{this.state.games.map(game => <GameCard key={game.appid} details={game} />)}</Card.Group>  
    }

    componentDidMount() {
        fetch(`${proxy}${player_url}${this.props.viewedProfile.steamID64}`)
        .then(res => res.json())
        .then(data => this.setState({games: data.response.games}))
        console.log("fetching games!")
        console.log(this.props.viewedProfile.steamID64)
    }

    render(){
        return (
                this.state.games ? this.renderGames() : null
        )
    }
}