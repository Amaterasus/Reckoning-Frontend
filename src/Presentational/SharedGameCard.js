import React, { Component } from "react"
import { Card, Image} from "semantic-ui-react"



export default class SharedGameCard extends Component {

    render(){
        return (
            <Card raised={true} >
                <a href={`http://store.steampowered.com/app/${this.props.appid}`} target="_blank">
                    <Image src={`https://steamcdn-a.akamaihd.net/steam/apps/${this.props.appid}/header.jpg`} />
                </a>

                <Card.Header>{this.props.players.map(player => <div>{player}</div>)}</Card.Header>
            </Card>
        )
    }
}