import React, { Component } from 'react';

class Completionist extends Component {

   componentDidMount() {
      console.log(this.props.router)
   }
   
   render() { 
      return (
         <div>'hey'</div>
      )
   }
}
 
export default Completionist;
