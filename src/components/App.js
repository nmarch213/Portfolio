import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Particles from 'react-particles-js';

import Header from './Header';
import Landing from './Landing';
import Skills from './Skills';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="">
          <Header />
          <Particles />
          <Route exact path="/" component={Landing} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Particles />
        </div>
      </HashRouter>
    );
  }
}

export default App;
