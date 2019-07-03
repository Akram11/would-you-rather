import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import middleware from './middlewares';
import { BrowserRouter as Router } from 'react-router-dom';
import RootWithAuth from '../src/components/routes/routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById('root')
);
