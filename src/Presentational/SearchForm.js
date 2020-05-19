import React, { Component } from 'react';
import { Form, Button } from "semantic-ui-react"


export default class SearchForm extends Component {

    render(){
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Form.Input
                    onChange={this.props.handleChange}
                    value={this.props.username}
                    label="Username:"       
                    placeholder="Username"
                    name="username"
                    />
                <Button secondary>Search</Button>
            </Form>
        )
    }
}