import React from 'react';
import './clockInterface.scss'

const clockInterface = ({counter, increment, decrement}) =>(
  <div className="component-clock-interface">
    <h2>{counter}</h2>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)

export default clockInterface;
