import React from 'react';
import GameInfoContainer from './GameInfoContainer';
import GameBoardContainer from './GameBoardContainer';
import { Button } from "semantic-ui-react";

class GameContainer extends React.Component{
   constructor(){
      super()
<<<<<<< HEAD
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
=======
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

>>>>>>> 3cd43dc2057d8949a867321dd71140ed1142c12b
         </div>
      )
   }
}

export default GameContainer
