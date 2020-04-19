import React from 'react';
import { Route } from 'react-router-dom';

import Main from './Main';
import Classrooms from './Classrooms';

const CabineRoutes = ({ match }) => <Main>
  <Route path={`${match.path}/classrooms`} component={Classrooms} />
</Main>;

export default CabineRoutes;