import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import { Card, Image, Item} from "semantic-ui-react"



export default class GameCard extends Component {

    render(){
        return (
            <Card raised={true} className={this.props.shared} >
                <a href={`http://store.steampowered.com/app/${this.props.details.appid}`} target="_blank">
                    <Image src={`https://steamcdn-a.akamaihd.net/steam/apps/${this.props.details.appid}/header.jpg`} />
                </a>

                <Card.Header>{this.props.details.name}</Card.Header>
            </Card>
        )
    }
}