import React, { Component } from "react"
import { Card, Image} from "semantic-ui-react"



export default class SharedGameCard extends Component {

    render(){
        return (
            <Card raised={true} >
                <a href={`http://store.steampowered.com/app/${this.props.details[0].appid}`} target="_blank">
                    <Image src={`https://steamcdn-a.akamaihd.net/steam/apps/${this.props.details[0].appid}/header.jpg`} />
                </a>

                <Card.Header>{this.props.details[1]} of you own this game</Card.Header>
            </Card>
        )
    }
}