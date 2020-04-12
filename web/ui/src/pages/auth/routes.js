import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthRoutes = ({ match }) => <Switch>
  <Route path={`${match.path}/sign-in`} component={SignIn} />
  <Route path={`${match.path}/sign-up`} component={SignUp} />
</Switch>

export default AuthRoutes;