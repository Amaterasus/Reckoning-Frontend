import React, { Component, Fragment} from 'react';
import EditProfileForm from '../../Presentational/EditProfileForm';
import API from '../../API';
import { Redirect } from 'react-router-dom';

export default class EditProfile extends Component {

    state = {
        bio: "",
        password: "",
        password_confirmation: "",
        redirect: false
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    updateProfile = () => {
        API.updateDetails({bio: this.state.bio})
        .then(data => {
            this.props.updateDetails(data)
            this.setState({redirect: true})
        })
    }

    updatePassword = () => {
        API.updatePassword({password: this.state.password, password_confirmation: this.state.password_confirmation})
        .then(data => this.setState({redirect: true}))
    }

    componentDidMount() {
        this.setState({bio: this.props.user.bio})
    }

    render() {
        return (
            <Fragment>
                {this.state.redirect ? <Redirect to={"/"} /> : null}
                <EditProfileForm handleChange={this.handleChange} handleSubmitProfile={this.updateProfile} handleSubmitPassword={this.updatePassword} details={this.state} />
            </Fragment>)
    }
}
