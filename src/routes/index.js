import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Map from './../components/Map';
import Chart from './../components/Chart';
import NotFound from './../components/NotFound';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Map} />
      <Route path="/chart" component={Chart} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default routes;
