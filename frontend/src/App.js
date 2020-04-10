import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Header,
  Footer
}  from './modules/layout';
import routes from './pages/routes';

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Switch>{routes}</Switch>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;