import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './../components/Home';
import NotFound from './../components/NotFound';

const routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path={['/', '/map', '/chart']} component={Home} /> */}
      <Route exact path='/' component={Home} />
      <Route path='/map' component={Home} />
      <Route path='/chart' component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default routes;
