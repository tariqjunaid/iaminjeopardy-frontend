//header for game
import React from 'react'
import Countdown from 'react-countdown-now';
import GameInfoContainer from './GameInfoContainer'
import GameBoardContainer from './GameBoardContainer'
import Completionist from './Completionist'
import './App.css';


class GameContainer extends React.Component{
  constructor(){
    super()
    this.state= {
      totalPoints: 0,
      username:""
    }
  }



  render(){
    return(
      <div>
      <GameInfoContainer className="column" />

      <Countdown  className="column" date={Date.now() + 600000}>
        <Completionist/>
         </Countdown>

         <GameBoardContainer />
          </div>
    )
  }
}
export default GameContainer
