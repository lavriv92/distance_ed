import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import { AuthLayout } from '../../modules/layout';

const AuthRoutes: React.FC<any> = ({ match }) => (
  <AuthLayout>
    <Switch>
      <Route path={`${match.path}/sign-in`} component={SignIn} />
      <Route path={`${match.path}/sign-up`} component={SignUp} />
    </Switch>
  </AuthLayout>
);

export default AuthRoutes;
