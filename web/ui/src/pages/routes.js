import React from 'react';
import { Route } from 'react-router-dom';

import AuthRoutes from './auth/routes';
import Home from './Home';

const routes = <>
  <Route path="/" exact component={Home} />
  <Route path="/auth" component={AuthRoutes} />
</>;

export default routes;