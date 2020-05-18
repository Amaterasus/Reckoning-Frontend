import React, { Component, Fragment } from 'react';

import { Container, Card } from "semantic-ui-react"


import GameCard from "../../Presentational/GameCard"

const proxy = "https://cors-anywhere.herokuapp.com/"
const KEY = ""
const player_url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${KEY}&include_appinfo=true&steamid=`

export default class ProfileGames extends Component {

    state = {
        games: null
    }

    renderOtherGames() {

        let shared_games = []
        let other_games = []

        this.state.games.forEach(game => {
            if (JSON.stringify(this.props.compareMyGames).includes(JSON.stringify(game))) {
                shared_games = [...shared_games, game]
            } else {
                other_games = [...other_games, game]
            }
            console.log(shared_games)
            console.log(other_games)
        })

        console.log("begining to render games")
        return (
            <Fragment>
                <h2>Games you share!</h2>
                <Card.Group itemsPerRow={4}>{shared_games.map(game => <GameCard key={game.appid} details={game} shared="shared" />)}</Card.Group>  
                <h2>Games they own but you don't!</h2>
                <Card.Group itemsPerRow={4}>{other_games.map(game => <GameCard key={game.appid} details={game} shared="unshared" />)}</Card.Group>  
            </Fragment>
        )
        

    }

    renderMyGames() {
        return <Card.Group itemsPerRow={4}>{this.props.myGames.map(game => <GameCard key={game.appid} details={game} />)}</Card.Group>
    }

    componentDidMount() {
        if (this.props.viewedProfile) {
            fetch(`${proxy}${player_url}${this.props.viewedProfile.steamID64}`)
            .then(res => res.json())
            .then(data => this.setState({games: data.response.games}))
            console.log("fetching games!")
            console.log(this.props.viewedProfile.steamID64)
        }
    }

    render(){
        return (
                this.props.myGames ? this.renderMyGames() :
                this.state.games ? this.renderOtherGames() : null
        )
    }
}