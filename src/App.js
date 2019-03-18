import React, { Component } from 'react';

import Header from './components/Header';
import Site from './Site';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Site />
        <Footer />
      </div>
    );
  }
}

export default App;
