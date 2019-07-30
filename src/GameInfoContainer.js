import React from 'react'
import './App.css';
import { Card, CardHeader, CardContent } from "semantic-ui-react";


class GameInfoContainer extends React.Component{
   render(){
      return(


            <div>

               <Card>
                  <CardContent>
                     <Card.Header>Username: {this.props.user.username}</Card.Header>
                     <Card.Header>Points: {this.props.points}</Card.Header>
                  </CardContent>
            </Card>
            </div>

      )
   }
}

export default GameInfoContainer
