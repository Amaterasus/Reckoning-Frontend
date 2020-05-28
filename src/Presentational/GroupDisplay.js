import React, { Component, Fragment} from 'react'
import { Card } from "semantic-ui-react"

import GroupUserCard from "./GroupUserCard"

export default class GroupDisplay extends Component {

    renderGroup = () => {
        return this.props.group.map(user => <GroupUserCard user={user} />)
    }

    render() {
        return (
            <Fragment>
                <Card.Group itemsPerRow={10} >
                    {this.renderGroup()}
                </Card.Group>
            </Fragment>)
    }
}