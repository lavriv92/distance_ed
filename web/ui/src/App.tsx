import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Header} from './modules/layout';
import { AuthProvider } from './modules/auth';

import routes from './pages/routes';

import styles from './App.module.css'
import { ToastProvider } from './modules/toast';
import colors from './theme/colors';

const GlobalStyles = createGlobalStyle`
  * {
    outline: none;
    font-family: 'Roboto Mono', sans-serif;
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

function App() {
  return (
      <Router>
        <ToastProvider>
          <AuthProvider>
          
            <div className={styles.root}>
              <Header />
              <main className={styles.main}>
                <Switch>{routes}</Switch>
              </main>
            </div>
            <GlobalStyles />
          </AuthProvider>
        </ToastProvider>
      </Router>
      
  );
}

export default App;