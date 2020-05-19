import React, { Component, Fragment } from 'react';

import { Container, Card } from "semantic-ui-react"


import GameCard from "../../Presentational/GameCard"

export default class ProfileGames extends Component {

    state = {
        games: null
    }

    renderOtherGames() {

        let shared_games = []
        let other_games = []

        this.props.theirGames.forEach(game => {
            if (JSON.stringify(this.props.compareMyGames).includes(`"appid":${game.appid}`)) {
                shared_games = [...shared_games, game]
            } else {
                other_games = [...other_games, game]
            }
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

    render(){
        return (
                this.props.myGames ? this.renderMyGames() :
                this.props.theirGames ? this.renderOtherGames() : null
        )
    }
}