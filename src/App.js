import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import clock from './components/clock/clock';

class App extends Component {

  render() {
    const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT': return state + 1
      case 'DECREMENT': return state - 1
    }
      return state
    }

    const store = createStore(counter)
    return (
      <div className="App">
        <Provider store={store}>
          <clock/>
        </Provider>
      </div>
    );
  }
}

export default App;
