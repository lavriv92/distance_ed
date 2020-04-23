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
import { ToastProvider } from './modules/toast';

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
          </AuthProvider>
        </ToastProvider>
      </Router>
      
  );
}

export default App;