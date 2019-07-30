import React from "react";
import { Card, Button, TextArea } from 'semantic-ui-react'

const GameCard = props => {
   const { ques } = props;

   return (
         <Card>
            <Card.Content>
               <Card.Header>{ques.category.title}</Card.Header>
               <Card.Meta>{ques.value}</Card.Meta>
               <Card.Description>{ques.question}</Card.Description>
            </Card.Content>
            <TextArea onChange={props.getInput} placeholder='Type your answer' />
            <Card.Content extra>
               
            {ques.isSubmitted === true ? (
               <Button disabled>Submitted</Button>
            ) : (
                  <Button onClick={() => props.submitAnswer(ques)} basic color='green'>Submit</Button>
            )}
            </Card.Content>
         </Card>
   )
};

export default GameCard;


