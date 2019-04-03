import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Site from './Site';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path='/' exact component={ About } />
          <Route path='/services' component={ Services } />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
