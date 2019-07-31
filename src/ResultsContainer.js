import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ResultsContainer = (props) => {
   return (
      <Card className='result'>
         <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjgPkIBECBIjsA0OD0aX_nxXp_tWVEqwiB_tDVPZPjgAvz7N6' wrapped ui={false} />
         <Card.Content>
            <Card.Header>{props.user.username}</Card.Header>
            <Card.Meta>
               <span className='date'>Joined in 2019</span>
            </Card.Meta>
            <Card.Description>
               You have scored: <h3>{props.points}</h3> points
            </Card.Description>
         </Card.Content>
         <Card.Content extra>
            {/* <a>
               <Icon name='user' />
               22 Friends
            </a> */}
         </Card.Content>
      </Card>
   )
}

export default ResultsContainer;
