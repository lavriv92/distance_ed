import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Header } from './modules/layout';
import { AuthProvider } from './modules/auth';

import routes from './pages/routes';

import { ToastProvider } from './modules/toast';
import colors from './theme/colors';

const GlobalStyles = createGlobalStyle`
  * {
    outline: none;
    font-family: 'RobotoMono', sans-serif;
  }

  html,
  body {
    min-height: 100%;
  }

  body {
    background: #f7f7f7;
  }

  a {
    text-decoration: none;
    color: ${colors.primary};

    &:hover {
      opacity: .9;
    }
  }
`;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Roboto" sans-serif;
`;

const StyledMain = styled.main`
  flex: 1;
`;

function App() {
  return (
      <Router>
        <ToastProvider>
          <AuthProvider>
            <StyledRoot>
              <Header />
              <StyledMain>
                <Switch>{routes}</Switch>
              </StyledMain>
            </StyledRoot>
            <GlobalStyles />
          </AuthProvider>
        </ToastProvider>
      </Router>
      
  );
}

export default App;