import React from 'react'
import Countdown from 'react-countdown-now';
import Completionist from './Completionist'

class GameBoardContainer extends React.Component{

   render(){
      return (
         <div>
            I am a GameBoardContainer
            <br />
            <Countdown className="column" date={Date.now() + 150000}>
               <Completionist />
            </Countdown>
         </div>
      )
   }
}

export default GameBoardContainer
