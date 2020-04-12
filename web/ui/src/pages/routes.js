import React from 'react';
import { Route } from 'react-router-dom';

import AuthRoutes from './auth/routes';
import Home from './Home';
import CabineRoutes from './cabinet/routes';

const routes = <>
  <Route path="/" exact component={Home} />
  <Route path="/auth" component={AuthRoutes} />
  <Route path="/cabinet" component={CabineRoutes} />
</>;

export default routes;