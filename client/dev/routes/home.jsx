import React from 'react';
import {graphql} from 'react-apollo';
import gpl from 'graphql-tag';

const query = gpl`{
  gUsers {
    username
  }
}
`;

const userItem = (user,i)=><li key={i}>{user.username}</li>

export default graphql(query)(
  ({data: {allUsers=[], loading}}) =>{
    console.log(allUsers);
    return(
      <ul>
        {allUsers.map(userItem)}
      </ul>
    )
  }
)
