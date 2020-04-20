import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const StyledMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

type MenuType = React.FC<any> & {
  Item: any
};

const Menu: MenuType  = ({ children, ...restProps }) => <StyledMenu {...restProps}>{children}</StyledMenu>

Menu.Item = Item;

export default Menu;