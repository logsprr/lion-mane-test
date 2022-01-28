import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from 'routes';

import { store, persistor } from 'store';

const App = () => {
  const navigatorHistory = createBrowserHistory();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer />
        <Router history={navigatorHistory}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
