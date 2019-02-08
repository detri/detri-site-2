import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Zoom from 'react-reveal/Zoom';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Zoom delay={500}>
          <hr className="header-underline" />
        </Zoom>
        <Navigation />
        <Home />
      </>
    );
  }
}

export default App;
