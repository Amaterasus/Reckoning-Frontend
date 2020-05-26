import React, { Component } from 'react';
import { Form, Grid, Button, Segment} from "semantic-ui-react"

export default class EditProfileForm  extends Component {

    render() {
        return (
            <Grid>
                <Grid.Row /><Grid.Row /><Grid.Row />
                <Grid.Row columns={3}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                        <Segment>
                        <Form onSubmit={this.props.handleSubmitProfile}>
                            <Form.TextArea     
                                required
                                onChange={this.props.handleChange}
                                value={this.props.details.bio}
                                label="Bio:"       
                                placeholder="Bio goes here"
                                name="bio"
                            />
                            <Button secondary>Update Bio</Button>
                        </Form>
                        </Segment>
                        <Segment>
                            <Form onSubmit={this.props.handleSubmitPassword}>
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
                                <Button secondary>Update Password</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid.Row> 
            </Grid>
        )
    }
}