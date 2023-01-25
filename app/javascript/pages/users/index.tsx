import React, { useEffect, useState } from 'react';
import IUserProps from './userProps';
// import { Container } from './styles';

const UsersIndex: React.FC<IUserProps[]> = ({...data}) => {
  const [users, setUsers] = useState<IUserProps[]>([])

  useEffect(() => {
    const user_data = Object.values(data) as IUserProps[]
    console.log(user_data)
    setUsers(user_data)
  }, [])

  return (
    <>
      {users.map((v) => (
        <div key={v.name}>
          <p>name: {v.name}</p>
          <p>email: {v.email}</p>
          <p>----------------</p>
        </div>
      ))}
    </>
  );
};

export default UsersIndex;