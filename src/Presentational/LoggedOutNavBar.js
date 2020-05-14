import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Menu } from "semantic-ui-react"

export default class LoggedOutNavBar extends Component {

    render(){
        return (
            <Menu inverted >
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to="/login">
                        Log In
                    </Menu.Item>
                    <Menu.Item as={Link} to="/signup">
                        Sign Up
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

        )
    }
}