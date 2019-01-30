import React, {Component} from 'react';
import clockInterface from '../clockInterface/clockInterface'

export default class clock extends Component {
  constructor () {
    super()

    this.increment = () => {
      this.props.dispatch({ type: 'INCREMENT' })
    }

    this.decrement = () => {
      this.props.dispatch({ type: 'DECREMENT' })
    }
  }

  render () {
    return (
      <clockInterface
        counter={this.props.counter}
        increment={this.increment}
        decrement={this.decrement}
      />
  );
  }
}
