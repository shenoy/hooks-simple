import React from 'react';
import useResources from './useResources';

const UserList = () => {

  const users = useResources('users');


  return (

    users.map(user =>
      <ul key={user.id}>
        {user.name}
      </ul>
    )
  );



};

export default UserList;