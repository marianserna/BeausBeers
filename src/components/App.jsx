import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import BeersStore from '../stores/BeersStore';
import Landing from './landing/Landing';
import Beers from './beersDisplay/Beers';
import Beer from './beer/Beer';

class App extends Component {
  render() {
    return (
      <Provider BeersStore={BeersStore}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/beers" exact component={Beers} />
            <Route path="/beers/:id" exact component={Beer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
