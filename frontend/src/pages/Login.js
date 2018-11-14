import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
  state = {
    username: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const {username} = this.state;

    if(!username.length) return;

    localStorage.setItem('@GoTwitter:username', username);

    this.props.history.push("/timeline");
  };

  handleInputChange = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="GoTwitter" />
        <form onSubmit={this.handleSubmit}>
          <input 
            placeholder="Nome de usuário"
            onChange={this.handleInputChange}
            value={this.state.username}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}