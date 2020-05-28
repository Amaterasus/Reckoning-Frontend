import React, { Component } from "react"
import { Card, Image} from "semantic-ui-react"



export default class SharedGameCard extends Component {

    render(){
        return (
            <Card raised={true} >
                <a href={`http://store.steampowered.com/app/${this.props.appid}`} target="_blank">
                    <Image src={`https://steamcdn-a.akamaihd.net/steam/apps/${this.props.appid}/header.jpg`} />
                </a>

                <Card.Header><h3 className="center">owned by {this.props.players.length} players in your party</h3><ul>{this.props.players.map(player => <li>{player}</li>)}</ul></Card.Header>
            </Card>
        )
    }
}