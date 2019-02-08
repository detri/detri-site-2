import React, { Component } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Zoom from 'react-reveal/Zoom';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Zoom delay={500}>
          <hr className="header-underline" />
        </Zoom>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </>
    );
  }
}

export default App;
