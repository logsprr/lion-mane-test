import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { createBrowserHistory } from 'history';

import Routes from 'routes';

import { store } from 'store';

const App = () => {
  const navigatorHistory = createBrowserHistory();

  return (
    <Provider store={store}>
      <ToastContainer />
      <Router history={navigatorHistory}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
