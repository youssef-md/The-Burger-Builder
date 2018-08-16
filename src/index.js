import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  resultReducer: resultReducer
})

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action)
      const result = next(action)
      console.log('[Middleware] Next state', store.getState())
      return result
    }    
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(<Provider store = { store }><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
