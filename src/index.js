import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(requestConfig => {
  // default header, e.g. auth
  console.log(requestConfig)
  return requestConfig
}, error => { // error for no internet connection
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => { // error for when the response is not available
  return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
