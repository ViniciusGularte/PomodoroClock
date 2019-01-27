import React, {Component} from 'react';
import './clockInterface.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as clockInterfaceActions from "../../store/clockInterface/actions";
export default class clockInterface extends Component {
    constructor(props) {
         super(props);
         this.state = {counter :0};
     }
    render() {
      return <div className="component-clock-interface">Hello! component clockInterface</div>;
    }
  }
