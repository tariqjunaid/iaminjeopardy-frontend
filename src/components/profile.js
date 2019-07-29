import React from "react";
import { Card, Image } from "semantic-ui-react";

/* props: {
  avatar: 'someURL',
  username: 'chandler Bing',
  bio: 'i like eggs'
} */

const Profile = (props) => {
   return props.user ? (
      <Card>
         <Image src={props.user.avatar} />
         <Card.Content>
            <Card.Header>Welcome {props.user.username}!</Card.Header>

            <Card.Description>{props.user.bio}</Card.Description>
         </Card.Content>
      </Card>

   ) : null
}

export default Profile;