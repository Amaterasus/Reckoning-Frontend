import React, { Component } from 'react';
import { Form, Grid, Button} from "semantic-ui-react"

export default class SignUpForm  extends Component {

    render() {
        return (
            <Grid centered>
                <Grid.Row /><Grid.Row /><Grid.Row />
                <Form>
                    <Form.Input     
                        required
                        onChange={this.props.handleChange}
                        label="Username:"       
                        placeholder="Username"
                        name="username"
                    />
                    <Form.Input     
                        required
                        onChange={this.props.handleChange}
                        label="Email:"       
                        placeholder="Email"
                        name="email"
                    />
                    <Form.Input     
                        required
                        onChange={this.props.handleChange}
                        label="Dob:"       
                        placeholder="Dob"
                        name="dob"
                        type="date"
                    />
                    <Form.Input   
                        required
                        onChange={this.props.handleChange}
                        label="Password:"           
                        placeholder="Password"
                        name="password"
                        type="password"
                    />
                    <Form.Input   
                        required
                        onChange={this.props.handleChange}
                        label="Password Confirmation:"           
                        placeholder="Password Confirmation"
                        name="password_confirmation"
                        type="password"
                    />
                    <Form.Input     
                        required
                        onChange={this.props.handleChange}
                        label="SteamID64:"       
                        placeholder="SteamID64"
                        name="steamID64"
                    />
                    <Button>Sign up</Button>
                </Form>
            </Grid>
        )
    }
}