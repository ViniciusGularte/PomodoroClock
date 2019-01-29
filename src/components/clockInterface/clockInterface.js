import React from 'react';
import './clockInterface.scss'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter)

const clockInterface = ({counter, increment, decrement}) =>(
  <div className="component-clock-interface">
    <h2>{counter}</h2>
    <button onClick={this.decrement}>-</button>
    <button onClick={this.increment}>+</button>
  </div>
)

export default clockInterface
