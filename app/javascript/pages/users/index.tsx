import React, { useEffect, useState } from 'react';
import IUser from "../../types/User/IUser"
import { Container, Header, Body } from './styles';

const UsersIndex: React.FC<IUser[]> = ({...data}) => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    setUsers(Object.values(data) as IUser[])
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