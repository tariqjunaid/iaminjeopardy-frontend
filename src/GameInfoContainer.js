import React from 'react';
import { Grid, Segment } from "semantic-ui-react";
import MyCountdown from './components/countdown';

class GameInfoContainer extends React.Component{
   render(){
      return(
         <Grid columns='equal'>
            <Grid.Row>
               <Grid.Column>
                  <Segment>Username: <strong>{this.props.user.username}</strong></Segment>
               </Grid.Column>
               <Grid.Column>
                  <Segment>
                     <MyCountdown handleResults={this.props.handleResults} />
                  </Segment>
               </Grid.Column>
               <Grid.Column>
                  <Segment>Points: <strong>{this.props.points}</strong></Segment>
               </Grid.Column>
            </Grid.Row>
         </Grid>
      )
   }
}

export default GameInfoContainer;
