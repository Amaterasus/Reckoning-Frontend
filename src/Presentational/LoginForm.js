import React from 'react';

function LoginForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <label>Username:</label>
        <input value={props.username} type="text" name="username" onChange={props.handleChange}></input>
        <br />
        <label>Password:</label>
        <input value={props.password} type="password" name="password" onChange={props.handleChange}></input>
        <br />
        <button>Submit</button>
    </form>
}

export default LoginForm;