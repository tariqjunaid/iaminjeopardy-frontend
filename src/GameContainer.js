import React from 'react';
import GameInfoContainer from './GameInfoContainer';
import GameBoardContainer from './GameBoardContainer';
import { Button } from "semantic-ui-react";
import ResultsContainer from './ResultsContainer'

class GameContainer extends React.Component{
   constructor(){
      super()
      this.state = {
         startGame: false,
         points: 0,
         showResults: false
      }
   }

   handlePoints = () => this.setState({ points: this.state.points + 10 })

   handleClick = () => this.setState({ startGame: !this.state.startGame })

   handleResults = () => {
      this.setState({
         startGame: false,
         showResults: true
      });
      console.log(this.props)

      fetch('http://localhost:3000/games', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
         body: JSON.stringify({
            game: {
               user_id: this.props.user.id,
               score: this.state.points
            }
         })
      })
         .then(response => response.json())
         .then(data => console.log(data))
   }

   render() {
      return (
         <div>
            {this.state.startGame === false &&
               <Button onClick={this.handleClick}>Start Game</Button>}
            <div>
               { this.state.startGame === true ?
                  <div>
                     <GameInfoContainer user={this.props.user} points={this.state.points} handlePoints={this.handlePoints} handleResults={this.handleResults}/>
                     <GameBoardContainer user={this.props.user} points={this.state.points} handlePoints={this.handlePoints} />
                  </div>
                  : null
               }
               {this.state.showResults === true ? <ResultsContainer points={this.state.points}/> : null} 
            </div>
         </div>
      )
   }
}

export default GameContainer;
