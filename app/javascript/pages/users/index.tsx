import React, { useEffect, useState } from 'react';
import IUserProps from './userProps';
import { Container, Header, Body } from './styles';

const UsersIndex: React.FC<IUserProps[]> = ({...data}) => {
  const [users, setUsers] = useState<IUserProps[]>([])

  useEffect(() => {
    setUsers(Object.values(data) as IUserProps[])
  }, [])

  return (
    <Container>
      <Header>
       <h1>Lista de usuários</h1>
      </Header>
      <Body>
      {users.map((user) => (
        <div key={user.id}>
          <p>nome: {user.name}</p>
          <p>email: {user.email}</p>
          <p>----------------</p>
        </div>
      ))}
      </Body>
    </Container>
  );
};

export default UsersIndex;