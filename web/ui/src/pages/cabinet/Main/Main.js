import React from 'react';
import classNames from 'classnames';
import { Switch, Link } from 'react-router-dom';

import { Flex } from '../../../modules/shared/components'
import { Classes, Card } from '@blueprintjs/core';


const Main = ({ children }) => {
  const buttonClassName = classNames(Classes.BUTTON, Classes.LARGE, Classes.MINIMAL);


  return <Flex>
    <Card>
      <ul>
        <li>
          <Link className={buttonClassName} to="/cabinet/profile">Profile</Link>
        </li>
      </ul>
    </Card>
    <div> foo<Switch>{children}</Switch></div>
  </Flex>
};

export default Main;