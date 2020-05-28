import React, { Component } from "react"

import { Item, Button, Icon, Label } from "semantic-ui-react"
import { Link } from "react-router-dom"

export default class UserDetails extends Component {

    render() {
        return (
            <Item.Group divided>
                <Item>
                    <Item.Image src={this.props.details.steam_avatar_url} />
            
                    <Item.Content>
                    <Item.Header>{this.props.details.username}</Item.Header>
                    <Item.Description>{this.props.details.bio ? this.props.details.bio : "Trust me I'm interesting"}</Item.Description>
                    {this.props.mine ? <Item.Extra>
                        <Button as={Link} to={`/profile/edit`} primary floated='right'>
                        Edit Profile!
                        <Icon name='right chevron' />
                        </Button>
                    </Item.Extra> : null}
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}