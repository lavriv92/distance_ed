import React from 'react';
import { Switch } from 'react-router-dom';

const Main: React.FC<any> = ({ children }) => (
  <div>
    Profile is here<Switch>{children}</Switch>
  </div>
);

export default Main;
