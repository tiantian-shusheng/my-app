import React from 'react';
import User from './User';
import {Consumer} from './context';

export default class Home extends React.Component{
 
  render(){
    return(
      <div>
        <Consumer>{ctx => <User {...ctx}></User>}</Consumer>
      </div>
    )
  }
}
