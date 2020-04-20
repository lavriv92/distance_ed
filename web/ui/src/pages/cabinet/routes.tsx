import React from 'react';
import { Route } from 'react-router-dom';

import Main from './Main';
import Classrooms from './Classrooms';
import ClassroomDetails from './ClassroomDetails';

const CabineRoutes: React.FC<any> = ({ match }) => (
  <Main>
    <Route path={`${match.path}/classrooms`} exact component={Classrooms} />
    <Route path={`${match.path}/classrooms/:id`} component={ClassroomDetails} />
  </Main>
);

export default CabineRoutes;
