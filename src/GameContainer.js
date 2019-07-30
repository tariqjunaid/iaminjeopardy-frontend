import React from 'react';
import GameInfoContainer from './GameInfoContainer';
import GameBoardContainer from './GameBoardContainer';
import { Button } from "semantic-ui-react";

class GameContainer extends React.Component{
   constructor(){
      super()
      this.state = {
         startGame: false,
         points: 0
      }
   }

   handlePoints = () => {
      this.setState({ points: this.state.points + 10 });
   }

   handleClick = () => { 
      this.setState({ startGame: !this.state.startGame });
    }

   render() {
      return (
         <div>
             <Button onClick={this.handleClick}>
                Start Game
             </Button>
            
             <div>
               {
               this.state.startGame === true &&
               <div>
                     <GameInfoContainer user={this.props.user} points={this.state.points} handlePoints={this.handlePoints}/>
                     <GameBoardContainer user={this.props.user} points={this.state.points} handlePoints={this.handlePoints} />
               </div>
               }
            </div>
         </div>
      )
   }
}

export default GameContainer
