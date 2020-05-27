import React, { Component, Fragment} from 'react'
import { Card, Image} from "semantic-ui-react"

export default class GroupUserCard extends Component {


    render() {
        return (
            <Fragment>
                <Card>
                    <Image src={this.props.user.steam_avatar_url} />
                </Card>
            </Fragment>)
    }
}