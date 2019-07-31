import React from "react";
import { Card } from "semantic-ui-react";

const Profile = (props) => {
   return props.user ? (
      <Card>
         <Card.Content>
            <Card.Header>Welcome {props.user.username}!</Card.Header>
         </Card.Content>
      </Card>
   ) : null
}

export default Profile;
