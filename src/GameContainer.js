//header for game
import React from 'react'
import Countdown from 'react-countdown-now';


class GameContainer extends React.Component{
  constructor(){
    super()
    this.state= {
      totalPoints: 0,
      username:""

    }
  }
  Completionist = () => {
  }

  render(){
    return(
      <div>
      I am a  GameContainer
      <Countdown date={Date.now() + 600000}>
      {this.Completionist}

         </Countdown>
          </div>
          <GameInfoContainer / >
    )
  }
}
export default GameContainer
