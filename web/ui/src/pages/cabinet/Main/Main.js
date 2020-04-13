import React from 'react';
import { Switch } from 'react-router-dom';

import { Flex } from '../../../modules/shared/components'
import { Sidebar, SideContainer } from '../../../modules/layout';
import { TeacherMenu } from '../../../modules/cabinet';


const Main = ({ children }) => {
  return <Flex>
    <Sidebar>
      <TeacherMenu />
    </Sidebar>
    <SideContainer> foo<Switch>{children}</Switch></SideContainer>
  </Flex>
};

export default Main;