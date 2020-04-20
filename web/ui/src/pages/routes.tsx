import React from 'react';
import { Route } from 'react-router-dom';

import AuthRoutes from './auth/routes';
import CabineRoutes from './cabinet/routes';
import ProfileRoutes from './profile/routes';

import Home from './Home';

const routes = <>
  <Route path="/" exact component={Home} />
  <Route path="/auth" component={AuthRoutes} />
  <Route path="/cabinet" component={CabineRoutes} />
  <Route path="/profile" component={ProfileRoutes} />
</>;

export default routes;