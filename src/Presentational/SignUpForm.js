import React, { Component } from 'react';
import { Form, Input, Grid, Button} from "semantic-ui-react"

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
                                label="Username:"       
                                placeholder="Username"
                                name="username"
                            />
                            <Form.Field     
                                required
                                control={Input}
                                onChange={this.props.handleChange}
                                label="Email:"       
                                placeholder="Please enter a valid email address'"
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