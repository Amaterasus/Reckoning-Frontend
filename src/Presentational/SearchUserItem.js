import React, { Component } from "react"
import { Link } from "react-router-dom"

import { Item, Button, Icon, Label } from "semantic-ui-react"

export default class SearchUserItem extends Component {

    render() {
        return (
            <Item.Group divided>
                <Item as={Link} to={`/profile/${this.props.details.id}`}>
                    <Item.Image src={this.props.details.steam_avatar_url} />
            
                    <Item.Content>
                    <Item.Header>{this.props.details.username}</Item.Header>
                    <Item.Description>{this.props.details.bio ? this.props.details.bio : "Trust me I'm interesting"}</Item.Description>
                    {false ? <Item.Extra>
                        <Button primary floated='right'>
                        Add Friend!
                        <Icon name='right chevron' />
                        </Button>
                    </Item.Extra> : null}
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}