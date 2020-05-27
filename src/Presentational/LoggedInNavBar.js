import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Menu , Segment} from "semantic-ui-react"

export default class LoggedInNavBar extends Component {

    render(){
        return (
            <Segment inverted>
                <Menu inverted secondary>
                    <Menu.Item as={Link} to={`/profile/${this.props.id}`}>
                        Home
                    </Menu.Item>
                    <Menu.Item as={Link} to="/search">
                        Search
                    </Menu.Item>
                    <Menu.Item as={Link} to="/groupfinder">
                        Group Finder
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item onClick={this.props.signOut} >
                            Sign Out
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Segment>
        )
    }
}