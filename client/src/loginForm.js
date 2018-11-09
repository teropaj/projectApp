import React, { Component } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login:"",
                  password:""};



    this.handleLogin = this.handleLogin.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleLogin(event) {
    this.setState({login: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form action="/login" method="post">
      <p>
        <label for="number">PersonID:</label>
        <input type="text" id="number" name="number" size="5"/>
      </p>
      <p>
        <label for="firstname">First name:</label>
        <input type="text" id="firstname" name="firstname" size="15"/>
      </p>
      <p>
        <label for="lastname">Last name:</label>
        <input type="text" id="lastname" name="lastname" size="25"/>
      </p>
      <button type="submit">Send</button>
    </form>
    );
  }
}

export default Login
