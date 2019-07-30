import React from 'react';
import GameInfoContainer from './GameInfoContainer';
import GameBoardContainer from './GameBoardContainer';
import { Button } from "semantic-ui-react";

class GameContainer extends React.Component{
   constructor(){
      super()
      this.state= {
         totalPoints: 0,
         showBoard: false
      }
   }

   startGameClick = () => {
     console.log("i was clicked")
     this.setState({
       showBoard: true
     })
   }

   render(){
      return(
         <div>
            <GameInfoContainer user={this.props.user} points={this.state.totalPoints} />

            {this.state.showBoard ? <GameBoardContainer user={this.props.user}/> : <Button onClick={this.startGameClick}>Start Game</Button>}

         </div>
      )
   }
}

export default GameContainer
