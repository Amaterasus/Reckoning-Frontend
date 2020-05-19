import React, { Component } from 'react';
import { Form, Grid, Button} from "semantic-ui-react"

export default class SignUpForm  extends Component {

    render() {
        return (
            <Grid>
                <Grid.Row /><Grid.Row /><Grid.Row />
                <Grid.Row columns={3}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                        <Form onSubmit={this.props.handleSubmit} width={6}>
                            <Form.Input
                                required
                                onChange={this.props.handleChange}
                                value={this.props.details.username}
                                label="Username:"       
                                placeholder="Username"
                                name="username"
                            />
                            <Form.Input     
                                required
                                onChange={this.props.handleChange}
                                value={this.props.details.email}
                                label="Email:"       
                                placeholder="Please enter a valid email address'"
                                name="email"
                            />
                            <Form.Input     
                                required
                                onChange={this.props.handleChange}
                                value={this.props.details.dob}
                                label="Date of Birth:"       
                                placeholder="Dob"
                                name="dob"
                                type="date"
                            />
                            <Form.Input   
                                required
                                onChange={this.props.handleChange}
                                value={this.props.details.password}
                                label="Password:"           
                                placeholder="Password"
                                name="password"
                                type="password"
                            />
                            <Form.Input   
                                required
                                onChange={this.props.handleChange}
                                value={this.props.details.password_confirmation}
                                label="Password Confirmation:"           
                                placeholder="Password Confirmation"
                                name="password_confirmation"
                                type="password"
                            />
                            <Form.Input     
                                required
                                onChange={this.props.handleChange}
                                value={this.props.details.steamID64}
                                label="SteamID64:"       
                                placeholder="SteamID64"
                                name="steamID64"
                                type="number"
                            />
                            <Button secondary>Sign up</Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid.Row> 
            </Grid>
        )
    }
}