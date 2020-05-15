import React, { Component } from "react"

import { Item, Button, Icon, Label } from "semantic-ui-react"

export default class UserDetails extends Component {

    render() {
        return (
            <Item.Group divided>
                <Item>
                    <Item.Image src={this.props.details.steam_avatar_url} />
            
                    <Item.Content>
                    <Item.Header>{this.props.details.username}</Item.Header>
                    <Item.Description>{this.props.details.bio ? this.props.details.bio : "Trust me I'm interesting"}</Item.Description>
                    <Item.Extra>
                        <Button primary floated='right'>
                        Add Friend!
                        <Icon name='right chevron' />
                        </Button>
                    </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
)
    }
}