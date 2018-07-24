import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    {/* if the app are in a directory => <BrowserRouter basename = "/my-app"> */}
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
