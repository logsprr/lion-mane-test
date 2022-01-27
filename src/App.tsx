import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { createBrowserHistory } from 'history';

import Routes from 'routes';

const App = () => {
  const navigatorHistory = createBrowserHistory();

  return (
    <>
      <ToastContainer />
      <Router history={navigatorHistory}>
        <Routes />
      </Router>
    </>
  );
};

export default App;
