import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../firebase-config';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isLogging: false,
      error: false,
    }

    this.email = null;
    this.password = null;

    this.authenticUser = this.authenticUser.bind(this);
  }

  authenticUser() {
    this.setState({ isLogging: true, error: false });
    auth.signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(user => {
        console.log(`User ${user} logged`);
        this.setState({ isAuthenticated: true })
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true, isAuthenticated: false, isLogging: false })
      })
  }

  render() {
    if (this.state.isAuthenticated) {
      return <Redirect to='/admin' />
    }
    return (
      <div className="container">
        <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" ref={(ref) => this.email = ref} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" ref={(ref) => this.password = ref} className="form-control" id="password" placeholder="Password" />
            {this.state.error && <small id="emailHelp" className="form-text text-muted">E-mail or Password Invalid!.</small>}
          </div>
          <button type="button" disabled={this.state.isLogging} onClick={this.authenticUser} className="btn btn-primary">Access</button>
      </div>
    )
  }
}

export default Login;
