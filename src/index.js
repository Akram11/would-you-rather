import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App';
import middleware from './middlewares'

const store = createStore(reducer, middleware)

ReactDOM.render(
<Provider store = {store}>

<App />
</Provider>, document.getElementById('root'));
