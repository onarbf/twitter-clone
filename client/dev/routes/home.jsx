import React from 'react';
import {graphql} from 'react-apollo';
import gpl from 'graphql-tag';

import Toolbar from './../components/Toolbar.jsx';

const query = gpl(`{
  gUsers {
    username
  }
}
`);

const userItem = (user,i)=><li key={i}>{user.username}</li>

export default graphql(query)(
  ({data: {gUsers=[], loading}}) =>{
    console.log(gUsers);
    return(
      <div>
        <Toolbar />
        <ul>
          {gUsers.map(userItem)}
        </ul>
      </div>
    )
  }
)
