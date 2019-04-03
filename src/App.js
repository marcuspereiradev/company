import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path='/' exact component={ About } />
          <Route path='/services' component={ Services } />
          <Route path='/portfolio' component={ Portfolio } />
          <Route path='/pricing' component={ Pricing } />
          <Route path='/contact' component={ Contact } />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
