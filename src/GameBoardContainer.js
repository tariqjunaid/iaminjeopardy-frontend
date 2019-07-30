import React from 'react'
import GameCard from "./components/GameCard";
import { Card } from 'semantic-ui-react'



const API = 'http://jservice.io/api/random?count=9'

class GameBoardContainer extends React.Component{
<<<<<<< HEAD
   constructor() {
      super()
      this.state = {
         questions: [],
         myAnswer: ''
      }
   }

   submitAnswer = (ques) => {
      if (ques.answer.toLowerCase() === this.state.myAnswer.toLowerCase()) {
         this.props.handlePoints()
         console.log('i am changing timer...');
         
      }
      let updatedQuestions = this.state.questions.map(question => {
         return question.id === ques.id ? { ...question, isSubmitted: true } : question
      })
      this.setState({
         questions: updatedQuestions
      })
      console.log(ques);
   }

   

   getInput = (e) => {
      let answer = e.target.value
      this.setState({ myAnswer: answer });
   }

   componentDidMount() {
      fetch(API)
         .then(response => response.json())
         .then(data => {
            console.log(data);
            this.setState({ questions: data });
         })
   }

   render(){
      return (
         <div className='grid'>
            
               <Card.Group itemsPerRow={3}>
                  {
                     this.state.questions.map(ques => {
                        return <GameCard
                           key={ques.id}
                           ques={ques}
                           getInput={this.getInput}
                           submitAnswer={this.submitAnswer}
                        />
                     })
                  }
            </Card.Group>
            
         
=======
  componentDidMount(){
    fetch("http://jservice.io/api/random?count=100")
    .then(response => response.json())
    .then(data => console.log(data))
  }
   render(){
      return (
         <div>
         <Countdown className="column" date={Date.now() + 600000}>
            <Completionist />
         </Countdown>




>>>>>>> 3cd43dc2057d8949a867321dd71140ed1142c12b
         </div>
      )
   }
}

export default GameBoardContainer
