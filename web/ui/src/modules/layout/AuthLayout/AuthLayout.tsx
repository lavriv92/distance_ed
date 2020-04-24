import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const FirstSection = styled.div`
  flex: 50%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SecondSection = styled.div`
  flex: 50%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 400px;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

const AuthLayout: React.FC<any> = ({ children }) => {
  return (
    <Container>
      <FirstSection>
        <img alt="foo" src="https://www.kindpng.com/picc/m/5-59689_school-cartoon-transparent-background-hd-png-download.png" />
      </FirstSection>
      <SecondSection>
        <Wrapper>{children}</Wrapper>
      </SecondSection>
    </Container>
  );
};

export default AuthLayout; 