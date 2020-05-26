import React from 'react';
import { Form, Grid, Button} from "semantic-ui-react"

function LoginForm(props) {
    return (
        <Grid centered>
            <Grid.Row /><Grid.Row /><Grid.Row /><Grid.Row /><Grid.Row /><Grid.Row /><Grid.Row />
            <Grid.Row columns={3}>
                <Grid.Column />
                <Grid.Column>
                <Form onSubmit={props.handleSubmit}>
                    <Form.Input     
                        required
                        onChange={props.handleChange}
                        value={props.username}
                        label="Username:"       
                        placeholder="Username"
                        name="username"
                    />
                    <Form.Input   
                        required
                        onChange={props.handleChange}
                        value={props.password}
                        label="Password:"           
                        placeholder="Password"
                        name="password"
                        type="password"
                    />
                    <Button>Login</Button>
                </Form>
                </Grid.Column>
                <Grid.Column />
            </Grid.Row>
        </Grid>
    )
}

export default LoginForm;