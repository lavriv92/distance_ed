import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Header,
  Footer
}  from './modules/layout';
import { AuthProvider } from './modules/auth';

import routes from './pages/routes';


function App() {
  return (
      <Router>
        <AuthProvider>
        <>
          <Header />
          <main>
            <Switch>{routes}</Switch>
          </main>
          <Footer />
        </>
        </AuthProvider>
      </Router>
      
  );
}

export default App;