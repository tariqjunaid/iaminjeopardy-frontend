import React from 'react';
import GameInfoContainer from './GameInfoContainer';
import GameBoardContainer from './GameBoardContainer';

class GameContainer extends React.Component{
   constructor(){
      super()
      this.state= {
         totalPoints: 0,
      }
   }

   render(){
      return(
         <div>
            <GameInfoContainer user={this.props.user} points={this.state.totalPoints} />
            <GameBoardContainer user={this.props.user} />
         </div>
      )
   }
}

export default GameContainer
