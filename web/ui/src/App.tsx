import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Header,
}  from './modules/layout';
import { AuthProvider } from './modules/auth';

import routes from './pages/routes';

import styles from './App.module.css'

function App() {
  return (
      <Router>
        <AuthProvider>
        <div className={styles.root}>
          <Header />
          <main className={styles.main}>
            <Switch>{routes}</Switch>
          </main>
        </div>
        </AuthProvider>
      </Router>
      
  );
}

export default App;