import React, { Component, Fragment} from 'react';
import { Redirect } from 'react-router-dom';
import { Card } from "semantic-ui-react"
import SharedGameCard from "./SharedGameCard"

export default class ShowCommonGames extends Component {

    renderGames = () => {
        return this.props.games.map(game => <SharedGameCard details={game}/>)
    }

    render() {
        return (
            <Fragment>
                <Card.Group itemsPerRow={4} >
                    {this.renderGames()}
                </Card.Group>
            </Fragment>)
    }
}