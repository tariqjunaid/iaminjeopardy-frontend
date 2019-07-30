import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'


class Completionist extends Component {

   componentDidMount() {
      console.log(this.props.router)
   }
   
   
   render() { 
      return (
         <div>
           'hey'
         </div>
        
      );
   }
}
 
export default Completionist;
