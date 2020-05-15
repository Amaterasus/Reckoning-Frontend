import React, { Component } from "react"
import { Card, Image, Button, Container } from "semantic-ui-react"

export default class GameCard extends Component {

    render(){
        return (
                <Container>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <Card centered>
                        <Card.Content>
                        <Image
                            src={this.props.user.steam_avatar_url}
                        />
                        <Card.Header>{this.props.user.username}</Card.Header>
                        {/* 
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description> */}
                        </Card.Content>
                        <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green' onClick={this.props.register}>
                            Approve
                            </Button>
                            <Button basic color='red' onClick={this.props.wrongSteamID}>
                            Decline
                            </Button>
                        </div>
                        </Card.Content>
                    </Card>
                </Container>
        )
    }
}