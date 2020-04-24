import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  width: 15%;
  height: 100vh;
  background: #ffffff;
  border-top: 1px #f6f6f6 solid;
`;

const Sidebar: React.FC<any> = ({ children }) => (
  <StyledSidebar>
    <div>{children}</div>
  </StyledSidebar>
);

export default Sidebar;
