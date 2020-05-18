import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import { Card, Image} from "semantic-ui-react"


// appid
// 12200
// has_community_visible_stats
// true
// img_icon_url
// "791f13dd4ea6c4cdf171670cc576682171c1eae5"
// img_logo_url
// "e2aad562be7e67c2477972fa738675e005cb73df"
// name
// game name here


export default class GameCard extends Component {

    render(){
        return (
            <Card className={this.props.shared} >
                <a href={`http://store.steampowered.com/app/${this.props.details.appid}`} target="_blank">
                    <Image src={`https://steamcdn-a.akamaihd.net/steam/apps/${this.props.details.appid}/header.jpg`} />
                </a>

                <Card.Header>{this.props.details.name}</Card.Header>
            </Card>
        )
    }
}