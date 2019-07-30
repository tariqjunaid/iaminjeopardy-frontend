import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import Completionist from '../Completionist'

class MyCountdown extends Component {
   shouldComponentUpdate() {
      return false
   }
   render() {
      return (
         <Countdown className="column" date={Date.now() + 15000}>
            <Completionist />
         </Countdown>
      )
   }
}
export default MyCountdown;