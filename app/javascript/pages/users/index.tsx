import React, { useEffect, useState } from 'react';
import IUser from "../../types/User/IUser"
import { PageContainer, PageHeader, PageBody } from './styles';
import { TableContainer, Table, Thead, Tbody, Tr, Td, Th } from '../../styles/table'

export const UsersIndex: React.FC<IUser[]> = ({ ...data }) => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    setUsers(Object.values(data) as IUser[])
  }, [])

  return (
    <PageContainer>
      <PageHeader>
        <h1>Lista de Usuários</h1>
      </PageHeader>
      <PageBody>
        <TableContainer>
          <Table>
            <Thead >
              <Tr>
                <Th> Nome </Th>
                <Th> Email </Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </PageBody>
    </PageContainer>
  );
};
