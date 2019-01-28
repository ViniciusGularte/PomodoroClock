import React, {Component} from 'react';
import clockInterface from '../clockInterface/clockInterface'
import './clock.scss'

export default class clock extends Component {
  constructor(props) {
       super(props);
       this.state = {counter :0}
       this.increment = () =>{
         this.setState({
           counter:this.state+1
         })
       }
       this.decrement = () =>{
         this.setState({
           counter:this.state-1
         })
       }
   }
  render() {
    const {count} = this.state
    return(
      <clockInterface counter={count} increment={this.increment} decrement={this.decrement}/>
   );
  }
}
