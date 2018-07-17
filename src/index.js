import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.interceptors.request.use(requestConfig => {
  console.log(requestConfig)
  return requestConfig
}, error => { // error for no internet connection
  console.log(error)
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  console.log(response)
  return response
}, error => { // error for when the response is not available
  console.log(error)
  return Promise.reject(error)
})
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
