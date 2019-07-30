import React from 'react'
import Countdown from 'react-countdown-now';
import Completionist from './Completionist'

class GameBoardContainer extends React.Component{

   render(){
      return (
         <div>
         <Countdown className="column" date={Date.now() + 600000}>
            <Completionist />
         </Countdown>


         </div>
      )
   }
}

export default GameBoardContainer
