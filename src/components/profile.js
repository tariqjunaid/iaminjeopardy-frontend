import React from "react";
import { Card } from "semantic-ui-react";

const Profile = (props) => {
   return props.user ? (
      <Card>
         {/* <Image src={props.user.avatar} /> */}
         <Card.Content>
            <Card.Header>Welcome to IAmInJeopardy {props.user.username}!</Card.Header>

            {/* <Card.Description>{props.user.bio}</Card.Description> */}
         </Card.Content>
      </Card>
      
   ) : null
}

export default Profile;
