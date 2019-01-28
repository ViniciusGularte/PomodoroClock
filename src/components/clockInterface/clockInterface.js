import React from 'react';
import './clockInterface.scss'


const clockInterface = ({counter, increment, decrement}) =>(
  <div className="component-clock-interface">
    <h2>{counter}</h2>
    <button onClick={this.decrement}>-</button>
    <button onClick={this.increment}>+</button>
  </div>
)

export default clockInterface
