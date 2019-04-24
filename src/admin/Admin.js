import React, { Component } from 'react';
import { auth } from '../firebase-config';
import { Route, Redirect } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import AdminPortfolio from './AdminPortfolio';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogging: true,
      isAuthenticated: false,
      user: null,
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({
        isLogging: false,
        isAuthenticated: !!user,
        user
      })
    })
  }

  render() {
    if (this.state.isLogging) {
      return (
        <div className="container">
          <h2><span className="glyphicon glyphicon-refresh"></span>Wait...</h2>
        </div>
      )
    }
    if (!this.state.isAuthenticated) {
      return <Redirect to='/login' />
    }
    return (
      <div className="container">
        <h2>Painel Administrativo</h2>
        <Route path={'/'} component={AdminMenu} />
        <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio}/>
      </div>
    )
  }
}

export default Admin;
