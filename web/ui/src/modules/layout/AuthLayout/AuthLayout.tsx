import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const FirstSection = styled.div`
  flex: 50%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const SecondSection = styled.div`
  flex: 50%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AuthLayout: React.FC<any> = ({ children }) => {
  return (
    <Container>
      <FirstSection>
        <img src="https://www.kindpng.com/picc/m/5-59689_school-cartoon-transparent-background-hd-png-download.png" />
      </FirstSection>
      <SecondSection>
        {children}
      </SecondSection>
    </Container>
  );
};

export default AuthLayout; 