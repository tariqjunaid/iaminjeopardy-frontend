import React from "react";
import { Header } from "semantic-ui-react";

const Profile = (props) => {
   return props.user ? (
      <Header as='h5' block>
         Welcome {props.user.username}!
      </Header>
   ) : null
}

export default Profile;
