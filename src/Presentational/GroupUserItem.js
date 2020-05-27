import React, { Component } from "react"

import { Item, Button, Icon } from "semantic-ui-react"

export default class GroupFinderItem extends Component {

    render() {
        return (
            <Item.Group divided>
                <Item>
                    <Item.Image src={this.props.user.steam_avatar_url} />
                    <Item.Content>
                    <Item.Header>{this.props.user.username}</Item.Header>
                    <Item.Description>{this.props.user.bio ? this.props.user.bio : "Trust me I'm interesting"}</Item.Description>
                    <Item.Extra>
                        <Button onClick={() => this.props.handleClick(this.props.user)} primary floated='right'>
                            Add To Group
                            <Icon name='right chevron' />
                        </Button>
                    </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}