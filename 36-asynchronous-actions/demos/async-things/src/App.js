import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './home/Home';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Provider store={store}>
          <Home />
        </Provider>
      </div>
      
    );
  }
}
export default App;
