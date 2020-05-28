import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Container } from "semantic-ui-react"
import SharedGameCard from "./SharedGameCard"

export default class ShowCommonGames extends Component {

    renderGames =  () => {
        let sorted = Object.entries(this.props.games).sort((a,b) => b[1].length - a[1].length)
        return sorted.map(game => <SharedGameCard  appid={game[0]} players={game[1]}/>)
    }

    render() {
        return (
            <Container>
                <Card.Group itemsPerRow={4} >
                    {this.renderGames()}
                    
                </Card.Group>
            </Container>)
    }
}