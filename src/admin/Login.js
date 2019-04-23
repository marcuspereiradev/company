import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" ref={(ref) => this.email = ref} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" ref={(ref) => this.password = ref} className="form-control" id="password" placeholder="Password" />
          </div>
          <button type="button" onclik={this.authenticUser} className="btn btn-primary">Access</button>
      </div>
    )
  }
}

export default Login;